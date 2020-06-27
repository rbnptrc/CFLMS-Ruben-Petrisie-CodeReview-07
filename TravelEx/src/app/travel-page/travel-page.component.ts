import { Component, OnInit } from '@angular/core';
import { offers } from '../offers';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'travel-page',
  templateUrl: './travel-page.component.html',
  styleUrls: ['./travel-page.component.css']
})
export class TravelPageComponent implements OnInit {

  offers = offers;
  items;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(items) {
    window.alert('Your offer has been added to the cart!');
    this.cartService.addToCart(items);
  }

  ngOnInit() {
    let element = document.getElementById('hero-jumbo')
    element.className = 'jumbotron travel'

    this.route.paramMap.subscribe(params => {
      this.items = offers[+params.get('offersId')];
    });
  }

}
