import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserUpsertComponent } from './user-upsert/user-upsert.component';
import { UserListComponent } from './user-list/user-list.component';
import { DataService } from './data.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, UserUpsertComponent, UserListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
