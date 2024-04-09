import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  op1:number=0;
  op2:number=0;
  op3:number=0;
  rslt!:number;
  constructor() {}
   
  addition():void{
    this.rslt=this.op1 + this.op2;
  }
  sustraction():void{
    this.rslt=this.op1 - this.op2;
  }

}
