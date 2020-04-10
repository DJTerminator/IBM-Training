import { Component } from '@angular/core';

@Component({
  selector: 'my-text',
  template: `
    <h2>Today's msg is : {{txt}}</h2>
  `
})
export class MsgComponent{
     txt: string = "Bella ciao";
}
