import { Component } from '@angular/core';
import { ProductServices } from '../../services/product-services';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Snackbar } from '../../services/snackbar';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-manage-product',
  imports: [],
  templateUrl: './manage-product.html',
  styleUrl: './manage-product.scss'
})
export class ManageProduct {
  displayedColumns: string[] = ['name', 'edit'];
  dataSource: any;
  responseMessage: any;
  constructor( private productService: ProductServices,
    private ngxService:NgxUiLoaderService,
    private snackbarService: Snackbar,
    private router: Router,
    private dialog: MatDialog
  ){}
}
