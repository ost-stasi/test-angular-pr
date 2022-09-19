import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import {StoreRouterConnectingModule} from '@ngrx/router-store'

import { AppRoutingModule } from 'src/app/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from 'src/app/app.component';
import { ViewModeComponent } from 'src/app/view-mode/view-mode.component';
import { SettingsComponent } from 'src/app/settings/settings.component';
import { appReducers } from 'src/store/reducers/app.reducer';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HighchartComponent } from 'src/app/highchart/highchart.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from 'src/app/modal/modal.component';
import { InputMaskModule } from '@ngneat/input-mask';
import { ChartDataService } from 'src/app/services/chartdata.service';

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
