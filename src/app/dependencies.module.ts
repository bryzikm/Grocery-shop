import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  declarations: [],
  exports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatDialogModule,
    FormsModule
  ]
})
export class DependenciesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DependenciesModule
    };
  }
}
