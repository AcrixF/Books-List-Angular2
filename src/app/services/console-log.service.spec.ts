import { TestBed, inject } from '@angular/core/testing';

import { ConsoleLogService } from './console-log.service';

describe('ConsoleLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsoleLogService]
    });
  });

  it('should be created', inject([ConsoleLogService], (service: ConsoleLogService) => {
    expect(service).toBeTruthy();
  }));
});
