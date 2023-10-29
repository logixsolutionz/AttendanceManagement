import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalDataModule } from 'src/app/Shared/global-data/global-data.module';
import { NotificationService } from 'src/app/Shared/service/notification.service';
import { AppComponent } from 'src/app/app.component';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-att-rpt-emp-datewise',
  templateUrl: './att-rpt-emp-datewise.component.html',
  styleUrls: ['./att-rpt-emp-datewise.component.scss']
})
export class AttRptEmpDatewiseComponent  implements OnInit{


  companyName:any;

  constructor(
    private http:HttpClient,
    private global:GlobalDataModule,
    private app:AppComponent,
    private msg:NotificationService
  ){

  }


  ngOnInit(): void {
    this.global.setHeaderTitle('Attendance Rpt Employeewise');
    this.companyName = this.global.CompanyName;
    this.getEmployee();
    
  }


  fromDate:any = new Date();
  toDate:any = new Date();
  employeeList:any = [];
  employeeID:any;

  employeeSearch:any;

  DataList:any = [];



  getEmployee(){
    this.app.startLoaderDark();

    this.http.get(environment.mainApi+'getparty ').subscribe(
      (Response)=>{
        this.employeeList = Response;
        this.app.stopLoaderDark();
        // console.log(Response);
      },
      (Error:any)=>{
        this.app.stopLoaderDark();
      }
    )
   
  }


  getReport(){
  
    if(this.employeeID == '' || this.employeeID == undefined){
      this.msg.WarnNotify('Select Employee')
    }else{
      this.app.startLoaderDark();
      this.http.get(environment.mainApi+'GetEmpAttBetweenDate?fromdate='+this.global.dateFormater(this.fromDate,'-')+
    '&todate='+this.global.dateFormater(this.toDate,'-')+'&empid='+this.employeeID).subscribe(
      (Response)=>{
        this.DataList = Response;
        this.app.stopLoaderDark();
      
      },
      (Error)=>{
        this.app.stopLoaderDark();
      }
    )
    }

    

  }

  print(){
    this.global.printData('#printDiv')
  }

}
