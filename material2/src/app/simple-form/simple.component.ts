import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent {

  onUpdate(id, text) {
    this.mail.update(id, text);
  }

  constructor(@Inject('mail') private mail) { }
}
