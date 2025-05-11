import { Component, ElementRef, inject, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { AccountComponent } from '../account/account.component';
import { NgFor } from '@angular/common';
import { NavigatorService } from '../../services/navigator.service';
import { GetIconComponent } from '../get-icon/get-icon.component';
import { GsapService } from '../../services/gsap.service';

@Component({
  selector: 'app-sidebar',
  imports: [
    AccountComponent,
    GetIconComponent,
    NgFor
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements AfterViewInit {
  parentContainer = inject(ViewContainerRef).element;
  navigator = inject(NavigatorService);
  gsap = inject(GsapService);
  sidebar = SidebarComponent;
  sections = this.navigator.sections;
  static tl: gsap.core.Timeline;
  public static showSidebar = true;

  ngAfterViewInit() {
    if (typeof localStorage !== 'undefined') {
      SidebarComponent.tl = this.gsap.instance.timeline();
      SidebarComponent.tl.pause();
      SidebarComponent.tl.to(this.parentContainer.nativeElement.children[0], {
        width: this.parentContainer.nativeElement.offsetWidth + 'px',
        duration: 0,
      }).to(this.parentContainer.nativeElement, {
        width: 0,
        duration: .5,
        x: '-50%',
        opacity: 0,
        ease: 'circ.out',
      }).to(this.parentContainer.nativeElement.parentElement, {
        gap: '0'
      }).to(this.parentContainer.nativeElement, {
        display: 'none',
        duration: 0,
        delay: .5
      });
      localStorage.getItem('showSidebar') === 'false' ? this.sidebar.toggleSidebar() : null;
    }
  }

  static toggleSidebar() {
    SidebarComponent.showSidebar = !SidebarComponent.showSidebar;
    localStorage.setItem('showSidebar', SidebarComponent.showSidebar.toString());
    if (this.showSidebar) {
      SidebarComponent.tl.reverse();
    } else {
      SidebarComponent.tl.play();
    }
  }
}
