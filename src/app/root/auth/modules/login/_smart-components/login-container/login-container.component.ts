import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { AuthFacade } from 'src/app/store/facades/auth.facade';
import { AuthModel } from 'src/models/auth/auth.model';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginContainerComponent implements OnInit, OnDestroy {
  private readonly _subscription: Subscription = new Subscription();
  formGroup: FormGroup;
  isLoggingIn$: Observable<boolean>;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _authFacade: AuthFacade,
    private readonly _changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this._initForm();
    this.isLoggingIn$ = this._authFacade.isLoggingIn$;
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  private _initForm(): void {
    this.formGroup = this._formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  submitHandler(): void {
    if (this.formGroup.valid) {
      this._authFacade.login(this.formGroup.value as AuthModel.LoginDTO);
    } else {
      this.formGroup.markAllAsTouched();
      this._changeDetectorRef.detectChanges();
    }
  }

  getControl(path: string): FormControl {
    return this.formGroup.get(path) as FormControl;
  }
}
