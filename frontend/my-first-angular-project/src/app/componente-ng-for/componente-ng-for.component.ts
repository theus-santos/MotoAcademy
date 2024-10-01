import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-ng-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente-ng-for.component.html',
  styleUrl: './componente-ng-for.component.css'
})
export class ComponenteNgForComponent {
  items = [
    { id: 1, name: 'Item 1', description: 'Descrição do item 1' },
    { id: 2, name: 'Item 2', description: 'Descrição do item 2' },
    { id: 3, name: 'Item 3', description: 'Descrição do item 3' },
    { id: 4, name: 'Item 4', description: 'Descrição do item 4' },
    { id: 5, name: 'Item 5', description: 'Descrição do item 5' }
  ];
}
