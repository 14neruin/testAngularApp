import { Injectable } from '@angular/core'
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
	providedIn: 'root'
})

export class AuthService {
	private validLogin = "123"
	private validPass = "123"
	private validToken = "lg1231adfaga"

	constructor(private router: Router) {}

	login(login:string, pass:string){
		if(login === this.validLogin && pass === this.validPass){
			localStorage.token = this.validToken
			this.router.navigate([''])
		}
	}

	status(){
		return (localStorage.token === this.validToken)
	}
	
	logout(){
		localStorage.removeItem('token')
		this.router.navigate(['/login'])
	}
}
