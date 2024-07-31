import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  addUser(user: User): void {
    const users = this.usersSubject.getValue();
    this.usersSubject.next([...users, user]);
  }

  getUserById(userId: number): Observable<User | undefined> {
    const users = this.usersSubject.getValue();
    const user = users.find(u => u.id === userId);
    return new BehaviorSubject<User | undefined>(user).asObservable();
  }
}
