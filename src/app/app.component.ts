import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-form';

  myform :string= JSON.stringify([
    { label: 'Full name', type: "text", placeholder: 'John Do' },
    { label: 'Age', type: 'text',options:{ length: 5, valueType: 'numeric' } },
    { label: 'Gender', type: 'combobox', possibleValues:['Male','Female']  },
    { label: 'Radio Field', type: 'radio', possibleValues:['Option1','Option2']  },
    { label: 'Address', type: 'address' }
  ]);

  consoleLog(changes:any)
  {
    console.log(changes);
  }
}


