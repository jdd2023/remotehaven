import { TestBed } from '@angular/core/testing';

import { ScenarioStatusService } from './scenario-status.service';

describe('ScenarioStatusService', () => {
  let service: ScenarioStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScenarioStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
