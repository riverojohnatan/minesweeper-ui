import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineSweeperHomeComponent } from './mine-sweeper-home.component';

describe('MinesweeperLoginComponent', () => {
  let component: MineSweeperHomeComponent;
  let fixture: ComponentFixture<MineSweeperHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MineSweeperHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MineSweeperHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
