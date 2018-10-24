import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormGroupDirective, NgForm} from '@angular/forms';
import { Router } from '@angular/router'

import { ConstructorService } from "../constructor.service";
import { MatSnackBar } from '@angular/material';
import { CheckType } from '../../../node_modules/@angular/core/src/view';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  districs: String[] = ['Ampara', 'Anuradapura', 'Badulla', 'Batticaloa', 'Colombo', 'Galle', 'Gampaha', 'Hambantota', 'Jaffna', 'Kalutara', 'Kandy', 'Kegalle', 'Killinochchi', 'Kurunegala', 'Mannar', 'Matale', 'Matara', 'Monaragala', 'Mullaitivu', 'Nuwara Eliya', 'Polonnaruwa', 'Puttalam', 'Ratnapura', 'Trincomalee', 'Vavuniya'];
  cTypes: String[] = ['Architect', 'Carpenter', 'Consultant', 'Civil Engineer', 'Electrician', 'Gardner', 'Helper', 'Meson', 'Landscaper', 'Painter', 'Plumber', 'Surveyor', 'Steel Worker', 'Transporter', 'Valuer'];
  genders: String[] = ['male', 'female'];

  registerForm: FormGroup;
  fName: string = '';
  mName: string = '';
  lName: string = '';
  line1: string = '';
  line2: string = '';
  line3: string = '';
  city: string = '';
  distric: string = '';
  birthday: string = '';
  gender: string = '';
  nic: string = '';
  email: string = '';
  phone: string = '';
  cType: string = '';

  onSubmit(){
  }

  constructor(private constructorService: ConstructorService, private fb: FormBuilder, private router: Router, private snackBar: MatSnackBar ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      'fName' : [null, Validators.required],
      'mName' : [null],
      'lName' : [null],
      'line1' : [null, Validators.required],
      'line2' : [null, Validators.required],
      'line3' : [null, Validators.required],
      'city' : [null, Validators.required],
      'distric' : [null, Validators.required],
      'birthday': [null, Validators.required],
      'gender': [null, Validators.required],
      'nic': [null, Validators.required],
      'email': [null],
      'phone': [null, Validators.required],
      'cType': [null, Validators.required]
    });
  }

  registerConstructor(fName, mName, lName, line1, line2, line3, city, distric, birthday, gender, nic, email, phone, cType){
    this.constructorService.registerConstructor(fName, mName, lName, line1, line2, line3, city, distric, birthday, gender, nic, email, phone, cType).subscribe(() => {
      this.snackBar.open('Your data is moved to admin panel', 'ok',{
        duration: 5000
      })
      this.router.navigate(['/category']);
    })
  }

}

/* export class RegisterComponent implements OnInit {

  districs: String[] = ['Ampara', 'Anuradapura', 'Badulla', 'Batticaloa', 'Colombo', 'Galle', 'Gampaha', 'Hambantota', 'Jaffna', 'Kalutara', 'Kandy', 'Kegalle', 'Killinochchi', 'Kurunegala', 'Mannar', 'Matale', 'Matara', 'Monaragala', 'Mullaitivu', 'Nuwara Eliya', 'Polonnaruwa', 'Puttalam', 'Ratnapura', 'Trincomalee', 'Vavuniya'];
  cTypesControl = new FormControl('', [Validators.required]);
  districControl = new FormControl('', [Validators.required]);
  fnameControl = new FormControl('', [Validators.required]);
  cTypes: String[] = ['Architect', 'Meson', 'Carpenter', 'Painter', 'Electrician'];
  //userModel=new Applicant('', '', '', '', '', '', '', '', 0, '');

  registerForm: FormGroup;

  onSubmit(){
  }

  constructor(private constructorService: ConstructorService, private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      fName: '',
      middle: '',
      lName: '',
      street: '',
      city: ['', Validators.required],
      state: '',
      distric: '',
      birthday: '',
      nic: '',
      email: '',
      phone: '',
      cType: ''
    });
  }

  registerConstructor(fName, middle, lName, street, city, state, distric, birthday, nic, email, phone, cType){
    this.constructorService.registerConstructor(fName, middle, lName, street, city, state, distric, birthday, nic, email, phone, cType).subscribe(() => {
      this.router.navigate(['/home']);
    })
  }

  ngOnInit() {
  }

}  */
