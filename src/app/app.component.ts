import { Component, OnInit } from '@angular/core';
import { Title,Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Travel On';
  constructor(private titleService:Title,
    private meta:Meta){}
  ngOnInit(){
    this.titleService.setTitle(this.title);
  }
}
