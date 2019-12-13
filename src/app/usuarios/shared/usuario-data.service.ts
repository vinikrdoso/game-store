import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioDataService {
  private usuarioSource = new BehaviorSubject({ usuario: null, key: '' });
  currentUsuario = this.usuarioSource.asObservable();

  constructor() { }

  changeusuario(usuario: Usuario, key: string) {
    this.usuarioSource.next({ usuario: usuario, key: key });
  }
}