import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalDataModule } from 'src/app/Shared/global-data/global-data.module';
import { NotificationService } from 'src/app/Shared/service/notification.service';
import { AppComponent } from 'src/app/app.component';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-att-rpt-daily',
  templateUrl: './att-rpt-daily.component.html',
  styleUrls: ['./att-rpt-daily.component.scss']
})
export class AttRptDailyComponent implements OnInit{

  companyName:any;

  constructor(
    private http:HttpClient,
    private global:GlobalDataModule,
    private app:AppComponent,
    private msg:NotificationService
  ){

  }


  ngOnInit(): void {
    this.global.setHeaderTitle('Attendance Rpt Typewise');
    this.companyName = this.global.CompanyName;
  }

  DataList:any;


  fromDate:any = new Date();
  toDate:any = new Date();
 

  getReport(){
  
  this.app.startLoaderDark();
      this.http.get(environment.mainApi+'GetAttSingleDate?todate='+this.global.dateFormater(this.fromDate,'-')).subscribe(
      (Response)=>{
        this.DataList = Response;
        this.app.stopLoaderDark();
       
        
      
      },
      (Error)=>{
        this.app.stopLoaderDark();
      }

    )

  }


  print(){
    this.global.printData('#printDiv')
  }

}
