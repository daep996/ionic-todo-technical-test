import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "tasks",
    pathMatch: "full",
  },
  {
    path: 'tasks',
    loadComponent: () => import('./tasks/tasks.page').then( m => m.TasksPage)
  },
  {
    path: 'tasks/add',
    loadComponent: () => import('./tasks/task-edit/task-edit.page').then( m => m.TaskstaskEditPage)
  },
  {
    path: 'tasks/edit/:id',
    loadComponent: () => import('./tasks/task-edit/task-edit.page').then( m => m.TaskstaskEditPage)
  },
  {
    path: 'categories',
    loadComponent: () => import('./categories/categories.page').then( m => m.CategoriesPage)
  },
  {
    path: 'categories/add',
    loadComponent: () => import('./categories/category-edit/category-edit.page').then( m => m.CategoryEditPage)
  },
  {
    path: 'categories/edit/:id',
    loadComponent: () => import('./categories/category-edit/category-edit.page').then( m => m.CategoryEditPage)
  },
]
