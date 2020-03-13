import { Component, OnInit } from '@angular/core';
import { NombreDeButtonService } from 'src/app/services/nombre-de-button.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor(private nameService: NombreDeButtonService) { }

  ngOnInit(): void {
  }

  buscarPersonas(category) {
    this.nameService.updateCategory(category);
  }
}
