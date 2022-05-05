import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ActionButtonComponent} from "../stories/common/buttons/action-button/action-button.component";
import {PageHeaderComponent} from "../stories/list-items/page-header/page-header.component";
import {FilterTextboxComponent} from "../stories/common/textbox/filter-textbox/filter-textbox.component";
import {HeaderComponent} from "../stories/common/typography/header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    ActionButtonComponent,
    PageHeaderComponent,
    FilterTextboxComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
