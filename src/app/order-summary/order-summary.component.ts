import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})

export class OrderSummaryComponent {
  @Input() order: any[] = [];
}
