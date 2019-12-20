import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: 'app-dough',
	templateUrl: './dough.component.html',
	styleUrls: ['./dough.component.css']
})
export class DoughComponent implements OnInit {
	private _http : HttpService;
	private _router : Router;
	private _route : ActivatedRoute;
	public BowlMeat1 : Boolean = true;
	public BowlMeat2 : Boolean = true;
	public BowlMeat3 : Boolean = true;
	public BowlMeat4 : Boolean = true;
	public BowlMeat5 : Boolean = true;
	public BowlMeat6 : Boolean = true;
	public BowlMeat7 : Boolean = true;
	public BowlMeat8 : Boolean = true;
	public BowlMeat9 : Boolean = true;
	public BowlMeat10 : Boolean = true;
	public BowlMeat11 : Boolean = true;
	public BowlMeat12 : Boolean = true;
	public BowlMeat13 : Boolean = true;
	public ScoopMeat1 : Boolean = false;
	public ScoopMeat2 : Boolean = false;
	public ScoopMeat3 : Boolean = false;
	public ScoopMeat4 : Boolean = false;
	public ScoopMeat5 : Boolean = false;
	public ScoopMeat6 : Boolean = false;
	public ScoopMeat7 : Boolean = false;
	public ScoopMeat8 : Boolean = false;
	public ScoopMeat9 : Boolean = false;
	public ScoopMeat10 : Boolean = false;
	public ScoopMeat11 : Boolean = false;
	public ScoopMeat12 : Boolean = false;
	public ScoopMeat13 : Boolean = false;
	public Dough1 : Boolean = true;
	public Dough2 : Boolean = true;
	public Dough3 : Boolean = true;
	public Dough4 : Boolean = true;
	public Dough5 : Boolean = true;
	public Dough6 : Boolean = true;
	public Dough7 : Boolean = true;
	public Dough8 : Boolean = true;
	public Dough9 : Boolean = true;
	public Dough10 : Boolean = true;
	public Dough11 : Boolean = true;
	public Dough12 : Boolean = true;
	public Dough13 : Boolean = true;
	public Dumpling1 : Boolean = false;
	public Dumpling2 : Boolean = false;
	public Dumpling3 : Boolean = false;
	public Dumpling4 : Boolean = false;
	public Dumpling5 : Boolean = false;
	public Dumpling6 : Boolean = false;
	public Dumpling7 : Boolean = false;
	public Dumpling8 : Boolean = false;
	public Dumpling9 : Boolean = false;
	public Dumpling10 : Boolean = false;
	public Dumpling11 : Boolean = false;
	public Dumpling12 : Boolean = false;
	public Dumpling13 : Boolean = false;
	public oneDumpling : any = {};



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

	clickBowlMeat1(){
		this.BowlMeat1 = false;
		this.ScoopMeat1 = true;
	}
	clickBowlMeat2(){
		this.BowlMeat2 = false;
		this.ScoopMeat2 = true;
	}
	clickBowlMeat3(){
		this.BowlMeat3 = false;
		this.ScoopMeat3 = true;
	}
	clickBowlMeat4(){
		this.BowlMeat4 = false;
		this.ScoopMeat4 = true;
	}
	clickBowlMeat5(){
		this.BowlMeat5 = false;
		this.ScoopMeat5 = true;
	}
	clickBowlMeat6(){
		this.BowlMeat6 = false;
		this.ScoopMeat6 = true;
	}
	clickBowlMeat7(){
		this.BowlMeat7 = false;
		this.ScoopMeat7 = true;
	}
	clickBowlMeat8(){
		this.BowlMeat8 = false;
		this.ScoopMeat8 = true;
	}
	clickBowlMeat9(){
		this.BowlMeat9 = false;
		this.ScoopMeat9 = true;
	}
	clickBowlMeat10(){
		this.BowlMeat10 = false;
		this.ScoopMeat10 = true;
	}
	clickBowlMeat11(){
		this.BowlMeat11 = false;
		this.ScoopMeat11 = true;
	}
	clickBowlMeat12(){
		this.BowlMeat12 = false;
		this.ScoopMeat12 = true;
	}
	clickBowlMeat13(){
		this.BowlMeat13 = false;
		this.ScoopMeat13 = true;
	}

	clickDough1(){
		this.Dough1 = false;
		this.Dumpling1 = true;
		this.ScoopMeat1 = false;
	}
	clickDough2(){
		this.Dough2 = false;
		this.Dumpling2 = true;
		this.ScoopMeat2 = false;
	}
	clickDough3(){
		this.Dough3 = false;
		this.Dumpling3 = true;
		this.ScoopMeat3 = false;
	}
	clickDough4(){
		this.Dough4 = false;
		this.Dumpling4 = true;
		this.ScoopMeat4 = false;
	}
	clickDough5(){
		this.Dough5 = false;
		this.Dumpling5 = true;
		this.ScoopMeat5 = false;
	}
	clickDough6(){
		this.Dough6 = false;
		this.Dumpling6 = true;
		this.ScoopMeat6 = false;
	}
	clickDough7(){
		this.Dough7 = false;
		this.Dumpling7 = true;
		this.ScoopMeat7 = false;
	}
	clickDough8(){
		this.Dough8 = false;
		this.Dumpling8 = true;
		this.ScoopMeat8 = false;
	}
	clickDough9(){
		this.Dough9 = false;
		this.Dumpling9 = true;
		this.ScoopMeat9 = false;
	}
	clickDough10(){
		this.Dough10 = false;
		this.Dumpling10 = true;
		this.ScoopMeat10 = false;
	}
	clickDough11(){
		this.Dough11 = false;
		this.Dumpling11 = true;
		this.ScoopMeat11 = false;
	}
	clickDough12(){
		this.Dough12 = false;
		this.Dumpling12 = true;
		this.ScoopMeat12 = false;
	}
	clickDough13(){
		this.Dough13 = false;
		this.Dumpling13 = true;
		this.ScoopMeat13 = false;
	}

}
