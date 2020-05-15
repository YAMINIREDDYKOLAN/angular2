import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackgroundService } from '../background.service';

@Component({
  selector: 'app-view-status',
  templateUrl: './view-status.component.html',
  styleUrls: ['./view-status.component.css']
})
export class ViewStatusComponent implements OnInit {


  empId:number;
  verification_details:any;
  message:string;
  private router:Router;

  check:boolean = false;
  check1:boolean = false;
  
  constructor(private service:BackgroundService,router:Router) { 
    this.router=router;
  }


  ngOnInit(): void {
  }



  status(){
    this.service.getstatus(this.empId).subscribe((data)=>this.verification_details=data)
    if(this.verification_details == null){
      this.check1 = true;
      this.check = false;
    }
    else{
      this.check1 = false;
      this.check = true;
    }
  }
}