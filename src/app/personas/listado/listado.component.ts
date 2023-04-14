import { Component } from '@angular/core';
import { PersonasService } from '../servicios/personas.service';
import { Persona } from '../interfaces/personas.interface';

@Component({
  selector: 'app-listado',
<<<<<<< HEAD
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
=======
  templateUrl: './listado.component.html'
>>>>>>> b057da6 (first commit)
})
export class ListadoComponent {
  personas:Persona[] = [];
  constructor(private personaService:PersonasService){}
<<<<<<< HEAD
  listarPesonas(){
=======


  ngOnInit() {
>>>>>>> b057da6 (first commit)
    this.personaService.listaPersonas().subscribe(
      (personas)=>{
        this.personas = personas;
        console.log(this.personas);
      }

    )
  }

<<<<<<< HEAD
=======

>>>>>>> b057da6 (first commit)
}
