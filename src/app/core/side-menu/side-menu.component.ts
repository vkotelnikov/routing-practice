import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from '../_model/menu-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  sideMenu: Array<MenuItem>;

  @Output() selectedItem = new EventEmitter<MenuItem>();

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.sideMenu = [
      { link: "/gallery", caption: "Gallery" },
      { link: "/settings", caption: "Settings" },
      { link: "/about", caption: "About" },
    ];
    this.selectedItem.emit(this.sideMenu.find(item => item.link == this.router.url));
  }

  selectedItemChanged(selectedLink: string) {
    let newSelection = this.sideMenu.find(item => item.link == selectedLink);
    this.selectedItem.emit( newSelection );
    this.router.navigate([newSelection.link]);
  }

}
