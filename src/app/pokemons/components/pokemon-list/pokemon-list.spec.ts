import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonList } from './pokemon-list';
import { SimplePokemon } from '../../interfaces/simple-pokemon.interface';
import { provideRouter } from '@angular/router';

const mockPokemons: SimplePokemon[] = [
  { id: '1', name: 'Bulbasaur' },
  { id: '2', name: 'Ivysaur' },
];

describe('PokemonList', () => {
  let component: PokemonList;
  let fixture: ComponentFixture<PokemonList>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PokemonList],
      providers: [provideRouter([])],
    });
    fixture = TestBed.createComponent(PokemonList);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('pokemons', mockPokemons);

    fixture.detectChanges(); // important
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the pokemon list', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    // console.log(compiled.innerHTML);
    const pokemonCards = compiled.querySelectorAll('pokemon-card');
    expect(pokemonCards.length).toBe(mockPokemons.length);
  });

  it('should render "No hay pokemons" when list ins empty', () => {
    fixture.componentRef.setInput('pokemons', []);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    // console.log(compiled.innerHTML);
    const message = compiled.querySelector('div.col-span-5');
    expect(message?.textContent.trim()).toBe('No hay pokemons');
  });
});
