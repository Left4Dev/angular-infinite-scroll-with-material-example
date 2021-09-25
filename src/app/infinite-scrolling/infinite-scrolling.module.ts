import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../app-material/app-material.module';
import { InfiniteScrollingElementComponent } from './infinite-scrolling-element/infinite-scrolling-element.component';
import { InfiniteScrollingComponent } from './infinite-scrolling.component';



@NgModule({
  declarations: [ InfiniteScrollingComponent,InfiniteScrollingElementComponent],
  imports: [
    AppMaterialModule
  ],
  exports: [
    InfiniteScrollingElementComponent,
    InfiniteScrollingComponent
  ]
})
export class InfiniteScrollingModule { }
