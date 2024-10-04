import { Component, Input } from '@angular/core';
import { Student } from '../../model/Student';

@Component({
  selector: 'tr[estudiante-view]',
  standalone: true,
  imports: [],
  templateUrl: './estudiante-view.component.html',
})
export class EstudianteViewComponent {
  @Input()estudianteView!:Student
}
