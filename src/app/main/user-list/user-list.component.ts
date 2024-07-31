import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserStoreService } from 'src/app/store/user-store.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]> | undefined;

  constructor(private userStore: UserStoreService) {}

  ngOnInit(): void {
    this.users$ = this.userStore.users$;
  }
}

