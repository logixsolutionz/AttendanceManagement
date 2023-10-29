import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalDataModule } from 'src/app/Shared/global-data/global-data.module';
import { NotificationService } from 'src/app/Shared/service/notification.service';
import { AppComponent } from 'src/app/app.component';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-monthly-attendance-rpt',
  templateUrl: './monthly-attendance-rpt.component.html',
  styleUrls: ['./monthly-attendance-rpt.component.scss']
})
export class MonthlyAttendanceRptComponent  implements OnInit{

  companyName:any;

  constructor(
    private http:HttpClient,
    private global:GlobalDataModule,
    private app:AppComponent,
    private msg:NotificationService
  ){

  }


  ngOnInit(): void {
    this.global.setHeaderTitle('Attendance Rpt Monthly');
    this.companyName = this.global.CompanyName;
    
  }

  presentIcon:any = '&#9745;';
  absentIcon:any = '&#9746;';

  totalDays:any ;
  empAttList:any = [];
  
  Month:Date = new Date();
  AttList:any = [];

  getReport(){
    this.totalDays = [];
   var  month = this.Month.getMonth()+1;
   var year = this.Month.getFullYear();
   this.totalDays = this.daysInMonth(month,year);
  

   this.app.startLoaderDark();
   this.http.get(environment.mainApi+'GetAttMonthly?todate='+this.global.dateFormater(this.Month,'-')).subscribe(
    (Response:any)=>{
      this.AttList = Response;
     
      console.log(Response);
      this.app.stopLoaderDark();
    },
    (Error)=>{
      this.app.stopLoaderDark();
    }
   )
   


  }


  daysInMonth(month:any, year:any) {
    return new Date(year, month, 0).getDate();
}

  print(){
    this.global.printLandscape('#printDiv')
  }

}
