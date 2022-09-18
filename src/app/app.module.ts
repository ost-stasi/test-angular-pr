import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import {StoreRouterConnectingModule} from '@ngrx/router-store'

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ViewModeComponent } from './view-mode/view-mode.component';
import { SettingsComponent } from './settings/settings.component';
import { appReducers } from 'src/store/reducers/app.reducer';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HighchartComponent } from './highchart/highchart.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './modal/modal.component';
import { InputMaskModule } from '@ngneat/input-mask';
import { ChartDataService } from './services/chartdata.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewModeComponent,
    SettingsComponent,
    HighchartComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(appReducers),
    StoreRouterConnectingModule.forRoot({stateKey:'router'}),
    AppRoutingModule,
    HighchartsChartModule,
    NgbModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    InputMaskModule
  ],
  providers: [ChartDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
