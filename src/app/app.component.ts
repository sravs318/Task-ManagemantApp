import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TaskListComponent } from './task-list/task-list.component';
import { MeetingScheduleComponent } from './meeting-schedule/meeting-schedule.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, SidebarComponent, TaskListComponent, MeetingScheduleComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taskManagementApp';
}
