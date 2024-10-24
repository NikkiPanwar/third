import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent 
{
  id:any
  constructor(private act:ActivatedRoute,private obj:MyserviceService,private rt:Router)
  {
    this.act.params.subscribe(data=>{
console.log(data['id'])
this.obj.getDelete(data["id"]).subscribe(data=>{
console.log("data deleted")
})
//this.rt.navigate(['/show']);
    })
    
  }
}
