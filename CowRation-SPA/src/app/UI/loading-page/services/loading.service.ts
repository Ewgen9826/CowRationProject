import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoadingService {
  public isShow = false;
  constructor() {}
  public show() {
    if (!this.isShow) {
      this.isShow = true;
    }
  }
  public hide() {
    if (this.isShow) {
      this.isShow = false;
    }
  }
}
