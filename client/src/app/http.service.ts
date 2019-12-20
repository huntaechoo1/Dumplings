import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class HttpService {
	private _httpClient : HttpClient;

	constructor(httpClient : HttpClient) {
		this._httpClient = httpClient;
	}

	getAll() : Observable<any>{
		return this._httpClient.get('/dumplings');
	}

	create(dumplingdata : any) : Observable<any>{
		return this._httpClient.post('/dumplings', dumplingdata);
	}

	getOne(_id) : Observable <any>{
		return this._httpClient.get(`/dumplings/${_id}`);
	}

	addIngredient(_id, dumplingdata:any) : Observable<any>{
		return this._httpClient.put(`/dumplings/${_id}`, dumplingdata)
	}
}
