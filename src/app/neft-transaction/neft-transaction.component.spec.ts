import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeftTransactionComponent } from './neft-transaction.component';

describe('NeftTransactionComponent', () => {
  let component: NeftTransactionComponent;
  let fixture: ComponentFixture<NeftTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeftTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeftTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
