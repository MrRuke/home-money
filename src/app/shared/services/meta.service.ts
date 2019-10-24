import { Injectable } from '@angular/core';
import {
  Meta,
  MetaDefinition,
  Title,
} from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class MetaService {
  constructor(
    private title: Title,
    private meta: Meta,
  ) {
  }

  public setTitle(title: string): void {
    this.title.setTitle(title);
  }

  public addTags(tags: MetaDefinition[]): void {
    this.meta.addTags(tags);
  }

  public addDescription(value: string): void {
    this.meta.addTags([
      {
        name: 'description',
        content: value,
      },
    ]);
  }

  public addKeywords(value: string): void {
    this.meta.addTags([
      {
        name: 'keywords',
        content: value,
      },
    ]);
  }
}
