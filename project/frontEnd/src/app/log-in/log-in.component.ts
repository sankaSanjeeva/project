import { Component, OnInit } from '@angular/core';
import { login } from './login'
//import { ConstructorService } from "../constructor.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  userModel = new login('','');

  constructor() { }

  ngOnInit() {
  }

}