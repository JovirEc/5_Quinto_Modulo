import { Component } from '@angular/core';
import { Empresa } from '../../model/Empresa';
import { EmpresaService } from '../../services/empresa.service';
import { EmpresaViewComponent } from "../empresa-view/empresa-view.component";
import { TiendaViewComponent } from '../tienda-view/tienda-view.component';

@Component({
  selector: 'app-empresa',
  standalone: true,
  imports: [EmpresaComponent, EmpresaViewComponent,TiendaViewComponent],
  templateUrl: './empresa.component.html',
})
export class EmpresaComponent {

  empresa!:Empresa;
  constructor(private service: EmpresaService){}

  ngOnInit():void{
    this.empresa=this.service.getEmpresa();
  }
}
