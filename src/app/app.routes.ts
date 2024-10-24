import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { ContactComponent } from './contact/contact.component';
import { InsertComponent } from './insert/insert.component';
import { ShowComponent } from './show/show.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';

export const routes: Routes = [

{path:"", component :HomeComponent},
{path:"course", component :CourseComponent},
{path:"contact", component :ContactComponent},
{path:"insert", component :InsertComponent},
{path:"show", component :ShowComponent},
{path:"login", component :LoginComponent},
{path:"register", component: RegisterComponent},
{path:"delete/:id", component:DeleteComponent},
{path:"edit/:id/:name/:course/:address/:email/:phone", component:EditComponent}


];
