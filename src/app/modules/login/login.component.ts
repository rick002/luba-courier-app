import {
    Component,
    OnInit,
    OnDestroy,
    Renderer2,
    HostBinding
} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {AppService} from '@services/app.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    @HostBinding('class') class = 'login-box';
    public loginForm: FormGroup;
    public isAuthLoading = false;

    constructor(
        private renderer: Renderer2,
        private toastr: ToastrService,
        public appService: AppService,
        private fb: FormBuilder
    ) {}

    ngOnInit() {
        this.renderer.addClass(document.querySelector('app-root'),'login-page');
        this.loginForm = this.fb.group({
            username: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^[a-zA-Z0-9]*$')]],
            password: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]]
        });
    }

    loginByAuth() {
        if (this.loginForm.valid && this.appService.failedLoginAttempts < 3) {
            this.appService.isAuthLoading = true;
            this.appService.loginByAuth(this.loginForm.value);
        } else if(this.appService.failedLoginAttempts === 3) {
            this.toastr.error('Sorry, allowed number of attempts succeded, please try again later.')
        } else {
            this.toastr.error('Form is not valid!');
            this.appService.isAuthLoading = false;
        }
    }

    ngOnDestroy() {
        this.renderer.removeClass(document.querySelector('app-root'),'login-page');
    }
}
