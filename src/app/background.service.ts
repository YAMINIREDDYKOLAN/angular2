import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export class LoginDto
{
  empId:number;
  password:string;
  roleId:number;
  constructor(empId:number, password:string, roleId:number){
    this.empId = empId;
    this.password = password;
    this.roleId = roleId;
}
}
export class EmployeeDocumentDto
{
  empId:number;
  docId:number;
  docType:string;
  docData:string;
  empName:string;
  constructor(empId:number,docId:number,docType:string,docData:string,empName:string){
    this.empId = empId;
    this.docId = docId;
    this.docType = docType;
    this.empName=empName;
}
}
export class VerificationDto
{
  empid:number;
  status:string;
  constructor(empid:number,status:string)
  {
    this.empid=empid;
    this.status=status;
  }
}

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  constructor(private http:HttpClient) { }

  logindto:LoginDto;
  employeedocumentdto:EmployeeDocumentDto;
  verification:VerificationDto;
  
  public getlogindetails(empId:number,password:String){
    
    return this.http.get("http://localhost:8088/bgv/login/"+empId+"/"+password,{responseType: 'json'});
  
  }
  public saveEmployeeProfile(formdata:FormData):Observable<any>{
    
    return this.http.post("http://localhost:8088/bgv/uploadFile",formdata);
  
  }
  public getstatus(empId:number){
    
    return this.http.get("http://localhost:8088/bgv/checkStatus/"+empId,{responseType: 'text'});
  
  }

}


