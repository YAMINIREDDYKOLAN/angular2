import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
//import { UploadDocumentComponent } from './upload-document/upload-document.component';
import { ViewStatusComponent } from './view-status/view-status.component';
import { UploadDocumentComponent } from './upload-document/upload-document.component';


const routes: Routes = [
  {path:'app-login',component:LoginComponent},
 {path:'app-upload-document',component:UploadDocumentComponent},
  {path:'app-view-status',component:ViewStatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
