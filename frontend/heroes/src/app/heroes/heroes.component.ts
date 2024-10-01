import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { HEROES } from './../mock-heroes';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes: Hero[] = []
  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes()
  }
  onSelect(hero: Hero) : void {
    this.selectedHero = hero
    this.messageService.add(`HeroesComponent: Heroi selecionado de id=${hero.id}`)
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(hero => this.heroes = hero)
  }

  add(name: string): void {
    name = name.trim();

    if (!name) {
      return;
    }

    this.heroService.addHero({name} as Hero).subscribe(hero => {
      this.heroes.push(hero);
    })
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
