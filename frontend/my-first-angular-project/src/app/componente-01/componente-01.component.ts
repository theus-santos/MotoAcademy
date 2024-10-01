import { Component } from '@angular/core';
import { ComponenteNgIfComponent } from "../componente-ng-if/componente-ng-if.component";

@Component({
  selector: 'app-componente-01',
  standalone: true,
  imports: [ComponenteNgIfComponent],
  templateUrl: './componente-01.component.html',
  styleUrl: './componente-01.component.css'
})
export class Componente01Component {
  nome = 'wukong'
  imagem = '../../assets/img/wukong.jpg'

  alerta() {
    alert(`nome alterado: ${this.nome}`);
  }

  changeName() {
    if (this.nome === 'wukong') {
      this.nome = 'invencivel'
      this.imagem = '../../assets/img/invencivel.jpeg'
    } else {
      this.nome = 'wukong'
      this.imagem = '../../assets/img/wukong.jpg'
    }
  }

}
