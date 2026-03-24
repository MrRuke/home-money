import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'appCost',
    standalone: false
})
export class AppCostPipe implements PipeTransform {
    public transform(value: number, measure: AppCostPipeMeasure): string {
        return `${this.getConvertedValue(value)} ${this.getMeasureTranslate(measure)}`;
    }

    private getConvertedValue(value: number): string {
        return Math.abs(value).toLocaleString('ru-RU', { maximumFractionDigits: 2 });
    }


    private getMeasureTranslate(measure: AppCostPipeMeasure): string {
        if (measure === 'DOLLAR' || measure === 'USD') {
            return '$';
        }

        if (measure === 'RUB') {
            return '₽';
        }

        if (measure === 'EURO' || measure === 'EUR') {
            return '€';
        }
        return '';
    }
}

export type AppCostPipeMeasure = 'RUB' | 'EURO' | 'DOLLAR' | 'USD' | 'EUR';
