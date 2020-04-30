import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();

  private returnUrl = '/';

  constructor(
              private router: Router,
              ) {

    this.router.events.subscribe((event) => {


    });

  }

  public onProfile() {

    this.router.navigate(['users/profile']);
  }


  ngOnInit(){
    
  }
}
