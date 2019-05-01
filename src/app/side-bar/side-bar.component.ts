import {Component, Injectable, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})


export class SideBarComponent {
  constructor(
    private router: Router
  ) {}
  navigListTasks() {
    this.router.navigate(['/task/list']);
  }
  navigAddTasks() {
    this.router.navigate(['/task/add']);
  }
}
