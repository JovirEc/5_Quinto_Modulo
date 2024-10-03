import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/Course';
import { CourseService } from '../../services/course.service';
import { CursoNameViewComponent } from '../curso-name-view/curso-name-view.component';

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [CursoNameViewComponent],
  templateUrl: './learning.component.html',
})

export class LearningComponent implements OnInit {
  
  course!:Course;
  constructor(private service: CourseService){ }
  
  ngOnInit(): void {
    this.course = this.service.getCourse();
  }

}
