import { Component  } from '@angular/core';
import { Category } from '../../services/category';
import { NgxUiLoaderComponent, NgxUiLoaderService } from 'ngx-ui-loader';
import { Snackbar } from '../../services/snackbar';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { response } from 'express';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-manage-category',
  imports: [],
  templateUrl: './manage-category.html',
  styleUrl: './manage-category.scss'
})
export class ManageCategory {
displayedColumns:string[] = ['name','edit'];
dataSource:any;
responseMessage: any;

constructor(
  private categoryService: Category,
  private ngxService: NgxUiLoaderService,
  private snackbarService: Snackbar,
  private dialog: MatDialog,
  private router:Router
){
  
}

ngOnInit():void {
  this.ngxService.start();
  this.tableData();
}
tableData(){
  this.categoryService.getCategory().subscribe({
    next: (response)=>{
      this.ngxService.stop();
      this.dataSource = new MatTableDataSource(response);
    }, error:(error)=>{

    }
  })
}

}
