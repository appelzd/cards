import { TestBed, inject } from '@angular/core/testing';

import { HttpClientProxyService } from './http-client-proxy.service';

describe('HttpClientProxyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientProxyService]
    });
  });

  it('should be created', inject([HttpClientProxyService], (service: HttpClientProxyService) => {
    expect(service).toBeTruthy();
  }));
});
