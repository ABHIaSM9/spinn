import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations:[

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
  ],
  exports:[
    RouterModule
  ]
})
export class CoreModule {
   constructor(@Optional() @SkipSelf() core:CoreModule){
     console.log('core constructor');
    if(core){
      throw new Error("You should import core module only in the root module")
    }
   }
 }
