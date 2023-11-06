import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @Input() totalReceitas = 'R$ 1.500,00';
  @Input() totalDespesas = 'R$ 1.500,00';
  @Input() saldo = 'R$ 1.500,00';

}
