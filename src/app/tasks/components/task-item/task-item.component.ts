import { Component, Input } from '@angular/core'
import { Category } from 'src/app/categories/interfaces/categories'
import { Task } from '../../interfaces/task'


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {

  @Input() task!: Task
  @Input() category?: Category

  constructor() {}

  toggleComplete() {
    // UI-only implementation
    this.task.completed = !this.task.completed
  }

}
