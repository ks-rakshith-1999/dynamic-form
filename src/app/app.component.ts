import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Dynamic Angular Form';
  _form = new FormGroup({});
  model = { email: '' };

  fields: FormlyFieldConfig[] = [{
    key: 'email',
    type: 'input',
    props: {
      label: 'Email address',
      placeholder: 'Enter email',
      required: true
    }
  }];

  onSubmit(model: any) {
    console.log(model);
  }

  form: FormGroup = new FormGroup({});
  person: any = {
    firstName: "Coder",
    lastName: "Byte",
    age: 25,
    twitter: '@coderbyte'
  };

  personProps: any[] = [];

  ngOnInit(): void {
    const formDataObj: any = {};
    for (const prop of Object.keys(this.person)) {
      formDataObj[prop] = new FormControl(this.person[prop]);
      this.personProps.push(prop);
    }
    this.form = new FormGroup(formDataObj);
  }
}


