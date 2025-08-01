import { Component, inject } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../../services/product.service';

interface ConfirmDialogData {
  id: any;
  module: 'category' | 'product';
}

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
})
export class ConfirmComponent {
  private categoryService = inject(CategoryService);
  private productService = inject(ProductService);
  private dialogRef = inject(MatDialogRef<ConfirmComponent>);
  public data = inject<ConfirmDialogData>(MAT_DIALOG_DATA);

  onNoClick() {
    this.dialogRef.close(3);
  }

  delete() {
    if (!this.data) {
      this.dialogRef.close(2);
      return;
    }

    if (this.data.module === 'category') {
      this.categoryService.deleteCategorie(this.data.id).subscribe({
        next: () => this.dialogRef.close(1),
        error: () => this.dialogRef.close(2),
      });
    } else if (this.data.module === 'product') {
      this.productService.deleteProduct(this.data.id).subscribe({
        next: () => this.dialogRef.close(1),
        error: () => this.dialogRef.close(2),
      });
    } else {
      this.dialogRef.close(2);
    }
  }
}
