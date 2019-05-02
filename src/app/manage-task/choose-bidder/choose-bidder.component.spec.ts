import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseBidderComponent } from './choose-bidder.component';

describe('ChooseBidderComponent', () => {
  let component: ChooseBidderComponent;
  let fixture: ComponentFixture<ChooseBidderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseBidderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseBidderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
