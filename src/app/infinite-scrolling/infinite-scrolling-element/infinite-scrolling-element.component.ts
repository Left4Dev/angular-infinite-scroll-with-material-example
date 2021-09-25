import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-scrolling-element',
  templateUrl: './infinite-scrolling-element.component.html',
  styleUrls: ['./infinite-scrolling-element.component.scss']
})
export class InfiniteScrollingElementComponent implements OnInit {
  @Input() item: any = {}

  constructor() { }

  ngOnInit(): void { }

}
