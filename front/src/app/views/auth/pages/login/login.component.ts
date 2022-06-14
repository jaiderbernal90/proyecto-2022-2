import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { finalize } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
    this.checkSession();
  }

  isInvalid(name) {
    return this.form.controls[name].invalid && this.form.controls[name].touched;
  }

  login() {
    this.loading = true;
    this.authService.login(this.form.value)
      .pipe((finalize(() => this.loading = false)))
      .subscribe(res => {
        if (res.success) {
          this.authService.setterSettings(res);
          this.router.navigate(['']);
        }
      })

  }

  checkSession() {
    this.authService.checkSession(true).then(() => {
      this.router.navigate(['']);
    }).catch(() => console.log)
  }

}
