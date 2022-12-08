import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private httpclient:HttpClient) { }

  ngOnInit(): void {
    //this.getProducts();
    this.getProduct();
    //this.createProduct();
    //this.updateProduct();
    //this.deleteProduct();

  }

  getProducts(){
    this.httpclient.get("https://api.escuelajs.co/api/v1/products").subscribe (
      response => {
        console.log(response);
      }
    ) ;
  }

  getProduct(){
    this.httpclient.get("https://api.escuelajs.co/api/v1/products").subscribe (
      response => {
        console.log(response);
      }
    );
  }

  createProduct(){
   const data = {

      title:'Jennifer Simba',
      price:50,
      description:'Instituto yavirac',
      images:[],
      categoryId:1,

    }
    const url="https://api.escuelajs.co/api/v1/products"
    this.httpclient.post(url,data).subscribe (
      response => {
        console.log(response);
      }
    );


    //taller con put señalar el mnombre y revisas en la url
  }


  updateProduct(){
    const data = {

       title:'Jennifer Rivera',
       price:3,
       description:'Trabajo',


     }
     const url="https://api.escuelajs.co/api/v1/products/65"
     this.httpclient.put(url,data).subscribe (
       response => {
         console.log(response);
       }
     );


     //taller con put señalar el mnombre y revisas en la url
   }


   deleteProduct(){
    const url="https://api.escuelajs.co/api/v1/products/65"
    this.httpclient.delete(url).subscribe (
      response => {
        console.log(response);
      }
    );
  }


}
