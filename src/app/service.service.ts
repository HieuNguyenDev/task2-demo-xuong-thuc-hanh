import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root'})

export class DataService {
  constructor(private http: HttpClient) { }

  getStudents(){
    return this.http.get('http://localhost:3000/students');
  }

  addStudent(student: any) {
    return this.http.post('http://localhost:3000/students', student);
  }

  deleteStudent(id: number) {
    return this.http.delete('http://localhost:3000/students/' + id)
  }
}