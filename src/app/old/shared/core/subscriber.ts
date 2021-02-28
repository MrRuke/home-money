import { Component, OnDestroy } from '@angular/core';
import {
  Observable,
  Subscription,
} from 'rxjs';

@Component({
  template: ''
})
export abstract class SubscriberComponent implements OnDestroy {
  private subscription = new Subscription();

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  protected subscribe<T>(toSubscription: Observable<T> | Subscription): this {
    if (toSubscription instanceof Subscription) {
      this.subscription.add(toSubscription);
      return this;
    }
    this.subscription.add(toSubscription.subscribe());
    return this;
  }
}
