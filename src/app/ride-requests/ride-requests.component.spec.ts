import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideRequestsComponent } from './ride-requests.component';

describe('RideRequestsComponent', () => {
  let component: RideRequestsComponent;
  let fixture: ComponentFixture<RideRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RideRequestsComponent]
    });
    fixture = TestBed.createComponent(RideRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
