import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackgroundService } from '../background.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  EmpId:number;
 
  password:string;

  login_details:any;
  private router:Router;
  message:string;
  
  check:boolean = false;
  check1:boolean = false;
 
  empId:number;
 
  constructor(private service:BackgroundService,router:Router) { 
    this.router=router;
  }


  ngOnInit(): void {
  }
  fetchEmployee(){
    
    this.service.getlogindetails(this.EmpId,this.password).subscribe((data:any)=>{this.login_details=data
    console.log(data);
   
    if(this.login_details ==null){
     
      alert("unsucces");
      this.check1=true;
      this.check=false;
    
    }
    else{
      alert("success");
      this.check1=false;
      this.check=true;
     
     
    }
    });
  }

}
