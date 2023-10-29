import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs/internal/Subject';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NotificationService } from '../service/notification.service';
import { userInterface } from '../Interfaces/login-user-interface';
import { BehaviorSubject, Observable } from 'rxjs';
import Swal from 'sweetalert2';
import * as $ from 'jquery';
import * as b64 from 'base64-js/index.js';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class GlobalDataModule  implements OnInit {



  paginationDefaultTalbeSize = 50;
  paginationTableSizes : any = [10,25,50,100];

  public Logo = '..';
  public Logo1 = '..';

  public CompanyName = 'Garison Engineer';
  public CompanyName2 =  '';
  public Address = '';
  public Phone = '';
  public mobileNo = '';
  public Email = ''

  // public  CompanyName = '';
  // public CompanyName2 =  '';
  // public Address = '';
  // public Phone = '';
  // public mobileNo = '';
  // public Email = ''

   
   public currentUserSubject:BehaviorSubject<userInterface>;
   public currentUser: Observable<userInterface>;
   curUserID:any;


  constructor(
    private http:HttpClient,
    private rout : Router,
    private msg : NotificationService
    ){
      
      

      this.currentUserSubject = new BehaviorSubject<userInterface>(
        JSON.parse(localStorage.getItem('curVal') || '{}')
      );
      this.currentUser = this.currentUserSubject.asObservable();
    }


  ngOnInit(): void {
   
  }

    private _headerTitleSource = new Subject<string>();
    header_title$ = this._headerTitleSource.asObservable();
 
    private _userNameSource = new Subject<string>();
    user_Name$ = this._userNameSource.asObservable();
 


  public get currentUserValue(): userInterface {

    
    return this.currentUserSubject.value;
  }


  //////////////////////// will provide logged in userID
  getUserID(){
     var credentials = JSON.parse(localStorage.getItem('curVal') || '{}');

   return  parseInt(atob(atob(credentials.value._culId)));

  }


  ////////////////////// will provide the logged in user Name
  getUserName(){
    var credentials = JSON.parse(localStorage.getItem('curVal') || '{}');

  return  atob(atob(credentials.value._culName)).toString();

 }


 getRoleId(){
   var credentials = JSON.parse(localStorage.getItem('curVal') || '{}');

  return  atob(atob(credentials.value._cuRId)).toString();

 }


 getComapnyLink(){
  var credentials = JSON.parse(localStorage.getItem('curVal') || '{}');

  return  atob(atob(credentials.value._cuLnk)).toString();
 }


 /////////////////// will give the difference of hours of two Date and times 

getHours(date1:any, Time1:any, date2:any, Time2:any) {
  const DateTime1 = new Date(Date.parse(date1 + ' ' + Time1));
  const DateTime2 = new Date(Date.parse(date2 + ' ' + Time2));

  // Check if the dates and times are valid.
  if (isNaN(DateTime1.getTime()) || isNaN(DateTime2.getTime())) {
    return false;
  }

  // Calculate the difference in seconds.
  const differenceInSeconds = (DateTime2.getTime() - DateTime1.getTime()) / 1000;

  // Calculate the difference in hours.
  const differenceInHours = differenceInSeconds / 3600;

  // Return the difference in hours.
  return differenceInHours;
}









///////////////////////////////////////////////////////////
  /////////////////////login funciton///////////////////////
  ////////////////////////////////////////////////////////
 



  login(Email:String,password:string){
    $('.loaderDark').show();

    this.http.post(environment.mainApi+'_userLogin',{
      LoginName: Email,
      Password: password,
    }).subscribe({
      next:(value:any)=>{

        var userID = value._culId;
        localStorage.setItem('curVal',JSON.stringify({value}));

       if(value.msg == 'Logged in Successfully' ){
        Swal.fire({
          title:'',
          text:"Login Successful",
          position:'center',
          icon:'success',
          showConfirmButton:true,
          confirmButtonText:'OK',
          confirmButtonColor:'Green',
          timer:2000,
          timerProgressBar:true,

        }).then((value)=>{

          // this.http.get(environment.mainApi+'getusermenu?userid='+atob(atob(userID))).subscribe(
          //   (Response:any)=>{             
          //     this.rout.navigate(["main/"+Response[0].pageLink]);            
          //     $('.loaderDark').fadeOut(500);
          //   }
          // )
   
          this.rout.navigate(["main"]);
          $('.loaderDark').fadeOut(500);
        })
        
       
       }else{
        this.msg.WarnNotify('Error Occurred While Login Process');
        $('.loaderDark').fadeOut(500);
       }
      },
      error:error=>{
       
        this.msg.WarnNotify('Error Occurred While Login Process')
        $('.loaderDark').fadeOut(500);
      }
    })

    
  }


  ////////////////////////////////////////////////////
/////////////funtion to keep user log out/////////////////////
///////////////////////////////////////////////////////////
  


logout(){
  $('.loaderDark').show();

    localStorage.removeItem('curVal');
    // localStorage.removeItem('cmpnyVal');
     this.rout.navigate(['login']);
     $('.loaderDark').fadeOut(500);
    
  }






  //////////////sets the header title ////////////////////////
  setHeaderTitle(title: string) {
    this._headerTitleSource.next(title.toUpperCase());
  }

  




  //////////////////////////print Funciton /////////////////////////////////


  printData(printSection: string) {    
    var contents = $(printSection).html();

    var frame1:any = $('<iframe />');
    frame1[0].name = 'frame1';
    frame1.css({ position: 'absolute', top: '-1000000px' });
    $('body').append(frame1);
    var frameDoc = frame1[0].contentWindow
      ? frame1[0].contentWindow
      : frame1[0].contentDocument.document
      ? frame1[0].contentDocument.document
      : frame1[0].contentDocument;
    frameDoc.document.open();

    //Create a new HTML document.
    // frameDoc.document.write(
    //   "<html><head><title>DIV Contents</title>" +
    //     "<style>" +
    //     printCss +
    //     "</style>"
    // );

    //Append the external CSS file. <link rel="stylesheet" href="../../../styles.scss" /> <link rel="stylesheet" href="../../../../node_modules/bootstrap/dist/css/bootstrap.min.css" />
    frameDoc.document.write(
      '<style type="text/css" media="print">@page { size: portrait; }</style>'
    );
    frameDoc.document.write(
      
      '<link rel="stylesheet" href="../../assets/style/ownStyle.css" type="text/css" media="print"/>'
      +'<link rel="stylesheet" href="../../assets/style/bootstrap.min.css" type="text/css" media="print"/>'
      //+'<style type="text/css" media="print">/*@page { size: landscape; }*/</style>'
      // '<link rel="stylesheet" href="../../assets/style/bootstrap.min.css.map" type="text/css" />'+
     
      // '<link rel="stylesheet" href="../css/bootstrap.css" type="text/css"  media="print"/>'
    );
    frameDoc.document.write('</head><body>');

    //Append the DIV contents.
    frameDoc.document.write(contents);
    frameDoc.document.write('</body></html>');

    frameDoc.document.close();

    setTimeout(function () {
      window.frames[0].focus();
      window.frames[0].print();

      frame1.remove();
    }, 500);
  
  }


  //////////////////////////////////////////////////////////////////////


  printLandscape(printSection: string) {
    var contents = $(printSection).html();

    var frame1:any = $('<iframe />');
    frame1[0].name = 'frame1';
    frame1.css({ position: 'absolute', top: '-1000000px' });
    $('body').append(frame1);
    var frameDoc = frame1[0].contentWindow
      ? frame1[0].contentWindow
      : frame1[0].contentDocument.document
      ? frame1[0].contentDocument.document
      : frame1[0].contentDocument;
    frameDoc.document.open();

    //Create a new HTML document.
    // frameDoc.document.write(
    //   "<html><head><title>DIV Contents</title>" +
    //     "<style>" +
    //     printCss +
    //     "</style>"
    // );

    //Append the external CSS file. <link rel="stylesheet" href="../../../styles.scss" /> <link rel="stylesheet" href="../../../../node_modules/bootstrap/dist/css/bootstrap.min.css" />
    frameDoc.document.write(
      '<style type="text/css" media="print">@page { size: landscape; }</style>'
    );
    frameDoc.document.write(
      // '<style type="text/css" media="print">@page { size: landscape; }</style>'
      '<link rel="stylesheet" href="../../assets/style/ownStyle.css" type="text/css" media="print"/>'
      +'<link rel="stylesheet" href="../../assets/style/bootstrap.min.css" type="text/css" media="print"/>'
      
      // '<link rel="stylesheet" href="../../assets/style/bootstrap.min.css.map" type="text/css" />'+
     
      // '<link rel="stylesheet" href="../css/bootstrap.css" type="text/css"  media="print"/>'
    );
    frameDoc.document.write('</head><body>');

    //Append the DIV contents.
    frameDoc.document.write(contents);
    frameDoc.document.write('</body></html>');

    frameDoc.document.close();

    setTimeout(function () {
      window.frames[0].focus();
      window.frames[0].print();

      frame1.remove();
    }, 500);
  }




  /////////////////////////////////////////////////////////////
/////////////////////////////fotmate date in year-month-day formate///////
/////////////////////////////////////////////////////////////////////

  dateFormater(date:Date, separator:any) {
    var day:any = date.getDate();
    // add +1 to month because getMonth() returns month from 0 to 11
    var month:any = date.getMonth() + 1;
    var year = date.getFullYear();
  
    // show date and month in two digits
    // if month is less than 10, add a 0 before it
    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }
  
    // now we have day, month and year
    // use the separator to join them
    return year + separator + month + separator + day;
  }



  ///////////////////// to formate date to send to DB/////////////////////
  ////////// will solve the issue where  one day previous date sended/////////////////

  newDateFormate( date:Date){
    const offset = date.getTimezoneOffset();
    if (offset < 0) {
    date.setHours(12,0,0);
    }
  }

/////////////////////////////////// will validate the numonly field
  numberOnly(){
    $('.numOnly').on('keypress keyup blur',(event:any)=>{
      // console.log(event.which);
      event.target.value.replace(/[^\d].+/, "");
      if(event.which < 48 || event.which >57 ){
        event.preventDefault();
        
      }
    })
  }


  avoidMinus(val: any) {
    // alert(val.target.value);
    if (val.target.value < '0') {
      val.target.value = '';
    }else if(val.target.value == ''){
      val.target.value = '';
    }
  }


 }
