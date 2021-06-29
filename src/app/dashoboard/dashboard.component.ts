import {Component, OnInit} from '@angular/core';
import { AppService } from '@services/app.service';
import { CourierService } from '@services/courier.service';
import { TABLE_CONFIG } from './models/table-config.model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    errorInfo: any = {};
    loading: boolean = true;
    pendingPackages: Array<any> = [];
    tableConfig: Array<any> = TABLE_CONFIG;
 
    constructor(
        private courierService: CourierService
    ) { }


    ngOnInit(): void {
        this.courierService.getPendingPackages(this.getUsername()).subscribe(
            packages => {
                this.pendingPackages = packages.responseObject;
                this.loading = false;
                console.log(this.pendingPackages);
            },
            errorInfo => this.errorInfo = errorInfo,
        );
    }

    private getUsername(): string {
        const fullName: string = JSON.parse(localStorage.getItem('user-session'))?.fullName;
        const splitted: string[] = fullName.split(' ');
        return `${splitted[0][0]}${splitted[1]}`.toLowerCase();
    }
}
