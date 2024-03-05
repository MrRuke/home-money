import { Injectable } from '@angular/core';
import {
  Meta,
  Title,
} from '@angular/platform-browser';

interface MetaModel {
  title?: string;
  description?: string;
  keywords?: string;
}

@Injectable({ providedIn: 'root' })
export class MetaService {
  constructor(
    private title: Title,
    private meta: Meta,
  ) {
  }

  public init(meta: MetaModel): void {
    meta.title && this.setTitle(meta.title);
    meta.description && this.addDescription(meta.description);
    meta.keywords && this.addKeywords(meta.keywords)
  }

  private setTitle(title: string): void {
    this.title.setTitle(title);
  }

  private addDescription(value: string): void {
    this.meta.addTags([
      {
        name: 'description',
        content: value,
      },
    ]);
  }

  private addKeywords(value: string): void {
    this.meta.addTags([
      {
        name: 'keywords',
        content: value,
      },
    ]);
  }
}
