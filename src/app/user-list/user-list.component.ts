import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'email',
    'phone',
    'actions',
  ];
  userList!: User[];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.userList$.subscribe((users) => {
      this.userList = users;
    });
  }

  editUser(user: User): void {
    this.router.navigate(['/user/edit', user.id]);
  }

  deleteUser(userId: string): void {
    this.dataService.removeUser(userId);
  }
}
