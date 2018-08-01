import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rtc',
  templateUrl: './rtc.component.html',
  styleUrls: ['./rtc.component.css']
})
export class RtcComponent implements OnInit {

  fndata:Object
constructor(private router:Router) {
  this.fndata=JSON.parse(localStorage.getItem("data"));
 }

  Edit(){
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
