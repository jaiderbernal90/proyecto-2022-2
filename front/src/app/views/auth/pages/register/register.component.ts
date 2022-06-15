import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  form: FormGroup;
  loading: boolean = false;
  msg: string;
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8)]],
      responsible_home: [false],
    })
    this.msg = '';
  }

  isInvalid(name) {
    return this.form.controls[name].invalid && this.form.controls[name].touched;
  }

  register() {
    this.loading = true;
    this.authService.register(this.form.value)
      .pipe((finalize(() => this.loading = false)))
      .subscribe(res => {
        console.log(res);
        
        if (res.success) {
          this.msg = res.msg;
          // this.authService.setterSettings(res);
          setTimeout(() => {
            this.router.navigate(['login']);
          }, 2500);
        }
      })

  }

}
