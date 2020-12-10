import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineSweeperCreateComponent } from './mine-sweeper-create.component';

describe('MineSweeperCreateComponent', () => {
  let component: MineSweeperCreateComponent;
  let fixture: ComponentFixture<MineSweeperCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MineSweeperCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MineSweeperCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
