import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

   heroHeading: string;
   heroSubHeading: string
   heroText: string;
   heroBtnText: string;
   heroBtnUrl: string;

  constructor() {
    this.heroHeading = "Experience The"
    this.heroSubHeading ="Best Trips Ever"
    this.heroText = "The more you know about traveling to The Islands of Caribbean, the more you'll be prepared when you arrive."
    this.heroBtnText = "Book Trips"; // link to travel
    this.heroBtnUrl = "/travel-page"
   }

  ngOnInit(): void {
  }

}
