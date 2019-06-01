import { TestBed } from '@angular/core/testing';

import { ArticleListeService } from './article-liste.service';

describe('ArticleListeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleListeService = TestBed.get(ArticleListeService);
    expect(service).toBeTruthy();
  });
});
