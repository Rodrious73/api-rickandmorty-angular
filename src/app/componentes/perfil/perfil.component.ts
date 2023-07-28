import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesApiMortyService } from 'src/app/services/services-api-morty.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  personajeId!: string;
  personaje:any;
  episodios:any[]=[];

  constructor(private rickandmortyService: ServicesApiMortyService,private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.personajeId = params.get('id')!;
      this.obtenerUnPersonaje();
    });
  }

  obtenerUnPersonaje(){
    this.rickandmortyService.obtenerUnPersonaje(this.personajeId).subscribe((data)=>{
      this.personaje=data;
      this.obtenerEpisodiosDelPersonaje();
    })
  }

  obtenerEpisodiosDelPersonaje(){
    this.episodios=[];
    this.personaje.episode.forEach((url: string) => {
      this.rickandmortyService.obtenerLosEspisodios(url).subscribe((data) => {
        this.episodios.push(data);
      });
    });
  }
}
