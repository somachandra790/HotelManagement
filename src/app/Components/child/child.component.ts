import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  renderData : boolean = false;
  @Output() renderEvent = new EventEmitter<boolean>;

  sendData(){
    this.renderData = true;
    this.renderEvent.emit(this.renderData);
  }

}
