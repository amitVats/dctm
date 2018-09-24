import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

export interface Request {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.scss']
})




export class MockComponent implements OnInit {

request: Request[] = [
    {value: 'get', viewValue: 'GET'},
    {value: 'post', viewValue: 'POST'},
    {value: 'put', viewValue: 'PUT'},
    {value: 'delete', viewValue: 'DELETE'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
