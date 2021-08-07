import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNameAssignmentComponent } from './user-name-assignment.component';

describe('UserNameAssignmentComponent', () => {
  let component: UserNameAssignmentComponent;
  let fixture: ComponentFixture<UserNameAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNameAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNameAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
