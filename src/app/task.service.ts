import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  constructor() { }
 
  getTasks() {
    return [
      { title: 'Create Userflow Social Application Design', status: 'Approved' },
      { title: 'Homepage Design For Slimmuch Product', status: 'In Progress' },
      { title: 'Interactive prototype design - Web design', status: 'In Progress' },
      { title: 'Create Application Design for Topbuzz', status: 'In Review' },
      { title: 'Make a wireframe for Courier Delivery App', status: 'Waiting' }
    ];
  }

  getUpcomingTasks() {
    return [
      { title: 'Create Marketplaces Dashboard Design', status: 'Waiting' },
      { title: 'Make a wireframe for Courier Delivery App', status: 'Waiting' }
    ];
  }

  getMeetings() {
    return [
      {
        time: '8:05 AM - 9:20 AM',
        title: 'Meetings Nazmul Hassan',
        color: 'yellow ',
        participants: ['assets/th.jpeg', 'assets/th2.jpeg','assets/th.jpeg','assets/per1.jpeg','assets/per2.jpeg',]
      },
      {
        time: '10:05 AM - 12:20 PM',
        title: 'Product Development Team',
        color: 'blue',
        participants: ['assets/per1.jpeg', 'assets/per2.jpeg','assets/th.jpeg']
      },
      {
        time: '3:00 PM - 4:20 PM',
        title: 'Product Planning',
        color: 'red',
        participants: ['assets/th.jpeg', 'assets/th2.jpeg','assets/th.jpeg','assets/per1.jpeg','assets/per2.jpeg']
      },
      {
        time: '04:30 PM - 05:30 PM',
        title: 'Social product Review',
        color: 'light green',
        participants: ['assets/per1.jpeg', 'assets/per2.jpeg','assets/th.jpeg']
      },
    ];
  }
}
