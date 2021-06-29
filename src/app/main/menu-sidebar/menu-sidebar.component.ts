import {Component, OnInit} from '@angular/core';
import {AppService} from '@services/app.service';
import { RandomUserService } from '@services/random-user.service';

@Component({
    selector: 'app-menu-sidebar',
    templateUrl: './menu-sidebar.component.html',
    styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {
    public user;

    constructor(
        private appService: AppService, 
        private randomUserService: RandomUserService
    ) {}

    ngOnInit() {
        this.user = this.appService.user;
        this.randomUserService.getRandomImage().subscribe(
            response => {
                const picture: any = response?.results[0]?.picture;
                this.user.picture = picture?.thumbnail;
                this.user.medium_pic = picture?.medium;
                
            },
        )
    }
}
