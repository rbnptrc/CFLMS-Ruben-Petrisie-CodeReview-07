import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = []; 

  setDiscount: boolean;

  totDiscount: number =0;

  constructor() { }

  addToCart(items) {
    this.items.push(items);
  }
 
  getCart() {
    return this.items;
  }
 
  clearCart() {
    this.items = [];
    this.setDiscount = false;
    this.totDiscount = 0;

    return this.items;
  }


  //set total of offers
  
  setTotl () {
    let totl : number = 0;
  
    for (let settled of this.items) {
      totl += settled.price;
    }
  
  
    if (totl > 500) {
      this.setDiscount = true;
      this.totDiscount = 0.2;
    } else if (totl > 200) {
      this.setDiscount = true;
      this.totDiscount = 0.1;
    } else {
      this.setDiscount = false;
      this.totDiscount = 0;
    }
    return totl;
  }
}


//check discount + amount






