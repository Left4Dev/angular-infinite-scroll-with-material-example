import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
