import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneproductComponent } from './oneproduct.component';

describe('OneproductComponent', () => {
  let component: OneproductComponent;
  let fixture: ComponentFixture<OneproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneproductComponent]
    });
    fixture = TestBed.createComponent(OneproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
