import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAmountComponent } from './request-amount.component';

describe('RequestAmountComponent', () => {
  let component: RequestAmountComponent;
  let fixture: ComponentFixture<RequestAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
