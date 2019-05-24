import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, retry } from "rxjs/operators";
import { KormStorage } from "../models/korm-storage";
import { Observable } from "rxjs";
import { AuthService } from "../authentication/auth.service";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class StorageService {
  baseUrl = environment.apiUrl;
  constructor( private http: HttpClient, private authService:AuthService ) { }
  getStorageKorms():Observable<KormStorage[]> {
    return this.http
      .get( this.baseUrl + "/storage/user/" + this.authService.decodedToken.nameid +"/korms" ).pipe(
        map( ( data: any[] ) => {
          let korms = data;
          console.log( korms );
          return korms.map( ( korm: KormStorage ) => {
            const model = {
              kormId: korm.kormId,
              storageId: korm.storageId,
              name: korm.name,
              foodValue: korm.foodValue
            };
            return model;
          })
        } )
      );
  }
}
