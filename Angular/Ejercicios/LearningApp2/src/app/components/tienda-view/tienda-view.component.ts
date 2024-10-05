import { Component, Input } from '@angular/core';
import { Tienda } from '../../model/Tienda';
import { ProductosViewComponent } from '../productos-view/productos-view.component';

@Component({
  selector: 'tienda-view',
  standalone: true,
  imports: [ProductosViewComponent],
  templateUrl: './tienda-view.component.html',
})
export class TiendaViewComponent {
  @Input()tiendas!:Tienda[]
}
