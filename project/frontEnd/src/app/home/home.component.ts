import { Component, OnInit } from '@angular/core';
//import { ConstructorService } from "../constructor.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: any;

  constructor() { }

  ngOnInit() {
    
  }

}