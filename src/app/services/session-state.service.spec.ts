import { TestBed } from '@angular/core/testing';

import { SessionStateService } from './session-state.service';

describe('SessionStateServiceService', () => {
  let service: SessionStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
