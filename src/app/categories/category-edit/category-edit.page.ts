import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { CategoriesService } from 'src/app/services/categories.service'
import { ActivatedRoute, Router } from '@angular/router'
import { Category } from '../interfaces/categories'
import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import {IonicModule} from '@ionic/angular'

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.page.html',
  styleUrls: ['./category-edit.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class CategoryEditPage implements OnInit {

  categoryForm!: FormGroup
  isEditMode = false
  categoryId: string | null = null
  category!: Category
  colors = [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#cddc39",
    "#ffeb3b",
    "#ffc107",
    "#ff9800",
    "#ff5722",
  ]

  constructor(
    private categoryService: CategoriesService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.categoryId = this.route.snapshot.paramMap.get("id")
    this.isEditMode = !!this.categoryId

    this.initForm()

    if (this.isEditMode && this.categoryId) {
      this.category = this.categoryService.getCategory(this.categoryId)
      this.categoryForm.patchValue({
        id: this.category.id,
        name: this.category.name,
        color: this.category.color,
      })
    }
  }

  initForm() {
    this.categoryForm = this.formBuilder.group({
      id: [""],
      name: ["", Validators.required],
      color: [this.colors[0], Validators.required],
    })
  }

  onSubmit() {
    if (this.isEditMode) {
      this.categoryService.editCategory(this.categoryForm.value)
    } else if (!this.isEditMode) {
      this.categoryService.addCategory(this.categoryForm.value)
    } else {
      console.log("ERROR UPDATE")
    }
    this.router.navigate(["/categories"])
  }

}
