import {Component, OnDestroy, OnInit} from "@angular/core";
import {Observable, Subscription} from "rxjs";
import {User} from '../../models/user.model';
import {UserService} from '../../_services/user.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-account-container',
  templateUrl: './account-container.component.html',
  styleUrls: ['./account-container.component.scss'],
})
export class AccountContainerComponent implements OnInit, OnDestroy {
  private _subscription: Subscription = new Subscription();
  listData$ : Observable<User | null>;
  formGroup: FormGroup;

  constructor(
    private _userService: UserService,
    private _formBuilder: FormBuilder
  ) {}
  
  ngOnInit() {
    this.listData$ = this._userService.listData$;
    this.fetchData();
    this._initForm();
  }
  
  getControl(path: string): FormControl {
    return this.formGroup.get(path) as FormControl;
  }
  
  private _initForm(): void {
    this.formGroup = this._formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
    });
    
    this._subscription.add(
      this.listData$.subscribe((user: User | null) => {
        if (user) {
          this.formGroup.patchValue({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
          })
        }
      })
    )
  }
  
  submitHandler(): void {
    if (this.formGroup.valid) {
      console.log('test');
    } else {
      this.formGroup.markAllAsTouched();
    }
  }
  
  private fetchData(): void {
    this._userService.fetchData();
  }
  
  ngOnDestroy() {
    this._userService.clearData();
  }
}