import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-upsert',
  templateUrl: './user-upsert.component.html',
  styleUrls: ['./user-upsert.component.css'],
})
export class UserUpsertComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.userForm = this.fb.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const userData = this.userForm.value;
      if (!userData.id) {
        this.dataService.addUser(userData);
      } else {
        this.dataService.updateUser(userData);
      }
      this.userForm.reset();
    } else {
    }
  }
}
