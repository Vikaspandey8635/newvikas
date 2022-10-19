import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

interface Student {
  id: Number;
  name: String;
  email: String;
  gender: String;
}
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {



@Output() itemAdded: EventEmitter<string> = new EventEmitter<string>();

  item:string = '';
  loginForm: FormGroup;
  formm: any;
  ;

  constructor(
    private fb:FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({

      name: new FormControl("", [
        Validators.required,
      ]),
      tax: new FormControl('', [Validators.required]),
      order: new FormControl('', [Validators.required]),
    });


  }

onSubmit(){
  console.log(this.loginForm,'login');
  this.formm = this.loginForm.value;
  console.log(this.formm);

}
add(){
  this.itemAdded.emit(this.item);
}
}
