import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosDetailComponent } from './alumnos-detail/alumnos-detail.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: AlumnosDetailComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'users', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
