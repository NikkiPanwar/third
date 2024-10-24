import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-insert',
  standalone: true,
  imports: [],
  templateUrl: './insert.component.html',
  styleUrl: './insert.component.css'
})
export class InsertComponent {

  constructor(private obj:MyserviceService,private rt:Router) {}

  getInsert(n:any,c:any,ad:any,e:any,ph:any)
  {
    this.obj.getInsert(n,c,ad,e,ph).subscribe(data=>
    {
     // alert("record saved")
    })
  
  this.rt.navigate(['/show'])
  }
}
