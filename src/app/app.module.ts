import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from './store/store.module';
import { MaterialModule } from './material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SidebarComponent } from './store/sidebar/sidebar.component';
import { NavbarComponent } from './store/navbar/navbar.component';
import {PageHeaderComponent} from './store/page-header/page-header.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    StoreModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
