import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <input 
        #myInput 
        type="text" 
        [(ngModel)]="message" 
        [ngClass]="{mousedown: isMousedown}"
        (mousedown)="isMousedown = true"
        (mouseup)="isMousedown = false"
        (mouseleave)="isMousedown = false"
      />
      <button (click)="update.emit({text:message})">Click me!</button>
    </div>
  `,
  styles: [`
  :host {
    display: flex;
    flex-direction: column;
  }
  .mousedown {
    border: 2px solid green;
  }
  input:focus {
    font-weight: bold;
  }
  `]
})
export class SimpleFormComponent implements OnInit {

  isMousedown;

  @Input() message;

  @Output() update = new EventEmitter();

  ngOnInit() {
  }
}
