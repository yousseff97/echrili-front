import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFriendRequestsComponent } from './list-friend-requests.component';

describe('ListFriendRequestsComponent', () => {
  let component: ListFriendRequestsComponent;
  let fixture: ComponentFixture<ListFriendRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFriendRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFriendRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
