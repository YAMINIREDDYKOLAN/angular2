import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ViewStatusComponent } from './view-status/view-status.component';
import { BackgroundService } from './background.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadDocumentComponent } from './upload-document/upload-document.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewStatusComponent,
    UploadDocumentComponent,
    
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BackgroundService],
  bootstrap: [AppComponent]
})
export class AppModule { }
