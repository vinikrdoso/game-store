import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Usuario } from './usuario';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private db: AngularFireDatabase) { }

  insert(usuario: Usuario) {
    this.db.list('usuario').push(usuario)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update(usuario: Usuario, key: string) {
    this.db.list('usuario').update(key, usuario)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getAll() {
    return this.db.list('usuario')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...(c.payload.val()) as {} }));
        })
      );
  }

  delete(key: string) {
    this.db.object(`usuario/${key}`).remove();
  }
}