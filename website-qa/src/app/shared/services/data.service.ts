import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public attendenceList = [
    {
      "date": "12 Mar'19",
      "swipeIn": "9:00AM",
      "swipeOut": "6:00PM",
      "effetiveTime": "9:00",
      "status": "completed",
      "day": "Monday"
    },
    {
      "date": "13 Mar'19",
      "swipeIn": "9:00AM",
      "swipeOut": "6:30PM",
      "effetiveTime": "9:30",
      "status": "applyLeave",
      "day": "Tuesday"
    },
    {
      "date": "14 Mar'19",
      "swipeIn": "9:10AM",
      "swipeOut": "6:00PM",
      "effetiveTime": "8:50",
      "status": "applyLeave",
      "day": "Wednesday"
    },
    {
      "date": "15 Mar'19",
      "swipeIn": "9:20AM",
      "swipeOut": "6:00PM",
      "effetiveTime": "8:40",
      "status": "today",
      "day": "Thursday"
    },
    {
      "date": "16 Mar'19",
      "swipeIn": "9:00AM",
      "swipeOut": "6:00PM",
      "effetiveTime": "9:00",
      "status": "not completed",
      "day": "Friday"
    },
    {
      "date": "17 Mar'19",
      "swipeIn": "9:00AM",
      "swipeOut": "6:00PM",
      "effetiveTime": "9:00",
      "status": "weekoff",
      "day": "Saturday"
    },
    {
      "date": "18 Mar'19",
      "swipeIn": "9:00AM",
      "swipeOut": "6:00PM",
      "effetiveTime": "9:00",
      "status": "weekoff",
      "day": "Sunday"
    }
  ];
  public effortsList = [
    {
      "projectName": "projectName1",
      "date": "18 Mar'19'",
      "day": "monday",
      "efforts": "3:00"
    },
    {
      "projectName": "projectName1",
      "date": "18 Mar'19'",
      "day": "monday",
      "efforts": "3:00"
    },
    {
      "projectName": "projectName1",
      "date": "18 Mar'19'",
      "day": "monday",
      "efforts": "3:00"
    },
    {
      "projectName": "projectName1",
      "date": "18 Mar'19'",
      "day": "monday",
      "efforts": "3:00"
    }
  ]
  public effortsFilling = [
    {
      "proj_name": "Project1",
      "efforsts": "4:00",
      "day": "monday",
      "status":"completed"
    },
    {
      "proj_name": "Project2",
      "efforsts": "4:00",
      "day": "monday",
      "status":"pending"
    },
    {
      "proj_name": "Project3",
      "efforsts": "4:00",
      "day": "monday",
    },
    {
      "proj_name": "Project4",
      "efforsts": "4:00",
      "day": "monday",
    },
    // "project1": [{
    //   "proj1":"Proj 1",
    //   "days":"mon"
    // }


    // ],
    // "proj2":"Proj 2",
    // "proj3":"Proj 3",
    // "proj4":"Proj 4",
    // "ood":"OOD",
    // "ood1":"OOD 1",
    // "ood2":"OOD 2",
    // "tot_hrs":"Total effective/Attendance hrs",


  ];
  public leaveDataList = [{
    'date':'04 May Fri, (1Day)',
    'leave_type':'Annual leave',
    'content':'requested on 17 Jan 2019 some more text here',
    'modify':'MODIFY LEAVE',
    'cancel':'CANCEL LEAVE',
    'status':'modify'
  },
  {
    'date':'04 May Fri, (1Day)',
    'leave_type':'Annual leave',
    'content':'requested on 17 Jan 2019 some more text here',
    'reversal':'LEAVE REVERSAL',
    'status':'reversal'
    
  },{
    'date':'04 May Fri, (1Day)',
    'leave_type':'Annual leave',
    'content':'requested on 17 Jan 2019 some more text here',
    'modify':'MODIFY LEAVE',
    'cancel':'CANCEL LEAVE',
    'status':'modify'
  }];
  public fixedData=[
    {
      "leavetype":"Annual Leave",
      "leaverequestdate":"01/01/2019",
      "fromdate":"02/02/2019",
      "todate":"03/03/2019",
      "status":"Auto-approved",
      "reason":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "leavetype":"Annual Leave",
      "leaverequestdate":"01/01/2019",
      "fromdate":"02/02/2019",
      "todate":"03/03/2019",
      "status":"Auto-approved",
      "reason":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "leavetype":"Annual Leave",
      "leaverequestdate":"01/01/2019",
      "fromdate":"02/02/2019",
      "todate":"03/03/2019",
      "status":"Auto-approved",
      "reason":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
  ];
  public progressBarList = [{
    "leaveType" : 'Annual leaves',
    "used_count":'9',
    "total_count":'21',
    "daysleft":'12 days available',
    "status":'annual'
  },
  {
    "leaveType":'Sick leaves',
    "count":'9/21',
    "daysleft":'12 days available',
    "status":'sick'
  },{
    "leaveType":'Compensatory off leaves',
    "count":'9/21',
    "daysleft":'12 days available',
    "status":'comp'

  }]
  leaveDataObject:any;
  fixed:any;
  editable: any;
  modifyLeave:boolean;
  selectedval:any;
  editIndex:any;
  /*gopinath data starts */
  effortsOutliersList=[
    {
      'employeeName':'',
      'employeePhoto':'',
      'lessLoggingCount':'',
      'moreLoggingCount':'',
    },
    {
      'employeeName':'',
      'employeePhoto':'',
      'lessLoggingCount':'',
      'moreLoggingCount':'',
    },
    {
      'employeeName':'',
      'employeePhoto':'',
      'lessLoggingCount':'',
      'moreLoggingCount':'',
    },
    {
      'employeeName':'',
      'employeePhoto':'',
      'lessLoggingCount':'',
      'moreLoggingCount':'',
    },
    {
      'employeeName':'',
      'employeePhoto':'',
      'lessLoggingCount':'',
      'moreLoggingCount':'',
    },
    {
      'employeeName':'',
      'employeePhoto':'',
      'lessLoggingCount':'',
      'moreLoggingCount':'',
    },
    {
      'employeeName':'',
      'employeePhoto':'',
      'lessLoggingCount':'',
      'moreLoggingCount':'',
    },
    {
      'employeeName':'',
      'employeePhoto':'',
      'lessLoggingCount':'',
      'moreLoggingCount':'',
    },
    {
      'employeeName':'',
      'employeePhoto':'',
      'lessLoggingCount':'',
      'moreLoggingCount':'',
    },
    {
      'employeeName':'',
      'employeePhoto':'',
      'lessLoggingCount':'',
      'moreLoggingCount':'',
    }
  ];
  leaveOutliersList=[
    {
      'employeeName':'',
      'employeePhoto':'',
      'annualLeavesCount':'',
      'sickLeavesCount':'',
    },
    {
      'employeeName':'',
      'employeePhoto':'',
      'annualLeavesCount':'',
      'sickLeavesCount':'',
    },
    {
      'employeeName':'',
      'employeePhoto':'',
      'annualLeavesCount':'',
      'sickLeavesCount':'',
    },
    {
      'employeeName':'',
      'employeePhoto':'',
      'annualLeavesCount':'',
      'sickLeavesCount':'',
    },
    {
      'employeeName':'',
      'employeePhoto':'',
      'annualLeavesCount':'',
      'sickLeavesCount':'',
    },
    {
      'employeeName':'',
      'employeePhoto':'',
      'annualLeavesCount':'',
      'sickLeavesCount':'',
    }
  ];
  todayLeaveList = [
    {
      'employeeName':'',
      'employeePhoto':'',
      'employeeDesignation':'',
    },
    {
      'employeeName':'',
      'employeePhoto':'',
      'employeeDesignation':'',
    },
    {
      'employeeName':'',
      'employeePhoto':'',
      'employeeDesignation':'',
    },
    {
      'employeeName':'',
      'employeePhoto':'',
      'employeeDesignation':'',
    },
    {
      'employeeName':'',
      'employeePhoto':'',
      'employeeDesignation':'',
    }
  ];
  /*gopinath Data ends */
  constructor() { }
}
