import { Component, OnInit, Input } from '@angular/core';

import { Pokemon } from '../models/Pokemon.model'

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit {

  @Input() pokemon: Pokemon; 

  public spriteURL: string;

  constructor() { }
  
  ngOnInit(): void {
    if (this.pokemon)
      this.spriteURL = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${this.pokemon.id}.png?raw=true`
  }

}
