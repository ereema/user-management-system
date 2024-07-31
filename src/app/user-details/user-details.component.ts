import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserStoreService } from 'src/app/store/user-store.service';
import { User } from 'src/app/models/user.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user$: Observable<User | undefined> | undefined;

  constructor(private route: ActivatedRoute, private userStore: UserStoreService) { }

  ngOnInit(): void {
    this.user$ = this.route.paramMap.pipe(
      switchMap(params => {
        const userId = Number(params.get('userId')); // Convert to number
        return this.userStore.getUserById(userId);
      })
    );
  }
}
