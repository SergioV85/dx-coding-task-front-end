import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { RequestAmountComponent } from './components/request-amount/request-amount.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule],
  declarations: [RequestAmountComponent],
  exports: [RequestAmountComponent],
})
export class RequestAmountModule {}
