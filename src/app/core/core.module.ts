import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundComponent } from './layout';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './interceptors/loader.interceptors';



@NgModule({
  declarations:[
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
  ],
  exports:[
    RouterModule,
    PageNotFoundComponent,
  ],
  providers:[
    {provide:HTTP_INTERCEPTORS,useClass:LoaderInterceptor,multi:true}
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
