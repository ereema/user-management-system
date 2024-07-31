import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { UserStoreService } from 'src/app/store/user-store.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  user: User = {
    id: 0,
    firstName: '',
    lastName: '',
    username: '',
    isAdmin: false,
    department: 'Marketing'
  };
  isSubmitting: boolean = false;  // Flag to prevent multiple submissions

  constructor(
    private userStore: UserStoreService,
    private router: Router
  ) {}

  addUser(): void {
    if (this.isSubmitting) return;  // Prevent multiple submissions
    this.isSubmitting = true;
  
    // Get the current users and determine the new ID
    this.userStore.users$.pipe(
      take(1), // Take only the latest value and complete
      map(users => Math.max(...users.map(u => u.id), 0) + 1)
    ).subscribe({
      next: newId => {
        // Check if the user with the newId already exists
        this.userStore.users$.pipe(
          take(1)
        ).subscribe(users => {
          if (users.some(user => user.id === newId)) {
            console.error('Duplicate user ID found. User not added.');
            this.isSubmitting = false;
            return;
          }
  
          const newUser: User = { ...this.user, id: newId };
          this.userStore.addUser(newUser);
          this.router.navigate(['/']);
          console.log('User added successfully');
        });
      },
      error: err => {
        console.error('Error adding user:', err);
        this.isSubmitting = false;  // Reset flag if there's an error
      },
      complete: () => {
        this.isSubmitting = false;  // Reset flag after completion
      }
    });
  }
  
}
