import { Component } from '@angular/core';
import { Empresa } from '../../model/Empresa';
import { EmpresaService } from '../../services/empresa.service';

@Component({
  selector: 'app-empresa',
  standalone: true,
  imports: [EmpresaComponent],
  templateUrl: './empresa.component.html',
})
export class EmpresaComponent {

  empresa!:Empresa;
  constructor(private service: EmpresaService){}

  ngOnInit():void{
    this.empresa=this.service.getEmpresa();
  }
}
