import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtgsTransactionComponent } from './rtgs-transaction.component';

describe('RtgsTransactionComponent', () => {
  let component: RtgsTransactionComponent;
  let fixture: ComponentFixture<RtgsTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtgsTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtgsTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
