import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss'],
})
export class ConsoleComponent implements OnInit {
  private _unsubscribeAll = new Subject();
  socket: any;
  orderStatusList: {
    name: string;
    value: string;
    count: 0;
    transactions: any;
  }[];
  hasActiveOrders;

  pages = [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: "<i class='fas fa-home' aria-hidden='true'></i>",
    },
    {
      name: 'Users',
      url: '/user',
      icon: "<i class='fa fa-user' aria-hidden='true'></i>",
      key: 0,
    },
    {
      name: 'Content',
      url: '/content',
      icon: "<i class='fas fa-abacus' aria-hidden='true'></i>",
      key: 1,
    },
    {
      name: 'Groups',
      url: '/groups',
      icon: "<i class='fa fa-users' aria-hidden='true'></i>",
      key: 2,
    },
    // {
    //   name: 'Payments',
    //   url: '/Payments',
    //   icon: "<i class='fa fa-credit-card' aria-hidden='true'></i>",
    //   key: 3,
    // },
    {
      name: 'subadmin',
      url: '/subadmin',
      icon: "<i class='fa fa-universal-access' aria-hidden='true'></i>",
      key: 7,
    },
    {
      name: 'CMS',
      url: '/cms',
      icon: "<i <i class='fa fa-question' aria-hidden='true'></i>",
      key: 4,
    },
    {
      name: 'Reports',
      url: '/reports',
      icon: "<i class='fa fa-file' aria-hidden='true'></i>",
      key: 8,
    },
    // {
    //   name: 'Customer Support',
    //   url: '/customer-support',
    //   icon: "<i class='fad fa-user-headset'></i>",
    //   key: 5,
    // },
  ];
  adminData: any;
  userRole: string;
  roleArray: any = [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: "<i class='fas fa-home' aria-hidden='true'></i>",
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {
    let data = JSON.parse(localStorage.userData);
    if (data.role != 'subAdmin') {


      this.roleArray = [...this.pages];
    } else {
      for (let index = 0; index < data.permission.length; index++) {
        index
        for (let x = 0; x < this.pages.length; x++) {
          if (data.permission[index]['key'] == this.pages[x]['key']) {
            if (data.permission[index]['isView']) {
              this.roleArray.push(this.pages[x]);
            }
          }
        }
      }
      console.log(this.roleArray, 'rolearray');
    }
  }

  logOut() {
    localStorage.clear();
    this.router.navigateByUrl('/auth');
  }
}
