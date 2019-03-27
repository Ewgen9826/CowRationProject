import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SelectionFeedComponent } from "./selection-feed.component";

describe("SelectionFeedComponent", () => {
  let component: SelectionFeedComponent;
  let fixture: ComponentFixture<SelectionFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
