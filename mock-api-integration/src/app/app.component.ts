import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'mock-api-integration';
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    debugger;
    this.http.get('http://localhost:3000/api/users').subscribe((data)=>{
      console.log(data);
    })
  }
}
