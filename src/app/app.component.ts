import { NgFor, NgForOf, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgIf,NgFor,NgForOf,RouterLink],
  providers:[ HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'third';

  mydata:any=[]
constructor(private ob:MyserviceService)
{
  //this.ob.getData().subscribe(data=>{
   // console.log(data)
}
}