import { TestBed } from '@angular/core/testing';

import { UsuarioDataService } from './usuario-data.service';

describe('UsuarioDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioDataService = TestBed.get(UsuarioDataService);
    expect(service).toBeTruthy();
  });
});
