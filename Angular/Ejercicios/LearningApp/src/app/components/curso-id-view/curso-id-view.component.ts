import { Component, Input } from '@angular/core';
import { Course } from '../../model/Course';

@Component({
  selector: 'curso-id-view',
  standalone: true,
  imports: [],
  templateUrl: './curso-id-view.component.html',
})
export class CursoIdViewComponent {
  @Input()courseId!:Course
}
