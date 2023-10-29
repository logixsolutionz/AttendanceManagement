import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './Components/main-page/main-page.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch: 'full' },
  {path:'login', component:LoginComponent },
  {path:'main', loadChildren:()=> import('./Components/main/main.module').then((m)=>m.MainModule)}
 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule,
   ]
})
export class AppRoutingModule { }