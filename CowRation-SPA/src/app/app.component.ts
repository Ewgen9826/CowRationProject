import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { LoadingService } from "./UI/loading-page/services/loading.service";
import { filter, map, mergeMap } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthService } from "./core/authentication/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls:
    [
      "./app.component.css"
    ]
})
export class AppComponent implements OnInit {
  jwtHelper = new JwtHelperService();
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private loadingService: LoadingService,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route) => route.outlet === "primary"),
        mergeMap((route) => route.data)
      )
      .subscribe((event) => this.titleService.setTitle(event["title"]));

    this.loadingService.show();
    setTimeout( () => {
      this.loadingService.hide()
    }, 300 );


    const token = localStorage.getItem( "token" );
    if ( token ) {
      this.authService.decodedToken = this.jwtHelper.decodeToken( token );
    }

  }
}
