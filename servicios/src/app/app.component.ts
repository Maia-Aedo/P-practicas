import { Component, OnInit } from '@angular/core';
import { AlertService } from './servicios/alert.service';
import { MenuItem } from 'primeng/api';
import { Usuario } from './models/usuario';
import { UsuariosService } from './servicios/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'servicios';

  //en los parametros del constructor se inyectan los servicios
  constructor(private servicio2:AlertService, private servicioUsuarios:UsuariosService) { }
  usuarios=this.servicioUsuarios.getUsers();

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        label: 'Admin',
        icon: 'pi pi-user-plus',
        visible: false
      }
    ];
  }

  items: MenuItem[] = [];
  
  mostrar() {
    this.servicio2.mostrarAlert("Estoy siendo llamado desde appcomponent")
  }

}
