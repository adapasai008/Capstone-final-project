import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOnboardingComponent } from './customer-onboarding.component';

xdescribe('CustomerOnboardingComponent', () => {
  let component: CustomerOnboardingComponent;
  let fixture: ComponentFixture<CustomerOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerOnboardingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
