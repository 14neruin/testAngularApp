import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth.service'
import { Router } from '@angular/router'

@Component({
	selector: 'app-employees',
	templateUrl: './employees.component.html',
	styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {
	auth : AuthService

	constructor(auth: AuthService, private router: Router) {
		this.auth = auth
		if(auth.status() == false)
			router.navigate(['/login'])
	}

	logout(){
		this.auth.logout()
	}

	ngOnInit(){}
}
