import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-papa',
  templateUrl: './papa.component.html',
  styleUrls: ['./papa.component.css']
})

export class PapaComponent implements OnInit {
  counter: number;
  constructor() {
    this.counter = 0;
  }

  sumar() {
    this.counter = this.counter + 1;
  }

  restar() {
    this.counter = this.counter - 1;
  }

  ngOnInit() {
  }

}
