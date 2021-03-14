import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-record',
  templateUrl: './activity-record.component.html',
  styleUrls: ['./activity-record.component.scss']
})
export class ActivityRecordComponent implements OnInit{
  @Input() record!: Activity
  public activityType: typeof ActivitiesTypeEnum = ActivitiesTypeEnum
  public activityDirection: typeof ActivityDirectionEnum = ActivityDirectionEnum
  
  ngOnInit() {
    console.log(this.record);
  }
}

export interface Activity {
  type: ActivitiesTypeEnum;
  title: string;
  from: string | null;
  to: string | null;
  emailTitle: string | null;
  activityDirection: ActivityDirectionEnum;
  currentUser: string; 
  date: string;
}

export enum ActivitiesTypeEnum {
  MAIL = 'mail',
  PHONE = 'phone'
}

export enum ActivityDirectionEnum {
  INCOMING = 'incoming',
  OUTGOING = 'outgoing'
}


