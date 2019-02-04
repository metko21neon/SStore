import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RestDatasourceService } from './core/rest-datasourse.service';
import { DatasourceService } from './core/datasource.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    { provide: DatasourceService, useClass: RestDatasourceService }
  ]
})
export class ModelModule { }
