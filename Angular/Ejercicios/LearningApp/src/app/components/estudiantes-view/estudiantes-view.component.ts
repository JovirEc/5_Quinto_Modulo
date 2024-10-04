import { Component, Input } from '@angular/core';
import { Student } from '../../model/Student';
import { EstudianteViewComponent } from '../estudiante-view/estudiante-view.component';

@Component({
  selector: 'estudiantes-view',
  standalone: true,
  imports: [EstudianteViewComponent],
  templateUrl: './estudiantes-view.component.html',
})
export class EstudiantesViewComponent {
  @Input()estudiantesView!:Student[]
}
