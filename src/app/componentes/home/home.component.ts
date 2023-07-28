import { Component } from '@angular/core';
import { ServicesApiMortyService } from 'src/app/services/services-api-morty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  personaje:any;
  todosLosPersonajes:any;
  siguientePaginaLink: string = '';
  id:string = '2';

  constructor(private rickandmortyService: ServicesApiMortyService){}

  ngOnInit(): void {
    this.obtenerTodosLosPersonajes();
  }

  obtenerTodosLosPersonajes(){
    this.rickandmortyService.obtenerTodosLosPersonajes().subscribe((data)=>{
      this.todosLosPersonajes=data.results;
      this.siguientePaginaLink = data.info.next;
    })
  }

  cargarSiguientePagina(): void {
    if (this.siguientePaginaLink) {
      this.rickandmortyService.obtenerDatosSiguientePagina(this.siguientePaginaLink).subscribe((data) => {
        this.todosLosPersonajes.push(...data.results);
        this.siguientePaginaLink = data.info.next;
      });
    }
  }

}
