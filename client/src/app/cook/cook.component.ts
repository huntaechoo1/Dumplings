import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: 'app-cook',
	templateUrl: './cook.component.html',
	styleUrls: ['./cook.component.css']
})
export class CookComponent implements OnInit {
	private _http : HttpService;
	private _router : Router;
	private _route : ActivatedRoute;
	public oneDumpling : any = {};
	public cookCounter : number = 0;

	constructor(httpService : HttpService, router:Router, route:ActivatedRoute) {
		this._http = httpService;
		this._router = router;
		this._route = route;
	}

	ngOnInit() {
		this._route.params.subscribe((params : Params) =>{
			console.log(params['_id']);
			const dumplingObservable : Observable<any> = this._http.getOne(params['_id']);
			dumplingObservable.subscribe( res =>{
				this.oneDumpling = res;	
			})
		})
	}

	addCook(){
		this.cookCounter += 1;
	}

}
