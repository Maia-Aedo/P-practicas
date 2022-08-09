import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

// siempre tiene que tener decorador injectable
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuarios: Usuario[] = [];

  constructor() { 
    this.usuarios = [
      {nombreUsuario: 'Maia', contrasena: '12345'},
      {nombreUsuario: 'Lucia', contrasena: '6789'},
      {nombreUsuario: 'Benjamin', contrasena: 'arbol'},
      {nombreUsuario: 'David', contrasena: 'hoja'},
    ]
  }

  getUsers() {
    return this.usuarios
  }

  

}
