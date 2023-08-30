import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsuserComponent } from './product-detailsuser.component';

describe('ProductDetailsuserComponent', () => {
  let component: ProductDetailsuserComponent;
  let fixture: ComponentFixture<ProductDetailsuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailsuserComponent]
    });
    fixture = TestBed.createComponent(ProductDetailsuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
