import { Component, Input } from '@angular/core';
import { Producto } from '../../model/Producto';

@Component({
  selector: 'tr[items-pro-view]',
  standalone: true,
  imports: [],
  templateUrl: './items-pro-view.component.html',
})
export class ItemsProViewComponent {
  @Input()items!:Producto
}
