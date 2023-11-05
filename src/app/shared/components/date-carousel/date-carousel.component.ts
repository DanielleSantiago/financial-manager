import { Component } from '@angular/core';
import { Meses } from 'src/app/core/enums/meses.enum';

@Component({
  selector: 'app-date-carousel',
  templateUrl: './date-carousel.component.html',
  styleUrls: ['./date-carousel.component.css']
})
export class DateCarouselComponent {

  meses = Meses;
  mesAtual: Meses = new Date().getMonth();
  anoAtual: number = new Date().getFullYear();

  previous() {
    if (this.mesAtual > Meses.Janeiro) {
      this.mesAtual--;
    } else {
      this.mesAtual = Meses.Dezembro;
      this.anoAtual--;
    }
  }

  next() {
    if (this.mesAtual < Meses.Dezembro) {
      this.mesAtual++;
    } else {
      this.mesAtual = Meses.Janeiro;
      this.anoAtual++;
    }
  }
}
