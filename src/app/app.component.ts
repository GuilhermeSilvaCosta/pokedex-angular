import { Component, OnInit } from '@angular/core';
import { PokomonsService } from './pokomons.service';
import { Pokemon } from './models/Pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private allPokemons: Array<Pokemon> = [];
  
  public offset: number = 0;
  public pokemons: Array<Pokemon> = [];
  public search: string = '';
  public disableNext: Boolean = false;

  constructor(
    private _pokomonsService: PokomonsService,
  ) { }

  ngOnInit() {
    this._pokomonsService.getPokemons()
    .subscribe(response => {
      this.allPokemons = response.results
        .map((pokemon, index) => ({ ...pokemon, id: Number(index) + 1 }))
        .filter(pokemon => pokemon.name.indexOf('-') < 0);
      this.makeResult()
    })
  }

  nextPage() {
    this.offset += 20;
    this.makeResult();
  }

  previousPage() {
    this.offset -= 20;
    this.makeResult();
  }

  changeSearch(value) {
    this.search = value;
    this.offset = 0;
    this.makeResult();
  }

  private makeResult() {
    this.pokemons = this.allPokemons
      .filter(pokemon => 
        !this.search || 
        this.search === '' ||
        pokemon.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      )
      .filter((pokemon, index) => {
        const result = index >= this.offset && index < 20 + this.offset
        this.disableNext = index < 20 + this.offset
        return result;
      });
  }

}
