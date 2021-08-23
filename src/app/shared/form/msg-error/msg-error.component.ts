import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-msg-error',
  templateUrl: './msg-error.component.html',
  styleUrls: ['./msg-error.component.scss']
})
export class MsgErrorComponent implements OnInit {

  @Input() message:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
