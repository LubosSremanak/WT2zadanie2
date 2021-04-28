import {TestBed} from '@angular/core/testing';

import {EditOlympianResolver} from './edit-olympian.resolver';

describe('EditOlympianResolver', () => {
  let resolver: EditOlympianResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EditOlympianResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
