import { Injectable } from '@angular/core';
import { Empresa } from '../model/Empresa';
import { empresaData } from '../data/empresa.data';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private empresa:Empresa=empresaData;
  constructor() { }

  getEmpresa():Empresa{
    return this.empresa
  }
}
