import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
id:any 
name:any
course:any 
address:any 
email:any 
phone:any

constructor(private act:ActivatedRoute,private ob:MyserviceService,
  private rt:Router)
{
this.act.params.subscribe(data=>{
    this.id=data["id"]
    this.name=data["name"]
    this.course=data["course"]
    this.address=data["address"]
    this.email=data["email"]
    this.phone=data["phone"]
}) }

getEdit(uid:any,n:any,c:any,ad:any,e:any,ph:any)
  {
var data={"name":n,"course":c,"address":ad,"email":e,"phone":ph}

    this.ob.getEdit(uid,data).subscribe(dt=>
    { 
      //alert("update successfully")
    this.rt.navigate(['/show'])  
    })
  }

}

