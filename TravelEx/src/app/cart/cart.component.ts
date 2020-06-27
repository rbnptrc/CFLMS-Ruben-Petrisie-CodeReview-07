import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  offers;
  checkoutForm;

  offersTotal: number;
  setDiscount: boolean = false;
  totDiscount: number = 0;
  
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder) { 
      this.checkoutForm = this.formBuilder.group({
        name: '',
        address: '',
        email: '',
      });
    }

  ngOnInit() {
    this.offers = this.cartService.getCart();
    this.offersTotal = this.cartService.setTotl();
    this.setDiscount = this.cartService.setDiscount;
    this.totDiscount = this.cartService.totDiscount;

    // check discount
    if (this.setDiscount){
      this.offersTotal = this.offersTotal * (1 - this.totDiscount);
    }
  }

  onSubmit(customerData) {
    // Process checkout data here sample
    if (this.checkoutForm.valid){
      console.table(customerData);
    }
    window.alert('Your order has been submitted');


    // empty cart
    this.offers = this.cartService.clearCart();


    this.setDiscount = this.cartService.setDiscount;
    this.totDiscount = this.cartService.totDiscount;
    this.offersTotal = this.cartService.setTotl();

    //reset
    this.checkoutForm.reset();
  }

}
