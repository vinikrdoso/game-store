import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../shared/usuario';
import { UsuarioService } from '../shared/usuario.service';
import { UsuarioDataService } from '../shared/usuario-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  usuario: Usuario
  key: string = '';

  constructor(private usuarioService: UsuarioService, private usuarioDataService: UsuarioDataService) { }

  ngOnInit() {
    this.usuario = new Usuario();
    this.usuarioDataService.currentUsuario.subscribe(data => {
      if (data.usuario && data.key) {
        this.usuario = new Usuario();
        this.usuario.nome = data.usuario.nome;
        this.usuario.telefone = data.usuario.telefone;
        this.usuario.cpf = data.usuario.cpf;
        this.usuario.idade = data.usuario.idade
        this.key = data.key;
      }
    })
  }

  onSubmit() {
    if (this.key) {
      this.usuarioService.update(this.usuario, this.key);
    } else {
      this.usuarioService.insert(this.usuario);
    }

    this.usuario = new Usuario();
  }
}