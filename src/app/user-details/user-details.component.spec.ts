import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { of } from 'rxjs'; // Import `of` for creating observables

import { UserDetailsComponent } from './user-details.component';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetailsComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: of({ get: () => 'mockParam' }) } } }
      ]
    }).compileComponents(); // Ensure the component is compiled
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});
