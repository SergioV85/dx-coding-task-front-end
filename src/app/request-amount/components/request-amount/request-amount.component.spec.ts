import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { RequestAmountService } from '../../../shared/services/request-amount/request-amount.service';
import { RequestAmountComponent } from './request-amount.component';


describe('RequestAmountComponent', () => {
  let component: RequestAmountComponent;
  let fixture: ComponentFixture<RequestAmountComponent>;
  let compiled: HTMLElement;
  const cashService = jasmine.createSpyObj('RequestAmountService', ['getPossibleNotes']);
  cashService.getPossibleNotes.and.returnValue( of({ amount: [100, 100, 20, 10] }) );

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestAmountComponent ],
      providers: [
        {
          provide: RequestAmountService,
          useValue: cashService,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAmountComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('initial state', () => {
    const notesList = compiled.querySelector('.c-available-amounts');
    expect(component.notes).toEqual(undefined);
    expect(notesList).toBeNull();
  });
  it('should set amount to null on reset method', () => {
    component.amount.setValue(230);
    expect(component.amount.value).toEqual(230);
    component.resetAmount();
    expect(component.amount.value).toEqual(null);
  });
  describe('Show notes', () => {
    it('should call the service with desired amount', () => {
      component.amount.setValue(230);
      component.submit();
      expect(cashService.getPossibleNotes).toHaveBeenCalledWith(230);
    });
    it('should show the respone', () => {
      expect(component.notes).toEqual(undefined);
      component.amount.setValue(230);
      component.submit();
      expect(component.notes).toEqual([100, 100, 20, 10]);
    });
  });
  describe('Rendering the list', () => {
    let notesList;
    let notes;
    beforeAll(() => {
      component.amount.setValue(230);
      component.submit();
      fixture.detectChanges();
      notesList = compiled.querySelector('.c-available-amounts mat-card-title');
      notes = compiled.querySelectorAll('.c-available-amounts__note');
    });
    it('should show the card title', () => {
      expect(notesList.textContent).toContain('Possible notes to withdraw');
    });
    it('should show 4 notes', () => {
      expect(notes.length).toEqual(4);
    });
    it('should start from the biggest', () => {
      expect(notes[0].textContent).toContain('$100');
    });
    it('should end with the smallest', () => {
      expect(notes[3].textContent).toContain('$10');
    });
  });
});
