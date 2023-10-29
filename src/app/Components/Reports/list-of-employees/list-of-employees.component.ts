import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalDataModule } from 'src/app/Shared/global-data/global-data.module';
import { NotificationService } from 'src/app/Shared/service/notification.service';
import { AppComponent } from 'src/app/app.component';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-list-of-employees',
  templateUrl: './list-of-employees.component.html',
  styleUrls: ['./list-of-employees.component.scss']
})
export class ListOfEmployeesComponent implements OnInit{

  companyName:any;


  constructor(
    private http:HttpClient,
    private msg:NotificationService,
    private global:GlobalDataModule,
    private app:AppComponent
  ){}

  ngOnInit(): void {
    this.global.setHeaderTitle("List of Employee's");
    this.getEmployee();
    this.companyName = this.global.CompanyName;
    
  }


  EmployeeList:any = [];

  getEmployee(){
    this.app.startLoaderDark();

    this.http.get(environment.mainApi+'getparty ').subscribe(
      (Response)=>{
        this.EmployeeList = Response;
        this.app.stopLoaderDark();
        // console.log(Response);
      },
      (Error:any)=>{
        this.app.stopLoaderDark();
      }
    )
   
  }


  print(){
    this.global.printData('#printDiv')
  }

}
