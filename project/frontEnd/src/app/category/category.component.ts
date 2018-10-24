import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Constructor } from '../constructor.model';
import { ConstructorService } from "../constructor.service";
import { ThrowStmt } from '../../../node_modules/@angular/compiler';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructors: Constructor[];
  displayedColumns = ['first', 'distric', 'city'];

  constructor(private constructorService: ConstructorService, private router: Router, private breakpointObserver: BreakpointObserver ) { }

  ngOnInit() {
    this.fetchConstructors();
  }

  fetchConstructors(){
    this.constructorService
    .getConstructors()
    .subscribe((data: Constructor[]) => {
      this.constructors = data;
      console.log('Data requested...');
      console.log(this.constructors);
    });
  }

  fetchConstructorsBycType(type){
    this.constructorService
    .getConstructorsBycType(type)
    .subscribe((data: Constructor[]) => {
      this.constructors = data;
      console.log(type +'s data requested...');
      console.log(this.constructors);
    });
  }

  fetchConstructorsByDistric(distric){
    this.constructorService
    .getConstructorsByDistric(distric)
    .subscribe((data: Constructor[]) => {
      this.constructors = data;
      console.log('Data requested...');
      console.log(this.constructors);
    });
  }

  fetchConstructorsByGender(gender){
    this.constructorService
    .getConstructorsByGender(gender)
    .subscribe((data: Constructor[]) => {
      this.constructors = data;
      console.log('Data requested...');
      console.log(this.constructors);
    });
  }

  searchConstructorByName(name){
    this.constructorService
    .searchConstructorByName(name)
    .subscribe((data: Constructor[]) => {
      this.constructors = data;
      console.log('Data searched by fName');
      console.log(this.constructors);
    });
  }

  searchConstructorByCity(city){
    this.constructorService
    .searchConstructorByCity (city)
    .subscribe((data: Constructor[]) => {
      this.constructors = data;
      console.log('Data searched by fName');
      console.log(this.constructors);
    });
  }

}
