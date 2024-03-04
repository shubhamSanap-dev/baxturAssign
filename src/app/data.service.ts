import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private userListSubject: BehaviorSubject<User[]> = new BehaviorSubject<
    User[]
  >([]);
  public userList$: Observable<User[]> = this.userListSubject.asObservable();

  constructor() {}

  getUserList(): User[] {
    return this.userListSubject.getValue();
  }

  updateUserList(userList: User[]): void {
    this.userListSubject.next(userList);
  }

  addUser(newUser: User): void {
    const userList = this.getUserList();
    userList.push(newUser);
    this.updateUserList(userList);
  }

  updateUser(userData: User): void {
    const userList = this.getUserList();
    const index = userList.findIndex((user) => user.id === userData.id);
    if (index !== -1) {
      userList[index] = userData;
      this.updateUserList(userList);
    }
  }

  removeUser(userId: string): void {
    let userList = this.getUserList();
    userList = userList.filter((user) => user.id !== userId);
    this.updateUserList(userList);
  }
}

interface User {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phone: string;
}
