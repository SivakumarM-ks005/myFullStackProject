import { Component, EventEmitter, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductServices } from '../../services/product-services';
import { Category } from '../../services/category';
import { Snackbar } from '../../services/snackbar';
import { globalConstant } from '../../shared/global-constants';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class Product {
onAddProduct = new  EventEmitter;
onEditProduct = new EventEmitter;
productForm:any = FormGroup;
dialogAction:any="Add";
action:any = "Add";
respsonseMessage:any;
category:any=[];

constructor( @inject(MAT_DIALOG_DATA) public dialogData:any,
private formBuilder : FormBuilder,
private productService: ProductServices,
public dialogRef: MatDialogRef<Product>,
private categoryService: Category,
private snackbarService: Snackbar){}

ngOnInit():void{

  this.productForm = this.formBuilder.group({
    name:[null, [Validators.required, Validators.pattern(globalConstant.nameRegex)]],
    categoryId: [null,[Validators.required]],
    price:[null,[Validators.required]],
    description:[null, [Validators.required]]
  })
}
}
