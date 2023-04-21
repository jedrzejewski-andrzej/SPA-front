import {Component, OnDestroy, OnInit} from "@angular/core";
import {GetFactsService} from "../../_services/get-facts.service";
import {Observable} from "rxjs";
import {AuthFacade} from "../../../../store/facades/auth.facade";

@Component({
  selector: 'app-panel-container',
  templateUrl: './panel-container.component.html',
  styleUrls: ['./panel-container.component.scss'],
})
export class PanelContainerComponent implements OnInit, OnDestroy {
  listData$ : Observable<string[] | null>;
  count: number = 10;
  constructor(
    private _getFactsService: GetFactsService,
    private _authFacade: AuthFacade
  ) {}

  ngOnInit() {
    this.listData$ = this._getFactsService.listData$;
    this.fetchFacts(this.count)
  }

  private fetchFacts(count: number): void {
    this._getFactsService.getFacts(count);
  }

  onScrollingDown(): void {
    this.count +=10;
    this.fetchFacts(this.count)
  }

  logout(): void {
    this._authFacade.logout()
  }

  ngOnDestroy() {
    this._getFactsService.clearData();
  }
}