import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AnmolService} from '../anmol.service';

@Component({
  selector: 'app-rtc',
  templateUrl: './rtc.component.html',
  styleUrls: ['./rtc.component.css']
})
export class RtcComponent implements OnInit {

  fndata:Object
constructor(private router:Router,private service:AnmolService) {
  //this.fndata=JSON.parse(localStorage.getItem("data"));
  this.fndata=this.service.getdata();
 }

  Edit(){
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    
  }

}
