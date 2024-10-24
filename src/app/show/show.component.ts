import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [NgFor,NgIf,RouterLink],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {

  mydata:any=[]
constructor(private ob:MyserviceService)

{
this.ob.getData().subscribe(data=>
{
  console.log(data) 

  this.mydata=data
})
  

}
}