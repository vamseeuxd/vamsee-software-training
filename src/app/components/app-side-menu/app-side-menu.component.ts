import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './app-side-menu.component.html',
  styleUrls: ['./app-side-menu.component.css']
})
export class AppSideMenuComponent implements OnInit {

  constructor() {
  }

  @Input() isRoot = true;
  @Input() menuDataProvider = [];
  @Input() activeMenu = null;
  @Output() activeMenuChange: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
  }

  toggleMenu(menu, $event: MouseEvent) {
    $event.stopImmediatePropagation();
    if (menu.subMenu && menu.subMenu.length) {
      menu.open = !menu.open;
    } else {
      this.activeMenu = menu.id;
      this.activeMenuChange.emit(this.activeMenu);
    }
  }

  isSelected(menu): boolean {
    if (menu.id == this.activeMenu) {
      return true;
    }
    return false;
  }

  isChildSelected(menuList, menuId): boolean {
    let isAnyChildSelected = false;
    if (menuList) {
      for (let i = 0; i < menuList.length; i++) {
        if (menuList[i].id == menuId) {
          isAnyChildSelected = true;
          break;
        }
        if (menuList[i].subMenu) {
          if (this.isChildSelected(menuList[i].subMenu, menuId)) {
            isAnyChildSelected = true;
            break;
          }
        }
      }
    }
    return isAnyChildSelected;
  }

  isMenu(menu) {
    return menu.subMenu && menu.subMenu.length;
  }

  isMenuOpen(menu) {
    return menu && menu.open;
  }

}

export interface MenuInterface {
  id: string;
  name: string;
  open?: boolean;
  url?: string;
  subMenu?: MenuInterface[];
}
