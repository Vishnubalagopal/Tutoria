import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses = [
    { name: 'Angular', duration: '4 weeks', price: '$200' },
    { name: 'React', duration: '3 weeks', price: '$150' },
    { name: 'Vue', duration: '2 weeks', price: '$100' },
  ];
  constructor() { }

  ngOnInit(): void {
    
  }
  

}
