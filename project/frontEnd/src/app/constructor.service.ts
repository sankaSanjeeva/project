import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConstructorService {

  uri = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  //get all
  getConstructors(){
    return this.http.get(`${this.uri}/users/view`);
  }

  //get all filtering cTypes
  getConstructorsBycType(type: String){
    return this.http.get(`${this.uri}/users/cTypes?cType=`+type);
  }

  //get all filtering distric
  getConstructorsByDistric(distric: String){
    return this.http.get(`${this.uri}/users/districs?distric=`+distric);
  }

  //get all filtering gender
  getConstructorsByGender(gender: String){
    return this.http.get(`${this.uri}/users/genders?gender=`+gender);
  }

  //search all by fname
  searchConstructorByName(name){
    return this.http.get(`${this.uri}/users/searchByName?fName=`+name);
  }

  //search all by fname
  searchConstructorByCity(city){
    return this.http.get(`${this.uri}/users/searchByCity?city=`+city);
  }

  //get one by id
  getConstructorsByID(id){
    return this.http.get(`${this.uri}/users/view/${id}`);
  }

  //register constructors
  registerConstructor(fName, mName, lName, line1, line2, line3, city, distric, birthday, gender, nic, email, phone, cType){
    const constructor = {
      fName: fName,
      mName: mName,
      lName: lName,
      line1: line1,
      line2: line2,
      line3: line3,
      city: city,
      distric: distric,
      birthday: birthday,
      gender: gender,
      nic: nic,
      email: email,
      phone: phone,
      cType: cType
    };
    return this.http.post(`${this.uri}/users/register`, constructor)
  }

  //update a constructor
  updateProfile(id, fName, mName, lName, line1, line2, line3, city, distric, birthday, gender, nic, email, phone, cType){
    const constructor = {
      fName: fName,
      mName: mName,
      lName: lName,
      line1: line1,
      line2: line2,
      line3: line3,
      city: city,
      distric: distric,
      birthday: birthday,
      gender: gender,
      nic: nic,
      email: email,
      phone: phone,
      cType: cType
    };
    return this.http.post(`${this.uri}/users/update${id}`, constructor)
  }

  //delete a constructor
  deleteConstructor(id){
    return this.http.get(`${this.uri}/users/delete${id}`);
  }

}
