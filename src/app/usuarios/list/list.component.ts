import { Usuario } from './../shared/usuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/usuario.service';
import { Observable } from 'rxjs';
import { UsuarioDataService } from '../shared/usuario-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  usuarios: Observable<any>;

  constructor(private usuarioService: UsuarioService, private usuarioDataService: UsuarioDataService) { }

  ngOnInit() {
    this.usuarios = this.usuarioService.getAll();
  }

  delete(key: string) {
    this.usuarioService.delete(key);
  }

  edit(usuario: Usuario, key: string) {
    this.usuarioDataService.changeusuario(usuario, key);
  }
}