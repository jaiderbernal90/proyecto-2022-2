import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingButtonDirective } from './directives/loading-button.directive';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    LoadingButtonDirective,
    LogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingButtonDirective,
    LogoComponent
  ]
})
export class CoreModule { }
