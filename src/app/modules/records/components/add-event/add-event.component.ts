import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, Validators } from '@angular/forms';
import { TranslocoPipe } from '@ngneat/transloco';
import { Category } from '../../../../apis/categories/models';
import { HistoryRequest, HistoryType } from '../../../../apis/history/models';
import { CustomButtonComponent } from '../../../../components/custom-button/custom-button.component';

@Component({
    selector: 'app-add-event',
    templateUrl: './add-event.component.html',
    styleUrls: ['./add-event.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ReactiveFormsModule, CustomButtonComponent, TranslocoPipe]
})
export class AddEventComponent {
    private fb = inject(UntypedFormBuilder);
  
    public readonly amountControl = this.fb.control(1, [
        Validators.required,
    ]);
    public readonly categoryControl = this.fb.control(null, [
        Validators.required,
    ]);
    public readonly formGroup = this.fb.group({
        category: this.categoryControl,
        type: this.fb.control(HistoryType.INCOME, Validators.required),
        amount: this.amountControl,
        description: null,
    });

    public readonly types = Object.values(HistoryType);

    public categories = input<Category[]>([]);
  
    public eventSubmitted = output<HistoryRequest>();

    public isIncome = (type: HistoryType): boolean => type === HistoryType.INCOME;

    public getTypeText = (type: HistoryType): string =>
        this.isIncome(type) ? "HISTORY.TYPE_INCOME" : "HISTORY.TYPE_OUTCOME";

    public handleSubmit(): void {
        if (this.formGroup.invalid) {
            return;
        }

        this.eventSubmitted.emit({
            ...this.formGroup.value,
            amount: Number(this.formGroup.value.amount),
            category: this.formGroup.value.category.id,
            description: '',
            date: '',
        });
        // TODO
        this.formGroup.reset();
    }
}
