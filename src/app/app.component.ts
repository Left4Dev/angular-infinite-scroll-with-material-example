import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, NgZone, ViewChild } from '@angular/core';
import { ApiService, User } from './api.service';
import { delay, filter, map, pairwise, throttleTime } from 'rxjs/operators';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('scroller') scroller: any;
  title = 'angular-playground';

  listItems:User[] = [];

  loading = false;
  page = 0;
  lastPage = false;
  constructor(private ngZone: NgZone,private api: ApiService) { }

  ngOnInit(): void {
    this.fetchMore();
  }

  ngAfterViewInit(): void {

    this.scroller.elementScrolled().pipe(
      map(() => this.scroller.measureScrollOffset('bottom')),
      pairwise(),
      filter(([y1, y2]) => (y2 < y1 && y2 < 140)),
      throttleTime(50)

    ).subscribe(() => {
      this.ngZone.run(() => {
        this.fetchMore();
      });
    }
    );
  }

  fetchMore(): void {

    if(this.lastPage === true) { return }

    this.loading = true;

    this.api.getUsers({ page:this.page }).subscribe((data:User[]) => this.appendData(data));

  }
  appendData(data: User[]){

      this.loading = false;
      if (!data || data.length === 0) {
        this.lastPage = true;
        return
      }

      this.listItems = [...this.listItems, ...data];

      this.page++;

  }
}
