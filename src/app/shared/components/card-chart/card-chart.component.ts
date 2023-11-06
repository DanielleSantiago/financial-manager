import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-chart',
  templateUrl: './card-chart.component.html',
  styleUrls: ['./card-chart.component.css']
})
export class CardChartComponent {
  @Input() title: string = '';
  @Output() eventClick = new EventEmitter();

  emitEvent(event: any) {
    this.eventClick.emit(event);
  }
}
