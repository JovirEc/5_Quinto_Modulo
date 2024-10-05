import { Component, Input } from '@angular/core';
import { Empresa } from '../../model/Empresa';

@Component({
  selector: 'empresa-view',
  standalone: true,
  imports: [],
  templateUrl: './empresa-view.component.html',
})
export class EmpresaViewComponent {
  @Input()empresa!:Empresa
}
