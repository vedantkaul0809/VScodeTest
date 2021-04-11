import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetuserdetailsComponent } from './getuserdetails.component';

describe('GetuserdetailsComponent', () => {
  let component: GetuserdetailsComponent;
  let fixture: ComponentFixture<GetuserdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetuserdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetuserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
