import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees(){
    return [
      {"id":1,"name":"aaa","age":30},
  {"id":2,"name":"bbb","age":23},
  {"id":3,"name":"ccc","age":32},
  {"id":4,"name":"ddd","age":54}
    ];
  }
  /*getEmployees():Observable<Employee[]>{
return of(EMPLOYEES);
  }*/
}
