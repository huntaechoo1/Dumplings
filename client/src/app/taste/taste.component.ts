import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: 'app-taste',
	templateUrl: './taste.component.html',
	styleUrls: ['./taste.component.css']
})
export class TasteComponent implements OnInit {
	private _http : HttpService;
	private _router : Router;
	private _route : ActivatedRoute;

	constructor(httpService : HttpService, router:Router, route:ActivatedRoute) {
		this._http = httpService;
		this._router = router;
		this._route = route;
	}

	ngOnInit() {
	}


}
