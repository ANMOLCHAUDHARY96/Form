import { Component, OnInit } from '@angular/core';
import {FormControl ,FormGroup} from '@angular/forms';
import {Validators} from '@angular/forms';
import {Router} from '@angular/router'
import {AnmolService} from '../anmol.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup=new FormGroup(
    {
      fname: new FormControl('',[Validators.required,Validators.pattern("^[A-Za-z]+$")]),
      lname: new FormControl('',[Validators.required,Validators.pattern("^[A-Za-z]+$")]),
      gender: new FormControl('',[Validators.required,Validators.pattern("^[A-Za-z]+$")]),
      contact: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(12),Validators.pattern("^(([0-9]*)|(([0-9]*)\.([0-9]*)))$")]),
      email: new FormControl('',[Validators.required,Validators.email]),
      pass: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(16)]),
      cpass: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(16)]),
      empId: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern("^(([0-9]*)|(([0-9]*)|([0-9]*)))$")])
    }
  )


cnp:boolean=false;

  confirm(){
    if(this.form.value.pass!==this.form.value.cpass)
    {
      this.cnp=true;
    }
    else{
      this.cnp=false;
    }
  }

  rtc(){
    //localStorage.setItem("data",JSON.stringify(this.form.value));
    this.service.setdata(this.form.value);
    this.router.navigate(['/rtc']);
  }

  constructor(private router:Router,private service:AnmolService) { }

  ngOnInit() {

    if(this.router.url==='/login')
    {
   //let fndata=JSON.parse(localStorage.getItem("data"))
   let fndata=this.service.getdata();
    if(fndata!=null)
    {
    this.form.patchValue({
      fname:fndata.fname,
      lname:fndata.lname,
      gender:fndata.gender,
     contact:fndata.contact,
    pass:fndata.pass,
    cpass:fndata.cpass,
    empId:fndata.empid
    })
  }
  }
}

}
