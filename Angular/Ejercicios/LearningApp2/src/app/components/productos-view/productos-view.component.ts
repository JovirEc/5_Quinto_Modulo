import { Component, Input } from '@angular/core';
import { Producto } from '../../model/Producto';
import { ItemsProViewComponent } from '../items-pro-view/items-pro-view.component';

@Component({
  selector: 'productos-view',
  standalone: true,
  imports: [ItemsProViewComponent],
  templateUrl: './productos-view.component.html',
})
export class ProductosViewComponent {
  @Input()productos!:Producto[]
}
