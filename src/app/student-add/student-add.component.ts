import { Component, OnInit } from '@angular/core';
import { DataService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  constructor( private data: DataService, private router : Router) { }

  name = '';
  address = '';
  point = null;
  
  ngOnInit(): void {
  }

  handleNavigatorListStudent() {
    alert('Thêm thành công!');
    this.router.navigate(['student-list']);
  }

  addStudent(student: any) {    
    this.data.addStudent(student).subscribe(() => this.handleNavigatorListStudent());
  }

}
