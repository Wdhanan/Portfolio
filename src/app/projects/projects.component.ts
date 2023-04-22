import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[]=[
    {
      title:'MitFahr-Webapp',
      technologies:'HTML/CSS/Javascript/, Java, Microprofile, Maven, Docker, Open Liberty, OpenstreetMap',
      description:[
        'I built a small fullstack Web Application for our University where Students can easily register themselves',
        'and look for a ride. All the Students have the same destination which is the University'

      ],
    },
    {
      title:'Pizza-To-go',
      technologies:'HTML/CSS/Javascript/, Java, Microprofile, Maven, Docker, Open Liberty',
      description:[
        'In a Team of 7 Persons we built a Fullstack Pizza-Delivery-Web-Application so that people could easily order Pizzas',
        'We had in this Projects 3 Backend and i was responsible of the Backend User-Management for Login/Logout and Registration of new Users'

      ],
    },
    {
      title:'Simulation of a Disease',
      technologies:'Python, Machine Learning; jupyter Notebook',
      description:[
        'In a Team of 2 Persons we simulated the propagation of  a Disease in a simple people Area of 50 Persons  using Mathematicals Rules ',
        

      ],
    },
    {
      title:'Employee Management Web-app',
      technologies:'Angular, Springboot, Java',
      description:[
        'I built a simple Webapp where you Can Manage all your Employees with CRUD-Manipulations ',
        

      ],
    },

  ];

constructor(){

}

ngOnInit(): void {
  
}

}
