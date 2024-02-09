import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from 'src/contact/contact.component';
import { HomeComponent } from 'src/home/home/home.component';
import { ProjectsComponent } from 'src/projects/projects.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
