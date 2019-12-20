import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
	private _http : HttpService;
	private _router : Router;
	private _route : ActivatedRoute;
	public newDumpling : any = {};
	public errors : any = {};

	constructor(httpService : HttpService, router:Router, route:ActivatedRoute) {
		this._http = httpService;
		this._router = router;
		this._route = route;
	}

	ngOnInit() {

	}


}
