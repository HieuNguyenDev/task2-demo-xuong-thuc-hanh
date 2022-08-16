import { Component, OnInit } from '@angular/core';
import { DataService } from '../service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor( private data: DataService) { }
  listStudents: any;
  ngOnInit(): void {
    this.listStudents = this.data.getStudents().subscribe(students => this.listStudents = students);
  }

  handleShowInfoDelete() {
    alert('Xóa thành công!');
    window.location.reload();
  }

  handleDelete(id: number) {
    if (confirm('Bạn có chắc chắn muốn xóa không?')) {
      this.data.deleteStudent(id).subscribe(() => this.handleShowInfoDelete());
    }
  }

  handleEdit() {
    alert('Chức năng đang được bảo trì!');
  }
}
