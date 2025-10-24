import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../services/category';
import { Product } from '../product/product';
import { Snackbar } from '../../services/snackbar';
import { BillService } from '../../services/bill-service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { globalConstant } from '../../shared/global-constants';

@Component({
  selector: 'app-manage-order',
  imports: [],
  templateUrl: './manage-order.html',
  styleUrl: './manage-order.scss'
})
export class ManageOrder {
  displayedColumns:string[]=['name', 'category','pricer','quantity','total','edit'];
  dataSource:any=[];
  manageOrderForm:any = FormGroup;
  categorys:any=[];
  products:any=[];
  price:any;
  totalAmount:number=0;
  responseMessage:any;

  constructor( private formBuilder: FormBuilder,
    private categoryService:Category,
    private productService: Product,
    private snackbarService:Snackbar,
    private billService: BillService,
    private ngxService:NgxUiLoaderService
  ){}

  ngOnInit():void{
    this.ngxService.start();
    this.getCategorys()
   this.manageOrderForm= this.formBuilder.group({
      name:[null,[Validators.required,Validators.pattern(globalConstant.nameRegex)]],
      email:[null,[Validators.required,Validators.pattern(globalConstant.emailRegex)]],
      contactNumber:[null,[Validators.required,Validators.pattern(globalConstant.contactNumberRegex)]],
      paymentMethod:[null,[Validators.required]],
      product:[null,[Validators.required]],
      category:[null,[Validators.required]],
      quantity:[null,[Validators.required]],
      price:[null,[Validators.required]],
      total:[0,[Validators.required]]
    })
  }

  getCategorys(){
    this.categoryService.getCategory().subscribe({
      next:(response:any)=>{
        this.ngxService.stop();
        this.categorys = response;
      },error:(error:any)=>{
        if(error.error?.message){
          this.responseMessage = error.error?.message;
        }else{
          this.responseMessage = globalConstant.genericError;
        }
        this.snackbarService.openSnackBar(this.responseMessage, globalConstant.error);
      }
    })
  }
}
