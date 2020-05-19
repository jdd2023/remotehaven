import { TestBed } from '@angular/core/testing';

import { AttackModService } from './attack-mod.service';

describe('AttackModService', () => {
  let service: AttackModService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttackModService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
