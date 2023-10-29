import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Navigation/header/header.component';
import { SideNavbarComponent } from './Components/Navigation/side-navbar/side-navbar.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { ToastrModule } from 'ngx-toastr';
import { MainPageComponent } from './Components/main-page/main-page.component';
// import { FilterPipe } from './Shared/pipes/filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './login/login.component';

import { Subject } from 'rxjs/internal/Subject';
import { GlobalDataModule } from './Shared/global-data/global-data.module';

import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { SettingsComponent } from './Components/settings/settings.component';
import { CityComponent } from './Components/settings/city/city.component';
import { MaterialModule } from './Shared/material/material.module';
import { AddcityformComponent } from './Components/settings/city/addcityform/addcityform.component';
import { TopNavbarComponent } from './Components/Navigation/top-navbar/top-navbar.component';
import { CoaNotesComponent } from './Components/settings/coa-notes/coa-notes.component';
import { AddNoteComponent } from './Components/settings/coa-notes/add-note/add-note.component';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import { CountryComponent } from './Components/settings/country/country.component';
import { AddCountryComponent } from './Components/settings/country/add-country/add-country.component';
import { FloorComponent } from './Components/settings/floor/floor.component';
import { AddFloorComponent } from './Components/settings/floor/add-floor/add-floor.component';
import { CategoryComponent } from './Components/settings/category/category.component';
import { AddCategoryComponent } from './Components/settings/category/add-category/add-category.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { NgxPaginationModule } from 'ngx-pagination';
import { ServiceComponent } from './Components/settings/service/service.component';
import { AddServiceComponent } from './Components/settings/service/add-service/add-service.component';
import { NotificationService } from './Shared/service/notification.service';
import { EmployeeProfileComponent } from './Components/employee-profile/employee-profile.component';
import { AddUserComponent } from './Components/add-user/add-user.component';

import { AttRptEmpDatewiseComponent } from './Components/Reports/att-rpt-emp-datewise/att-rpt-emp-datewise.component';
import { AttRptTypeDatewiseComponent } from './Components/Reports/att-rpt-type-datewise/att-rpt-type-datewise.component';
import { MonthlyAttendanceRptComponent } from './Components/Reports/monthly-attendance-rpt/monthly-attendance-rpt.component';
import { HomeComponent } from './Components/home/home.component';
import { UserFormComponent } from './Components/add-user/user-form/user-form.component';
import { ListOfEmployeesComponent } from './Components/Reports/list-of-employees/list-of-employees.component';
import { AttRptDailyComponent } from './Components/Reports/att-rpt-daily/att-rpt-daily.component';



















@NgModule({
  declarations: [
    
    AppComponent,
    
    HeaderComponent,
    SideNavbarComponent,
  
    MainPageComponent,
    LoginComponent,

   
    SettingsComponent,
    CityComponent,
    AddcityformComponent,
    TopNavbarComponent,


    CoaNotesComponent,
    AddNoteComponent,
    CountryComponent,
    AddCountryComponent,
    FloorComponent,
    AddFloorComponent,
    CategoryComponent,
    AddCategoryComponent,
  
    ServiceComponent,
    AddServiceComponent,
    EmployeeProfileComponent,
    AddUserComponent,
    
    AttRptEmpDatewiseComponent,
    AttRptTypeDatewiseComponent,
    MonthlyAttendanceRptComponent,
    HomeComponent,
    UserFormComponent,
    ListOfEmployeesComponent,
    AttRptDailyComponent,
    // FilterPipe,
    
  ],
  imports: [
    ChartModule,
    
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ToastrModule.forRoot(), 
    Ng2SearchPipeModule,
    GlobalDataModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    MatProgressBarModule,
    NgxMatSelectSearchModule,
    MaterialModule,
    NgxMaterialTimepickerModule,
    NgxPaginationModule
   
    
  

  ],
  providers: [{ provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting ] }, NotificationService,GlobalDataModule],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
