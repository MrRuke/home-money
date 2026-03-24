import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
    selector: 'app-line-chart',
    templateUrl: './line-chart.component.html',
    styleUrls: ['./line-chart.component.scss'],
    imports: [
        BaseChartDirective,
    ],
})
export class LineChartComponent {
    protected balanceChartOptions: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,
    
        plugins: {
            legend: {
                display: true, 
                position: 'top', 
                labels: {
                    color: '#9CA3AF', //(--text-secondary)
                    usePointStyle: true,
                    boxWidth: 8
                },
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: '#2A2A2A', //  (--bg-input)
                titleColor: '#9CA3AF',
                bodyColor: '#F9FAFB',
                borderColor: '#374151',
                borderWidth: 1,
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) { label += ': '; }
                        if (context.parsed.y !== null) {
                            label += new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(context.parsed.y);
                        }
                        return label;
                    }
                }
            }
        },
    
        scales: {
            x: {
                grid: {
                    display: false, 
                },
                ticks: {
                    color: '#9CA3AF' // (--text-secondary)
                }
            },
            y: {
                grid: {
                    color: '#374151', //(--border-light)
                },
                ticks: {
                    color: '#9CA3AF',
                    callback: function(value) {
                        return '€' + value; 
                    }
                }
            }
        }
    };

    protected balanceChartData: ChartData<'line'> = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], 
    
        datasets: [
            {
                label: 'Main Checking',
                data: [2000, 2500, 2200, 3000, 3500, 4235], 
                borderColor: '#14B8A6', // --accent-teal
                backgroundColor: 'rgba(20, 184, 166, 0.1)', 
                fill: true, 
                tension: 0.4, 
                borderWidth: 2,
                pointRadius: 3,
                pointBackgroundColor: '#121212'
            },
            {
                label: 'Savings',
                data: [10000, 11000, 12500, 13000, 14500, 15700], 
                borderColor: '#F97316', // --accent-orange
                backgroundColor: 'rgba(249, 115, 22, 0.1)',
                fill: true, 
                tension: 0.4, 
                borderWidth: 2,
                pointRadius: 3,
                pointBackgroundColor: '#121212'
            },
            {
                label: 'Credit Card',
                data: [-500, -800, -300, -1000, -600, -845], 
                borderColor: '#F43F5E', // --status-expense-text 
                backgroundColor: 'rgba(244, 63, 94, 0.1)',
                fill: true, 
                tension: 0.4, 
                borderWidth: 2,
                pointRadius: 3,
                pointBackgroundColor: '#121212'
            }
        ]
    };
}