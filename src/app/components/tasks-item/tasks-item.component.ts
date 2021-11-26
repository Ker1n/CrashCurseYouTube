import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Task} from '../../Interfaces/Task';
import {faTimes} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() task: Task
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter<Task>()
  faTimes = faTimes;

  constructor() {
  }

  ngOnInit(): void {
  }

  onDelete(task: Task) {
    this.onDeleteTask.emit(task)
  }
}
