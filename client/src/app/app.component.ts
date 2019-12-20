import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	private _http : HttpService;
	private _router : Router;
	title = 'client';
	constructor(httpService : HttpService, router:Router){
		this._http = httpService;
		this._router = router;
	}
	ngOnInit(){
		this._router.navigate(['/main']);
	}
}
