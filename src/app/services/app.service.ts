import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { CourierService } from './courier.service';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    public failedLoginAttempts: number = 0;
    public user: any = null;
    public isAuthLoading: boolean = false;
    
    constructor(
        private router: Router, 
        private toastr: ToastrService, 
        private courierService: CourierService
    ) {}

    loginByAuth({username, password}) {
        this.courierService.login({username, password}).subscribe(
            response => {
                this.isAuthLoading = false;
                if (response.success) { 
                    this.openDashboard(response); 
                } else { 
                    this.failedLoginAttempts++;
                    this.toastr.error(response.exception); 
                }
        });
    }

    openDashboard(response: any) {
        localStorage.setItem('user-session', JSON.stringify(response.responseObject));
        this.router.navigate(['/']);
    }

    getProfile() {
        try {
            this.user = JSON.parse(localStorage.getItem('user-session'));
            return this.user;
        } catch (error) {
            this.logout();
            throw error;
        }
    }

    logout() {
        this.user = null;
        localStorage.removeItem('user-session');
        this.router.navigate(['/login']);
    }
}
