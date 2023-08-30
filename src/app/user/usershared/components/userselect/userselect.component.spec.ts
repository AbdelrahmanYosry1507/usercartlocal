import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserselectComponent } from './userselect.component';

describe('UserselectComponent', () => {
  let component: UserselectComponent;
  let fixture: ComponentFixture<UserselectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserselectComponent]
    });
    fixture = TestBed.createComponent(UserselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
