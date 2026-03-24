import { Component, OnInit } from '@angular/core';
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
export class LineChartComponent implements OnInit {
    activeFilter: '1M' | '1Y' | '3Y' = '1Y';

    private chartDataStore = {
        '1M': {
            labels: ['Mar 1', 'Mar 8', 'Mar 15', 'Mar 24'],
            main: [4100, 4150, 4200, 4235],
            savings: [15500, 15600, 15650, 15700],
            credit: [-900, -880, -850, -845]
        },
        '1Y': {
            labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
            main: [3000, 3100, 2900, 3400, 3500, 3700, 3600, 3900, 4000, 4100, 4200, 4235],
            savings: [13000, 13200, 13500, 13800, 14000, 14200, 14500, 14800, 15000, 15300, 15500, 15700],
            credit: [-1200, -1100, -1300, -1000, -900, -950, -800, -850, -700, -750, -800, -845]
        },
        '3Y': {
            labels: ['2024', '2025', '2026'],
            main: [2500, 3800, 4235],
            savings: [10000, 14000, 15700],
            credit: [-1500, -900, -845]
        }
    };
    
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

    ngOnInit() {
        this.updateChartData(this.activeFilter);
    }

    setFilter(filter: '1M' | '1Y' | '3Y') {
        this.activeFilter = filter;
        this.updateChartData(filter);
    }

    private updateChartData(filter: '1M' | '1Y' | '3Y') {
        const data = this.chartDataStore[filter];

        this.balanceChartData = {
            labels: data.labels,
            datasets: [
                {
                    label: 'Main Checking',
                    data: data.main,
                    borderColor: '#14B8A6',
                    backgroundColor: 'rgba(20, 184, 166, 0.1)',
                    fill: true, tension: 0.4, borderWidth: 2, pointRadius: 3, pointBackgroundColor: '#121212'
                },
                {
                    label: 'Savings',
                    data: data.savings,
                    borderColor: '#F97316',
                    backgroundColor: 'rgba(249, 115, 22, 0.1)',
                    fill: true, tension: 0.4, borderWidth: 2, pointRadius: 3, pointBackgroundColor: '#121212'
                },
                {
                    label: 'Credit Card',
                    data: data.credit,
                    borderColor: '#F43F5E',
                    backgroundColor: 'rgba(244, 63, 94, 0.1)',
                    fill: true, tension: 0.4, borderWidth: 2, pointRadius: 3, pointBackgroundColor: '#121212'
                }
            ]
        };
    }
}