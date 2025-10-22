import { Component } from '@angular/core';
import { ProductServices } from '../../services/product-services';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Snackbar } from '../../services/snackbar';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { globalConstant } from '../../shared/global-constants';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-manage-product',
   imports: [MatFormFieldModule, MatTableModule,MatSlideToggleModule,  MatCardModule, MatInputModule, MatSelectModule],
  templateUrl: './manage-product.html',
  styleUrl: './manage-product.scss'
})
export class ManageProduct {
  displayedColumns: string[] = ['name','categoryName', 'description','price','edit'];
  dataSource: any;
  responseMessage: any;
  constructor( private productService: ProductServices,
    private ngxService:NgxUiLoaderService,
    private snackbarService: Snackbar,
    private router: Router,
    private dialog: MatDialog
  ){}
  ngOnInit(): void{
    this.ngxService.start();
    this.tableData()
  }

  tableData(){
    this.productService.getProduct().subscribe({
      next:(response:any)=>{
        this.ngxService.stop();
        this.dataSource = new MatTableDataSource(response);
      }, error:(error:any)=>{
        this.ngxService.stop();
        console.log(error);
        if(error.error?.message){
          this.responseMessage = error.error?.message;
        }else {
          this.responseMessage = globalConstant.genericError;
        }
        this.snackbarService.openSnackBar(this.responseMessage, globalConstant.error);
      }
    })
  }

  applyFilter(event:Event){
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();

  }
handleAddProduct(){}
  handleEditAction(value:any){}

  handleDeleteAction(value:any){}

  onChange(status:any, id:any){}
}
