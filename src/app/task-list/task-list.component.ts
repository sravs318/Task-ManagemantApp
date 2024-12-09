import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  headings = [
    { name: 'All', count: 10 },
    { name: 'Important', count: 5 },
    { name: 'Notes', count: 3 },
    { name: 'Links', count: 2 }
  ];
  selectedHeading = this.headings[0];

  todayTasks = [
    { name: 'Create Userflow Social Application Design', status: 'Approved', completed: true },
    { name: 'Homepage Design For Slimmuch Product', status: 'In Progress', completed: true },
    { name: 'Interactive prototype design - Web design', status: 'In Progress', completed: true },
    { name: 'Create Application Design for Topbuzz', status: 'In Review', completed: true },
    { name: 'Make a wireframe for Courier Delivery App', status: 'In Progress', completed: false },
    { name: 'Create Marketplaces Dashboard Design', status: 'Waiting', completed: false }
  ];

  upcomingTasks = [
    { name: 'Make a wireframe for Courier Delivery App', status: 'Waiting', completed: false },
    { name: 'Create Marketplaces Dashboard Design', status: 'Waiting', completed: false },
    { name: 'Make a wireframe for Courier Delivery App', status: 'Waiting', completed: false },
    { name: 'Create Marketplaces Dashboard Design', status: 'Waiting', completed: false }
  ];

  onTaskStatusChange(task: any) {
    if (task.completed) {
      task.status = 'Approved'; // Mark the task as approved when checked
    } else {
      task.status = 'In Progress'; // Reset to another status if unchecked
    }
  }

  onUpcomingTaskStatusChange(task: any) {
    if (task.completed) {
      task.status = 'Approved'; // Mark as Approved when checked
    } else {
      task.status = 'Waiting'; // Reset to Waiting if unchecked
    }
  }

  selectHeading(heading: any) {
    this.selectedHeading = heading; // Mark the selected heading as active
  }
}
