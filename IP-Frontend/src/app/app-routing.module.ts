import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { PacientProfileComponent } from './features/pacient-profile/pacient-profile.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'pacient-profile', component: PacientProfileComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
