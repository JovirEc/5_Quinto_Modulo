import { Component, Input } from '@angular/core';
import { Course } from '../../model/Course';

@Component({
  selector: 'curso-name-view',
  standalone: true,
  imports: [],
  templateUrl: './curso-name-view.component.html',
})
export class CursoNameViewComponent {
  @Input()courseName!:Course
}
