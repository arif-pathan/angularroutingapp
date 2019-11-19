import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
templateUrl: './product-list.component.html'
})


export class ProductListComponent{
  productTitle = 'MyProductTitle';
  products: any[] = [

{
  productId : '2',
  productName : 'Cup',
  productCode: 'N1',
  releasedate: 'May 2019',
description : 'myproduct',
price: 'Rs50',
starRating: '5',
imageUrl: ''

}

  ];
}

