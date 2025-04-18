import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

import { throttleTime} from 'rxjs/operators';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public fixedHeader: boolean = false;
  private windowScroll$: Subscription = Subscription.EMPTY;
  constructor() {}
  
  ngOnInit() {
    this.windowScroll$ = fromEvent(window, 'scroll')
      .pipe(throttleTime(30))
      .subscribe(() => this.onScroll());
  }


  ngOnDestroy() {
    this.windowScroll$.unsubscribe();
  }
  
  onScroll(){
    //code to fix header on scroll
    if (document.documentElement.scrollTop >= 100 || document.body.scrollTop >= 100) {
      this.fixedHeader = true;
    } else {
      this.fixedHeader = false;
    }
  }
}
