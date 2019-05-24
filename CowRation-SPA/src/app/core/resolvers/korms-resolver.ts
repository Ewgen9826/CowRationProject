import { Injectable } from "@angular/core";
import { KormSelect } from "../models/korm-select";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { KormService } from "../services/korm.service";
import { AlertifyService } from "../utils/alertify.service";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class KormsResolver implements Resolve<KormSelect[]> {
  constructor(
    private kormService: KormService,
    private router: Router,
    private alertify: AlertifyService
  ) {}
  resolve(routerSnapshot: ActivatedRouteSnapshot): Observable<KormSelect[]> {
    return this.kormService.getKorms().pipe(
      catchError(error => {
        this.alertify.error("Problem retrieving data");
        return of(null);
      })
    );
  }
}
