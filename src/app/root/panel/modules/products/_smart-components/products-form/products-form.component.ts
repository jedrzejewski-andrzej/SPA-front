import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from '../../_services/products.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {
  @Output() refetchData: EventEmitter<void> = new EventEmitter<void>();
  formGroup: FormGroup;
  constructor(
    private _fromBuilder: FormBuilder,
    private _productsService: ProductsService,
  ) {}
  
  ngOnInit() {
    this._initForm()
  }
  
  private _initForm(): void {
    this.formGroup = this._fromBuilder.group({
      name: [null, Validators.required],
      brand: [null, Validators.required],
      price: [null, Validators.required],
      amount: [null, Validators.required],
    })
  }
  
  getControl(path: string): FormControl {
    return this.formGroup.get(path) as FormControl;
  }
  
  submit(): void {
    if (this.formGroup.valid) {
      this._productsService.addProduct(this.formGroup.getRawValue()).subscribe(() => this.refetchData.emit());
    } else {
      this.formGroup.markAllAsTouched();
    }
  }
}