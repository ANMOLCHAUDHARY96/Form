import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnmolService {

  data;
  constructor() { }

  setdata(abc){
    this.data=abc;
  }
  getdata(){
return this.data;
  }
}
