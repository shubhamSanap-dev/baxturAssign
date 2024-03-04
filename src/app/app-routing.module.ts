import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpsertComponent } from './user-upsert/user-upsert.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'user/add', component: UserUpsertComponent },
  { path: 'user/edit/:id', component: UserUpsertComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
