import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductuserComponent } from './all-productuser.component';

describe('AllProductuserComponent', () => {
  let component: AllProductuserComponent;
  let fixture: ComponentFixture<AllProductuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllProductuserComponent]
    });
    fixture = TestBed.createComponent(AllProductuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
