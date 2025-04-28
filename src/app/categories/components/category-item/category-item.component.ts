import { Category } from '../../interfaces/categories'
import { Component, Input } from '@angular/core'
import { RouterLink } from '@angular/router'
import {IonicModule} from '@ionic/angular'
import { pencil, createOutline, trashOutline } from 'ionicons/icons'
import { addIcons } from 'ionicons'

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
  imports: [RouterLink, IonicModule]
})
export class CategoryItemComponent {

  @Input() category!: Category

  constructor() {
    addIcons({pencil, createOutline, trashOutline})
  }

}
