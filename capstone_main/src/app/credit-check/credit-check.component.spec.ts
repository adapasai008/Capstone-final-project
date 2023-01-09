import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCheckComponent } from './credit-check.component';

xdescribe('CreditCheckComponent', () => {
  let component: CreditCheckComponent;
  let fixture: ComponentFixture<CreditCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
