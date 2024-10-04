import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/Course';
import { CourseService } from '../../services/course.service';
import { CursoNameViewComponent } from '../curso-name-view/curso-name-view.component';
import { CursoIdViewComponent } from '../curso-id-view/curso-id-view.component';
import { EstudiantesViewComponent } from '../estudiantes-view/estudiantes-view.component';

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [CursoNameViewComponent,CursoIdViewComponent,EstudiantesViewComponent],
  templateUrl: './learning.component.html',
})

export class LearningComponent implements OnInit {
  
  course!:Course;
  constructor(private service: CourseService){ }
  
  ngOnInit(): void {
    this.course = this.service.getCourse();
  }

}
