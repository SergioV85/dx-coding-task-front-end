import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HealthCheckService } from './shared/services/health-check/health-check.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public serverVersion: string;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private healthCheckService: HealthCheckService) {}

  public ngOnInit() {
    this.healthCheckService
      .getServerVersion()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(({ version }) => {
        this.serverVersion = version;
      });
  }

  public ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
