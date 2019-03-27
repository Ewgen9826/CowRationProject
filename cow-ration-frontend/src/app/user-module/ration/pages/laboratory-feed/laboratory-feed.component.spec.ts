import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LaboratoryFeedComponent } from "./laboratory-feed.component";

describe("LaboratoryFeedComponent", () => {
  let component: LaboratoryFeedComponent;
  let fixture: ComponentFixture<LaboratoryFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoryFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoryFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
