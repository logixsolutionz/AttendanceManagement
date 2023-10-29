import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes, UrlTree } from '@angular/router';
import { MainModule } from './main.module';



import { MainPageComponent } from '../main-page/main-page.component';

import { SettingsComponent } from '../settings/settings.component';

import { GlobalDataModule } from 'src/app/Shared/global-data/global-data.module';
import { Observable } from 'rxjs';
import { AuthGuard } from 'src/app/auth.guard';
import { AddUserComponent } from '../add-user/add-user.component';
import { EmployeeProfileComponent } from '../employee-profile/employee-profile.component';

import { AttRptEmpDatewiseComponent } from '../Reports/att-rpt-emp-datewise/att-rpt-emp-datewise.component';
import { AttRptTypeDatewiseComponent } from '../Reports/att-rpt-type-datewise/att-rpt-type-datewise.component';
import { MonthlyAttendanceRptComponent } from '../Reports/monthly-attendance-rpt/monthly-attendance-rpt.component';
import { HomeComponent } from '../home/home.component';
import { ListOfEmployeesComponent } from '../Reports/list-of-employees/list-of-employees.component';
import { AttRptDailyComponent } from '../Reports/att-rpt-daily/att-rpt-daily.component';





const routes: Routes = [
  {path:'',component:MainPageComponent, children:[
    {path:'home', component:HomeComponent,  },
    {path:'addUser', component:AddUserComponent,  },
    {path:'empprof', component:EmployeeProfileComponent,  },
    {path:'arptedw', component:AttRptEmpDatewiseComponent,  },
    {path:'arpttdw', component:AttRptTypeDatewiseComponent,  },
    {path:'arptmw', component:MonthlyAttendanceRptComponent,  },
    {path:'loe', component:ListOfEmployeesComponent,  },
    {path:'arptd', component:AttRptDailyComponent,  },
    

  {path:'Settings',component:SettingsComponent,},
  {path:'', redirectTo:'/main/home',pathMatch:'full'}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { 
  constructor(private globalData:GlobalDataModule){}


  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
  //   return this.globalData.canActivate(route.params['id']);
  // }
}


