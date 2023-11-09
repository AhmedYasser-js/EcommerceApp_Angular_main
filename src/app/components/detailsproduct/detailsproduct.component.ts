import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { ApidataService } from 'src/app/service/apidata.service';
import { CartService } from 'src/app/service/cart.service';
import { WishListService } from 'src/app/service/wish-list.service';
// import { OwlOptions, OwlEvent } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-detailsproduct',
  templateUrl: './detailsproduct.component.html',
  styleUrls: ['./detailsproduct.component.scss']
})
export class DetailsproductComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ApidataService: ApidataService,
    private _CartService: CartService,
    private _ToastrService: ToastrService,
    private _WishListService: WishListService
  ) { }

  productDetails: any = {};
  productId: any;
  wishListData: any[] = [];
  images: string[] = [];

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params) => {
      this.productId = params.get('id');
    });

    this._ApidataService.getProductsById(this.productId).subscribe((response) => {
      this.productDetails = response.data;
    });

    this._WishListService.getToWishList().subscribe((response) => {
      console.log(response);
      const newWishData = response.data.map((item: any) => item._id);
      console.log(newWishData);
      this.wishListData = newWishData;
    });
  }

  productDetailsImage: any = {
    images: ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'],
  };

  activeIndex = 0;

  productSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    autoplay: true,
    nav: false,

  };

  // I noticed an error in the following line. You should use `activeIndex` instead of `owlCarousel`.
  goTo(index: number) {
    this.activeIndex = index;
  }

  totalItemsCart: any;

  addProduct(id: string): void {
    this._CartService.addToCart(id).subscribe((response) => {
      console.log(response);
      this._CartService.cartNum.next(response.numOfCartItems);
      console.log(this._CartService.cartNum);
      this._ToastrService.success('It has been successfully added. 🛺');
    });
  }

  roundNumber(num: number): number {
    return Math.round(num);
  }

  addToWish(id: any): void {
    this._WishListService.addToWishList(id).subscribe((response) => {
      console.log(response);
      this._ToastrService.success(response.message + ' ❤️');
      if (response.status === "success") {
        const newWishData = response.data.map((item: any) => item._id);
        console.log(newWishData);
        this.wishListData = response.data;
      }
    });
  }

  removFromWishList(id: string): void {
    this._WishListService.removeItemFromWishList(id).subscribe((response) => {
      console.log(response);
      this._ToastrService.success(response.message + '🖤');
      const newWishData = response.data.map((item: any) => item._id);
      console.log(newWishData);
      this.wishListData = response.data;
    });
  }
}
