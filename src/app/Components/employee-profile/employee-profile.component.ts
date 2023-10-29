import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GlobalDataModule } from 'src/app/Shared/global-data/global-data.module';
import { NotificationService } from 'src/app/Shared/service/notification.service';
import { AppComponent } from 'src/app/app.component';
import { environment } from 'src/environments/environment.development';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})
export class EmployeeProfileComponent {


  page:number = 1;
  count: number = 0;

  tableSize: number = 10;
  tableSizes : any = [10,25,50,100];

  onTableDataChange(event:any){

    this.page = event;
    this.getEmployee();
  }

  onTableSizeChange(event:any):void{
    this.tableSize = event.target.value;
    this.page =1 ;
    this.getEmployee();
  }

  

  constructor(private globalData: GlobalDataModule,
 
    private http : HttpClient,
    private msg : NotificationService,
    private app:AppComponent
    ){

  }
  ngOnInit(): void{
   this.globalData.setHeaderTitle('Employee Profile');
   this.getEmployee();
   
  }




  searchtxt:any;
  btnType = "Save";
  
  EmployeeID:any;;
  EmployeeName :any;
  EmployeeCNIC :any;
  EmployeeMobileno:any;
  EmployeeAddress:any;
  description :any;
 
  validate = true;


  EmployeeList : any = [];


  getEmployee(){

    this.http.get(environment.mainApi+'getparty ').subscribe(
      (Response)=>{
        this.EmployeeList = Response;
        // console.log(Response);
      }
    )
   
  }


  saveParty(){
   if(this.EmployeeName == "" || this.EmployeeName == undefined){
      this.msg.WarnNotify("Enter The Employee Name");
      
    }else if(this.EmployeeCNIC == "" || this.EmployeeCNIC == undefined ){
      this.msg.WarnNotify("Enter Employee A. No.")
    }
    else if(this.EmployeeMobileno == "" || this.EmployeeMobileno == undefined){
      this.msg.WarnNotify("Enter Employee Mobile Number")
    }else if(this.EmployeeAddress == "" || this.EmployeeAddress == undefined){
      this.msg.WarnNotify("Enter The Employee Address")
    }else{
       if(this.description == "" || this.description == undefined){
        this.description = "-";
      }


      if(this.btnType == 'Save'){
        this.app.startLoaderDark();
        this.http.post(environment.mainApi+'insertparty',{
          
      EmployeeName  : this.EmployeeName,
      CNIC  : this.EmployeeCNIC,
      MobileNo  : this.EmployeeMobileno,
      Address : this.EmployeeAddress,
      Remarks : this.description,
      UserID  : this.globalData.getUserID(),
        }).subscribe(
          (Response:any)=>{
            if(Response.msg == 'Data Saved Successfully'){
              this.msg.SuccessNotify(Response.msg);
              this.reset();
              this.getEmployee();
              this.app.stopLoaderDark();
            }else{
              this.msg.WarnNotify(Response.msg);
              this.app.stopLoaderDark();
            }
          }
        )
      }

      if(this.btnType == 'Update'){

        this.app.startLoaderDark();

        this.http.post(environment.mainApi+'updateparty',{
        EmployeeID: this.EmployeeID,
        EmployeeName: this.EmployeeName,
        CNIC: this.EmployeeCNIC,
        MobileNo: this.EmployeeMobileno,
        Address: this.EmployeeAddress,
        Remarks: this.description,
        UserID: this.globalData.getUserID()
        }).subscribe(
          (Response:any)=>{
            if(Response.msg == 'Data Updated Successfully'){
              this.msg.SuccessNotify(Response.msg);
              this.reset();
              this.getEmployee();
              this.app.stopLoaderDark();

            }else{
              this.msg.WarnNotify(Response.msg);
              this.app.stopLoaderDark();
            }
          }
        )
      }

 
  }



  }

/////////////to Set CNIC Field Formate/////////////////
 





  editParty(item:any){
    this.EmployeeID = item.employeeID;

    this.EmployeeName = item.employeeName;
    this.EmployeeCNIC = item.cnic;
    this.EmployeeAddress = item.address;
    this.description = item.remarks;
    this.EmployeeMobileno = item.mobileNo;
    this.btnType = 'Update';

  

  }

////////////////to Delete The Party/////////////////////////
  DeleteParty(row:any){

    Swal.fire({
      title:'Alert!',
      text:'Confirm to Delete the Data',
      position:'center',
      icon:'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm',
    }).then((result)=>{
      if(result.isConfirmed){

        //////on confirm button pressed the api will run
        this.app.startLoaderDark();

        this.http.post(environment.mainApi+'deleteparty',{  
         EmployeeID: row.employeeID,
         UserID: this.globalData.getUserID()   
        }).subscribe(
          (Response:any)=>{
            if(Response.msg == 'Data Deleted Successfully'){
              this.msg.SuccessNotify(Response.msg);
              this.getEmployee();
              this.app.stopLoaderDark();
            }else{
              this.msg.WarnNotify(Response.msg);
              this.app.stopLoaderDark();
            }
          }
        )
        
      }
    });

   
  }





  reset(){

   this.EmployeeName = '';
   this.EmployeeCNIC = '';
   this.EmployeeMobileno = '';
   this.EmployeeAddress="";
   this.description = '';
   this.btnType = "Save";
  }


}
