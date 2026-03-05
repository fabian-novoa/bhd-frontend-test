import { Component, inject, OnInit, signal, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonSpinner, IonInput, IonButton, IonItem, IonText, IonMenuButton, IonToggle } from '@ionic/angular/standalone';
import { AuthFacade } from '@presentation/facades';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    IonContent,
    IonSpinner,
    IonInput,
    IonButton,
    IonItem,
    IonText,
    IonMenuButton,
    IonToggle
  ]
})
export class LoginPage implements OnInit, AfterViewInit {
  private fb = inject(FormBuilder);
  private authFacade = inject(AuthFacade);
  private router = inject(Router);

  loginForm!: FormGroup;
  rememberMe = signal(false);

  readonly loading = this.authFacade.loading;
  readonly error = this.authFacade.error;

  ngOnInit(): void {
    this.initializeForm();
    this.loadRememberedUser();
  }

  ngAfterViewInit(): void {
    feather.replace();
  }

  private initializeForm(): void {
    this.loginForm = this.fb.group({
      userId: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  private loadRememberedUser(): void {
    const savedUserId = localStorage.getItem('bhd_remembered_user');
    if (savedUserId) {
      this.loginForm.patchValue({ userId: savedUserId });
      this.rememberMe.set(true);
    }
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.handleRememberMe();
    this.authFacade.login(this.loginForm.value);
  }

  private handleRememberMe(): void {
    const userId = this.loginForm.value.userId;
    
    if (this.rememberMe()) {
      localStorage.setItem('bhd_remembered_user', userId);
    } else {
      localStorage.removeItem('bhd_remembered_user');
    }
  }

  onRememberMeChange(event: any): void {
    this.rememberMe.set(event.detail.checked);
  }

  dismissError(): void {
    this.authFacade.clearError();
  }

  get userIdControl() {
    return this.loginForm.get('userId');
  }

  get passwordControl() {
    return this.loginForm.get('password');
  }

  get isFormInvalid(): boolean {
    return this.loginForm.invalid;
  }
}
