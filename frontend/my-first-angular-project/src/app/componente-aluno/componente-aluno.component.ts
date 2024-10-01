import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-aluno',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente-aluno.component.html',
  styleUrl: './componente-aluno.component.css'
})
export class ComponenteAlunoComponent {
  alunos = [
    {id: 1, nome: 'Matheus', idade: 12, sexo: 'Masculino', serie: '8° ano'},
    {id: 1, nome: 'Julia', idade: 14, sexo: 'Feminino', serie: '7° ano'},
    {id: 1, nome: 'Felipe', idade: 15, sexo: 'Masculino', serie: '8° ano'},
    {id: 1, nome: 'Amanda', idade: 13, sexo: 'Feminino', serie: '8° ano'},
    {id: 1, nome: 'Maylon', idade: 14, sexo: 'Masculino', serie: '7° ano'}
  ]
}
