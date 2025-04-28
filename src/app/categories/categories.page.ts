import { CategoryItemComponent } from './components/category-item/category-item.component'
import { CategoriesService } from '../services/categories.service'
import { Category } from './interfaces/categories'
import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import {IonicModule} from '@ionic/angular'
import { addSharp } from 'ionicons/icons'
import { addIcons } from 'ionicons'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, CategoryItemComponent, RouterLink]
})
export class CategoriesPage implements OnInit {

  categories: Category[] = []

  constructor(private categoryService: CategoriesService) {
    addIcons({addSharp})
  }

  ngOnInit() {
    this.categories = this.categoryService.getCategories()
  }

}
