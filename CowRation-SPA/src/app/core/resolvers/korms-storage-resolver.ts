import { Injectable } from '@angular/core';
import { StorageService } from "../services/storage.service";
import { Router, ActivatedRouteSnapshot } from "@angular/router";
import { AlertifyService } from "../utils/alertify.service";
import { Observable, of } from "rxjs";
import { KormStorage } from "../models/korm-storage";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class KormsStorageResolver{
  constructor(
    private storageService: StorageService,
    private router: Router,
    private alertify: AlertifyService
  ) {}
  resolve(routerSnapshot: ActivatedRouteSnapshot): Observable<KormStorage[]> {
    return this.storageService.getStorageKorms().pipe(
      catchError(error => {
        this.alertify.error("Problem retrieving data");
        return of(null);
      })
    );
  }

}
