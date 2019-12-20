import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: 'app-honor',
	templateUrl: './honor.component.html',
	styleUrls: ['./honor.component.css']
})
export class HonorComponent implements OnInit {
	private _http : HttpService;
	private _router : Router;
	private _route : ActivatedRoute;
	public allDumplings : [];

	constructor(httpService : HttpService, router:Router, route:ActivatedRoute) {
		this._http = httpService;
		this._router = router;
		this._route = route;
	}

	ngOnInit() {
		const DumplingObservable : Observable<any> = this._http.getAll();
		DumplingObservable.subscribe(res =>{
			this.allDumplings = res
			console.log(res);
		});
	}

}
