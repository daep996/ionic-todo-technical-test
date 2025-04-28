import { Category } from '../categories/interfaces/categories';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Task } from './interfaces/task';
import { addSharp, pencil, trashBin } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { TasksService } from '../services/tasks.service';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink],
})
export class TasksPage implements OnInit {
  tasks: Task[] = []
  categories: Category[] = []
  selectedCategory: string | null = null
  isToastOpen = false

  constructor(
    private tasksService: TasksService,
    private categoryService: CategoriesService
  ) {
    addIcons({ addSharp, pencil, trashBin });
  }

  ngOnInit() {
    this.tasks = this.tasksService.getTasks();
    this.categories = this.categoryService.getCategories();
  }

  deleteTask(id: string) {
    if (this.tasksService.deleteTask(id)) {
      this.setOpen(true)
      console.log(`Deleted ${id}`)
    } else {
      console.error(`NOT Deleted ${id}`)
      this.setOpen(false)
    }
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  onFilterChange(categoryId: string | null) {
    this.selectedCategory = categoryId;
  }

  getFilteredTasks() {
    if (!this.selectedCategory) {
      return this.tasks;
    }
    return this.tasks.filter(
      (task) => task.categoryId === this.selectedCategory
    );
  }

  getCategoryById(id: string): Category | undefined {
    return this.categories.find((category) => category.id === id);
  }

}
