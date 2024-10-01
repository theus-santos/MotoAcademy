import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-ng-if',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente-ng-if.component.html',
  styleUrl: './componente-ng-if.component.css'
})
export class ComponenteNgIfComponent {
  exibir: boolean = true;

  acao() {
    if (this.exibir === true) {
      this.exibir = false;
    } else {
      this.exibir = true;
    }
  }
}
