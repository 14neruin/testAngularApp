import { EmployeesModule } from './employees/employees.module'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { EmployeesComponent } from './employees/employees.component'

import { AuthService } from './auth.service'

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent
	],
	imports: [
		FormsModule,
		BrowserModule,
		RouterModule.forRoot([
			{path:'login', component: LoginComponent},
			{path:'**', redirectTo: '/'}
		]),
		EmployeesModule
	],
	providers: [AuthService],
	bootstrap: [AppComponent]
})
export class AppModule { }
