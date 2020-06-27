import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {


    let element = document.getElementById('hero-jumbo')
    element.className = 'jumbotron blog'
  }

}
