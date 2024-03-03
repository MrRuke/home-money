import {
  Pipe,
  PipeTransform,
} from '@angular/core';

@Pipe({
  name: 'appFilter',
})

export class FilterPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public transform(items: any, value: string, field: string): string {
    if (items.length === 0 || !value) {
      return items;
    }
    // @ts-expect-error legacy
    return items.filter((i) => {
      const t = Object.assign({}, i);
      if (!isNaN(t[field])) {
        t[field] += '';
      }
      if (field === 'type') {
        t[field] = t[field] === 'income'
          ? 'доход'
          : 'расход';
      }
      if (field === 'category') {
        t[field] = t.catName;
      }
      return t[field].toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
  }
}
