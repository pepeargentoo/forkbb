import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from './customerservice';
import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';
import { BalanceadorComentariosFacebookService } from '../services/balanceador-comentarios-facebook.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-datagrid',
    templateUrl: './datagrid.component.html',
    styleUrls: ['./datagrid.component.css'],
    animations: [
        trigger('rowExpansionTrigger', [
            state('void', style({
                transform: 'translateX(-10%)',
                opacity: 0
            })),
            state('active', style({
                transform: 'translateX(0)',
                opacity: 1
            })),
            transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})



export class DatagridComponent implements OnInit {

    public data;

    loading: boolean = true;

    @ViewChild('dt', { static: false }) table: Table;

    constructor(private customerService: CustomerService, private primengConfig: PrimeNGConfig,
        private facebookService: BalanceadorComentariosFacebookService) { }

    ngOnInit() {
        this.primengConfig.ripple = true;
        this.data = this.facebookService.getAllNoticias();
        this.loading = false;
    }

    onActivityChange(event) {
        const value = event.target.value;
        if (value && value.trim().length) {
            const activity = parseInt(value);

            if (!isNaN(activity)) {
                this.table.filter(activity, 'activity', 'gte');
            }
        }
    }

    onRepresentativeChange(event) {
        this.table.filter(event.value, 'representative', 'in')
    }

}
