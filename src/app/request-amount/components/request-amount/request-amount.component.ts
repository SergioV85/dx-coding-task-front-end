import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RequestAmountService } from '../../../shared/services/request-amount/request-amount.service';

@Component({
  selector: 'app-request-amount',
  templateUrl: './request-amount.component.html',
  styleUrls: ['./request-amount.component.scss'],
})
export class RequestAmountComponent implements OnDestroy {
  public title = 'Cash Machine App';
  public amount = new FormControl('');
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private cashService: RequestAmountService) {}

  public ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public resetAmount() {
    this.amount.setValue('');
  }
  public submit() {
    const value = this.amount.value;

    this.cashService
      .getPossibleNotes(value)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(amount => console.log(amount));
  }
}
