import { Component, NgZone, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;
  processing = false;
  errorMsg = null;
  remember: boolean;
  isSubmitted: boolean = false;

  constructor(

    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,

    private toastr: ToastrService,
  ) {

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      // email: ["", [
      //   Validators.required,
      //  Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
      ]),
      password: new FormControl('', [Validators.required]),
    });
    if (sessionStorage.getItem("remember")) {
      let data = JSON.parse(sessionStorage.getItem("remember"));
      this.remember = true;
      this.loginForm.controls['email'].patchValue(data.email);
      this.loginForm.controls['password'].patchValue(data.password);
    }
    // localStorage.clear();
  }

  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.isSubmitted = true;
    this.processing = true;
    let data = this.loginForm.value;
    this.http.post('https://dev.webdevelopmentsolution.net:9045/api/v1/admin/login', data).subscribe(response => {

      if (response['statusCode'] == 200) {
        localStorage.setItem('userData', JSON.stringify(response['data']));
        localStorage.setItem("accessToken", response['data'].token);

        this.router.navigate(["/answer"]);
      }
    });

  if (this.remember) {
    let body = this.loginForm.value;
    sessionStorage.setItem(
      "remember",
      JSON.stringify(body)
    );
  } else {
    sessionStorage.clear();
  }
}
valueChange(event){
  this.remember = event.checked;
}
}
