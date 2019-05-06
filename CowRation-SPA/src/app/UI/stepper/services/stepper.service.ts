import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StepperService {
  private index: number;
  constructor() {
    this.index = 0;
  }
  public GetNumber(): number {
    return ++this.index;
  }
}
