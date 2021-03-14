import { Component } from '@angular/core';
import { Activity, ActivitiesTypeEnum, ActivityDirectionEnum } from '../activity-record/activity-record.component';

@Component({
  selector: 'app-sliding-popup',
  templateUrl: './sliding-popup.component.html',
  styleUrls: ['./sliding-popup.component.scss']
})
export class SlidingPopupComponent{

  public popupVisible = false;

  activities: Array<Activity> = [
    {
      type: ActivitiesTypeEnum.PHONE,
      title: 'Customer needed to change shipping add...',
      from: 'Peter Simmons',
      to: null,
      emailTitle: null,
      activityDirection: ActivityDirectionEnum.INCOMING,
      currentUser: 'Huli Curry',
      date: '9/31/2020 - 3:37 PM'
    },
    {
      type: ActivitiesTypeEnum.PHONE,
      title: 'Credit card info update',
      from: 'Peter Simmons',
      to: null,
      emailTitle: null,
      activityDirection: ActivityDirectionEnum.INCOMING,
      currentUser: 'Huli Curry',
      date: '9/25/2020 - 9:16 AM'
    },
    {
      type: ActivitiesTypeEnum.MAIL,
      title: 'Fall 2020 Newsletter',
      from: null,
      to: 'Peter Simmons',
      emailTitle: 'Our summer sale starts soon! Get a hold of the ...',
      activityDirection: ActivityDirectionEnum.OUTGOING,
      currentUser: 'Huli Curry',
      date: '9/6/2020 - 9:05 PM'
    },
  ]

}
