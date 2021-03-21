import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMyTasksComponent } from './show-my-tasks.component';

describe('ShowMyTasksComponent', () => {
  let component: ShowMyTasksComponent;
  let fixture: ComponentFixture<ShowMyTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMyTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMyTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
