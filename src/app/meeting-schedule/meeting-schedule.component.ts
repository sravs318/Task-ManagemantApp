import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-meeting-schedule',
    imports: [CommonModule],
    templateUrl: './meeting-schedule.component.html',
    styleUrl: './meeting-schedule.component.css'
})
export class MeetingScheduleComponent {
  meetings = this.taskService.getMeetings();

  constructor(private taskService: TaskService) {}

}
