import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth.service'
import { Router } from '@angular/router'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	login : string
	pass : string
	auth : AuthService

	constructor(auth: AuthService, private router: Router) {
		this.auth = auth
		if(auth.status() == true)
			router.navigate([''])
	}

	toLogin(){
		this.auth.login(this.login, this.pass)
		console.log(this.auth.status())
	}

	ngOnInit(){}
}
