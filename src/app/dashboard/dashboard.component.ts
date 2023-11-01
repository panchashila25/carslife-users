import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CardsComponent } from './cards/cards.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent  implements OnInit {
   component=CardsComponent

  constructor(private router:Router) { }

  ngOnInit() {}

  

}
