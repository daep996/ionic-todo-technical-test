import { Category } from '../../interfaces/categories'
import { Component, Input } from '@angular/core'
import { RouterLink } from '@angular/router'
import {IonicModule} from '@ionic/angular'
import { pencil, createOutline, trashOutline, trashBin } from 'ionicons/icons'
import { addIcons } from 'ionicons'
import { CategoriesService } from 'src/app/services/categories.service'

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
  imports: [RouterLink, IonicModule]
})
export class CategoryItemComponent {

  @Input() category!: Category

  constructor(private categoryService: CategoriesService) {
    addIcons({pencil, createOutline, trashOutline, trashBin})
  }

  deleteCategory(id: string) {
    if (this.categoryService.deleteCategory(id)) {
      console.log(`Deleted ${id}`)
    } else {
      console.error(`NOT Deleted ${id}`)
    }
  }

}
