import { TestBed } from '@angular/core/testing';

import { MineSweeperService } from './mine-sweeper.service';

describe('MinesweeperService', () => {
  let service: MineSweeperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MineSweeperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
