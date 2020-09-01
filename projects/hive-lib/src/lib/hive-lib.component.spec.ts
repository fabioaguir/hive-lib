import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiveLibComponent } from './hive-lib.component';

describe('HiveLibComponent', () => {
  let component: HiveLibComponent;
  let fixture: ComponentFixture<HiveLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiveLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiveLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
