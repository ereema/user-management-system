import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { UserDetailsComponent } from './user-details.component';
import { UserStoreService } from 'src/app/store/user-store.service';
import { User } from 'src/app/models/user.model';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;
  let userStoreServiceStub: Partial<UserStoreService>;

  beforeEach(async () => {
    // Mock UserStoreService
    userStoreServiceStub = {
      getUserById: (id: number) => of({
        id,
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe',
        isAdmin: false,
        department: 'Marketing' // Ensure this is a valid value
      } as User)
    };

    await TestBed.configureTestingModule({
      declarations: [UserDetailsComponent],
      providers: [
        { 
          provide: ActivatedRoute, 
          useValue: { 
            paramMap: of({
              get: (key: string) => '1' // Mock userId value
            })
          }
        },
        { provide: UserStoreService, useValue: userStoreServiceStub }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
