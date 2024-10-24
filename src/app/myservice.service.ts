import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private ob:HttpClient) { }
  getData()
  {
    
    return this.ob.get("http://localhost:3000/student");
  }

  getInsert(name:any,course:any,address:any,email:any,phone:any)
  {
    
    var dt={"name":name,"course":course,"address":address,"email":
      email,"phone":phone}
    return this.ob.post("http://localhost:3000/student",dt);
  }

//json-server --watch data.json


getEdit(uid:any,data:any)
{
  return this.ob.put(`http://localhost:3000/student/${uid}`,data);
}

getDelete(id:any)
{

  return this.ob.delete(`http://localhost:3000/student/${id}`);
}
}
