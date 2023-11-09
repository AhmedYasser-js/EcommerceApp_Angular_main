import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/service/cart.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private _CartService: CartService,

    private _ToastrService: ToastrService,

  ) { }


  totalItemsCart: any;
  cartData: any = {}
  appear: number = 0;

  ngOnInit(): void {
    this._CartService.getCart().subscribe({
      next: (response) => {
        console.log(response.numOfCartItems)
        this.totalItemsCart = response.numOfCartItems
        this.cartData = response.data;
      }
    })
  }
  removeItem(id: string): void {
    this._CartService.removeCartItem(id).subscribe({
      next: (response) => {
        console.log(response)
        this.totalItemsCart = response.numOfCartItems
        this.cartData = response.data;
        this._CartService.cartNum.next(response.numOfCartItems);
        // this._ToastrService.success(response.message + ' 🛺');
        // console.log(response.message + ' 🛺')
        this._ToastrService.success('Product removed successfully  ');
      }
    })
  }
  // *===================================
  clearCart(): void {
    this._CartService.ClearCart().subscribe({
      next: (response) => {
        console.log(response)
        this.cartData = response.data;
        // console.log(this.cartData.length)
        // this.appear = this.cartData.length;
        this._CartService.cartNum.next(response.numOfCartItems);
      }
    })
  }
  // *===================================



  changeCount(count: number, id: string): void {
    if (count >= 1) {
      this._CartService.updateCart(id, count).subscribe({
        next: (response) => {
          // console.log(response)
          this.cartData = response.data;
          this._CartService.cartNum.next(response.numOfCartItems);

        }
      })
    } else if (count == 0) {
      this._CartService.removeCartItem(id).subscribe({
        next: (response) => {
          // console.log(response)
          this.cartData = response.data;
          this.totalItemsCart = response.numOfCartItems
          this._CartService.cartNum.next(response.numOfCartItems);
          this._ToastrService.success('Product removed successfully  ');

        }
      })
    }
  }
}
