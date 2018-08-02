import { TestBed, inject } from '@angular/core/testing';

import { AnmolService } from './anmol.service';

describe('AnmolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnmolService]
    });
  });

  it('should be created', inject([AnmolService], (service: AnmolService) => {
    expect(service).toBeTruthy();
  }));
});
