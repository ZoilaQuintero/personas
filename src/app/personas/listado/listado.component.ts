import { Component } from '@angular/core';
import { PersonasService } from '../servicios/personas.service';
import { Persona } from '../interfaces/personas.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  personas:Persona[] = [];
  constructor(private personaService:PersonasService){}
  ngOnInit() {
    this.personaService.listaPersonas().subscribe(
      (personas)=>{
        this.personas = personas;
        console.log(this.personas);
      }

    )
  }
}
