import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NombreDeButtonService {
  private categoryValue = new BehaviorSubject(true);
  // actualCategory = this.categoryValue.asObservable();

  array = [
    { name: 'karen', vegetariano: true },
    { name: 'yasmit', vegetariano: false },
    { name: 'dani', vegetariano: false },
    { name: 'fares' ,vegetariano: true },
  ]

  constructor() { }

  getPersonasPorCategoria(category) {
    this.array.filter((objPersona) => {
      objPersona.vegetariano === category
    });
  }

  updateCategory(category) {
    this.categoryValue.next(category);
    console.log(this.categoryValue);
  }
}
