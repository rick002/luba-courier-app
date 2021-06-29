import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {AppService} from '@services/app.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Output() toggleMenuSidebar: EventEmitter<any> = new EventEmitter<any>();
    

    constructor(private appService: AppService) {}

    ngOnInit() {
    }

    logout() {
        this.appService.logout();
    }
}
