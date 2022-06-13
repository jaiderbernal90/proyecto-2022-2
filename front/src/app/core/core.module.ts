import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingButtonDirective } from './directives/loading-button.directive';



@NgModule({
  declarations: [
    LoadingButtonDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingButtonDirective,
  ]
})
export class CoreModule { }
