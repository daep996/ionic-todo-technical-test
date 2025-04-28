import { checkmarkCircle, pricetag } from 'ionicons/icons';
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router'
import {IonicModule} from '@ionic/angular'
import { Component } from '@angular/core'
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonicModule, RouterLink, CommonModule],
})
export class AppComponent {
  public appPages = [
    { title: "Tasks", url: "/tasks", icon: "checkmark-circle" },
    { title: "Categories", url: "/categories", icon: "pricetags" },
  ]

  constructor() {
    addIcons({
      'checkmark-circle': checkmarkCircle,
      'pricetags': pricetag
    })
  }
}
