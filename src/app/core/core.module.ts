/**
 * DO import modules that should be instantiated once in your app.
 * DO place services in the module, but do not provide them.
 * DO NOT declare components, pipes, directives.
 * DO NOT import the CoreModule into any modules other than the AppModule.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
