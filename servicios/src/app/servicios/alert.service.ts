import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //de donde trae el servicio
})
export class AlertService {

  constructor() { }

  //parametro
  mostrarAlert(mensaje:string) {
    alert(mensaje)
  }

}
