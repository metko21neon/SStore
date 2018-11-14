import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SStoreModule } from './store/store.module';
import { MaterialModule } from './material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './store/sidebar/sidebar.component';
import { NavbarComponent } from './store/navbar/navbar.component';
import {PageHeaderComponent} from './store/page-header/page-header.component';
import { ProductDetailsComponent } from './store/product-details/product-details.component';
import { NavigationComponent } from './schematics/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule,
  MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { DashboardComponent } from './schematics/dashboard/dashboard.component';
import {AuthComponent} from './admin/auth/auth.component';
import {FormsModule} from '@angular/forms';
import {TokenInterceptor} from './model/interceptors/token.interceptor';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {effects, metaReducers} from './model/store';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    PageHeaderComponent,
    ProductDetailsComponent,
    NavigationComponent,
    DashboardComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    SStoreModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({}),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
