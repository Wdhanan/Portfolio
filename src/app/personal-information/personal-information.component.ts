import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit{

  myData: string[][]=[
    ['Name',' Hanan Wandji'],
    ['DOB','  24/02/2001'],
    ['Work Exp',' 01 Year'],
    ['Education',' B.S (2024)'],
    ['Interests',' Football'],

  ];
  aboutMe: string[] = [
    'Hi, Hanan Wandji is my name and i am currently Studying Computer Science at the university of Applied Science Kaiserslautern',
    'I worked as a Working Student Software Developer by Pit Cup GMBH where i developed and wrote automated tests for web applications' ,
    'I m currently doing my internship at mercedes Benz Bank for the implementation of an Interface to facilate upload of Data to a GRC-Tool ',
    'I m a big Fan of new Technologies and  never stop expanding my knowledges. Stay tuned because you will surely hear from me. Hanan ☺️ '

    

  ];
  constructor(){

  }
ngOnInit(): void {

  
}
}
