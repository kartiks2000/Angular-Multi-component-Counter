import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output('inc') in = new EventEmitter();
  @Output('dec') de = new EventEmitter();

  increq(){
    this.in.emit();
  }

  decreq(){
    this.de.emit();
  }

}
