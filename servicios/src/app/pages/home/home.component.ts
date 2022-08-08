import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/servicios/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /* se inyecta el servicio, con una variable privada (para q
    no se pueda acceder a los datos sin autorizacion) y el tipo de servicio q creamos */
  constructor(private miServicio:AlertService) { }

  ngOnInit(): void {
    
  }

  lanzarDialogo() {
    this.miServicio.mostrarAlert("Estoy siendo llamado desde homecomponent")
  }

}
