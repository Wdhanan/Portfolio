import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit  {
  workExpList: WorkExperience[]=[
    {
      role:'Working Student Software Development',
      company:' Pit Cup GMBH',
      duration:'Okt 2022- Feb 2023',
      description: [
        'Worked in a Scrum Team to develop and Test Webapplications',
        'Worked on differents Technologies such as C#, Java , C++ and Selenium Webdriver and IDE',
      ],
    },
    {
      role:'Internschip Implementation of an Interface for a GRC-Tool',
      company:' Mercedes Benz Bank',
      duration:'Mars 2023- now',
      description: [
        'Worked in a Scrum Team Test Webapplications, Manage the Authorization Assignments, Maintenance of a Toolchain Tool',
        'Worked on differents Technologies within the Company',
      ],
    },
  ];
  
  
  constructor(){

  }
  ngOnInit(): void {
    
  }

  
}
