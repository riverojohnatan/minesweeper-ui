import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineSweeperListComponent } from './mine-sweeper-list.component';

describe('MinesweeperListComponent', () => {
  let component: MineSweeperListComponent;
  let fixture: ComponentFixture<MineSweeperListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MineSweeperListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MineSweeperListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
