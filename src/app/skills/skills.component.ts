import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[]=[
    {
      name:'JAVA/ PYTHON',
      level:'Expert',
      rating: 90,

    },
    {
      name:'Springboot/ Microprofile',
      level:'Expert',
      rating: 90,

    },
    {
      name:'Scrum/ Kanba/Agil',
      level:'Expert',
      rating: 90,

    },
    {
      name:'HTML/CSS/Javascript',
      level:'Good',
      rating: 80,

    },
    {
      name:'C/C++',
      level:'Intermediate',
      rating: 75,

    },
    {
      name:'Angular',
      level:'Good',
      rating: 80,

    },
    {
      name:'MySQL/SQL/ Docker',
      level:'Good',
      rating: 80,

    },
    


  ];
  ngOnInit(): void {
    
  }

}
