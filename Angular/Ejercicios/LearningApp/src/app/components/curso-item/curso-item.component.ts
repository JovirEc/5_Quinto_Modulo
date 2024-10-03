import { Component, Input } from '@angular/core';
import { Course } from '../../model/Course';

@Component({
  selector: 'curso-item',
  standalone: true,
  imports: [],
  templateUrl: './curso-item.component.html',
})
export class CursoItemComponent {
  @Input() course!:Course
}
