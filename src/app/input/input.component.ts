import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input()
  parentdata:any = "";
  title = 'assign-input-output-deco';
  formdata:any;
  data:any;
  name:string="";
  email:string="";
  mobileno:string="";
  gender:string="";
  topic:string="";
  ngOnInit(): void {
    this.formdata = new FormGroup(
      {
         name: new FormControl("", Validators.compose([Validators.required])),
         email:new FormControl("", Validators.compose([Validators.required, Validators.email ])),
         mobileno: new FormControl("",Validators.compose([Validators.required])),
         gender:new FormControl(),
         topic:new FormControl()
      }
    );

  }
  parentFunction()
  {

 this.data={name:this.name,email:this.email,mobileno:this.mobileno,gender:this.gender,topic:this.topic}
 console.log(this.data);

}

}
