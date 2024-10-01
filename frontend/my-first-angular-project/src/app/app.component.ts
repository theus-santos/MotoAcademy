import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { Componente01Component } from "./componente-01/componente-01.component";
import { ComponenteNgForComponent } from "./componente-ng-for/componente-ng-for.component";
import { ComponenteAlunoComponent } from "./componente-aluno/componente-aluno.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoListComponent,
    Componente01Component,
    ComponenteNgForComponent,
    ComponenteAlunoComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-angular-project';
}
