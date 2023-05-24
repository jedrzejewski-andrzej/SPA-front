import { Component } from "@angular/core";
import { AuthFacade } from "../../../../store/facades/auth.facade";
import {Router} from '@angular/router';

@Component({
  selector: 'app-panel-container',
  templateUrl: './panel-container.component.html',
  styleUrls: ['./panel-container.component.scss'],
})
export class PanelContainerComponent {
  activeLink: number = 0;
  links: { label: string, link: string }[] = [
    {label: 'Produkty', link:'panel/products/list'},
    {label: 'Konto', link:'panel/account'},
  ]
  constructor(
    private _authFacade: AuthFacade,
    private _router: Router,
  ) {
    this.links.forEach((item, index) => {
      if(this._router.url.includes(item.link)) {
        this.activeLink = index;
      }
    })
  }

  logout(): void {
    this._authFacade.logout()
  }
  
  navigate(link: string, index: number): void {
    this.activeLink = index;
    this._router.navigateByUrl(link);
  }
}