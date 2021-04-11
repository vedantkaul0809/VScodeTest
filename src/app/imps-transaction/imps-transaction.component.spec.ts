import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpsTransactionComponent } from './imps-transaction.component';

describe('ImpsTransactionComponent', () => {
  let component: ImpsTransactionComponent;
  let fixture: ComponentFixture<ImpsTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpsTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpsTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
