import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [CommonModule],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public sidebarOpen: boolean = false;
  public currentSection = 'home';
  
  constructor(
  ) {}

  fullPageScroll(i:any) {
    if(this.sidebarOpen)
      this.sidebarOpen = false;
  }

  toggleMenu(){
    this.sidebarOpen = !this.sidebarOpen;
  }

  onClickedOutside(e: Event) {
    if(this.sidebarOpen)
      this.sidebarOpen = false;
  }

}
