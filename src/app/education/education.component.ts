import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
educationList: Education []=[
  {

    institute:'College de la Retraite',
    course:'GCE',
    duration:'2011-2018',
    score:'Good',
}
  ,
  {
   institute:'Goethe Institut Kamerun',
    course:'German Courses',
    duration:'2018-2019',
    score:'Good',
}
  ,
  {

    institute:'Technische Universität Kaiserslautern',
    course:'DSH-Kurs',
    duration:'2019-2020',
    score:'Good',
}
  ,
  {

    institute:'Hochschule Kaiserslautern',
    course:'Bachelor of Science',
    duration:'2020-2024',
    score:'In Progress',
},
  
  

];

ngOnInit(): void {
  
}
constructor(){

}
}
