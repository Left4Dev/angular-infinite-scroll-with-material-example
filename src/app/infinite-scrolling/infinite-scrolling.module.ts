import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../app-material/app-material.module';
import { InfiniteScrollingComponent } from './infinite-scrolling.component';



@NgModule({
  declarations: [InfiniteScrollingComponent],
  imports: [
    AppMaterialModule
  ],
  exports: [
    AppMaterialModule,
    InfiniteScrollingComponent
  ]
})
export class InfiniteScrollingModule { }
