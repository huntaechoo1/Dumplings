import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: 'app-ingredients',
	templateUrl: './ingredients.component.html',
	styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
	private _http : HttpService;
	private _router : Router;
	private _route : ActivatedRoute;
	public ingredientList : Array<string> = [];
	public newDumpling : any = {};
	public errors : any = {};
	public Pork: boolean = false;
	public Chicken: boolean = false;
	public Python: boolean = false;
	public Dog: boolean = false;
	public Shark: boolean = false;
	public Tarantula: boolean = false;
	public Onion: boolean = false;
	public Celery: boolean = false;
	public Daikon: boolean = false;
	public Cassava: boolean = false;
	public Bamboo: boolean = false;
	public Chocolate: boolean = false;
	public Dirt: boolean = false;
	public Shoe: boolean = false;
	public Cheese: boolean = false;

	constructor(httpService : HttpService, router:Router, route:ActivatedRoute) {
		this._http = httpService;
		this._router = router;
		this._route = route;
	}

	ngOnInit() {
		this.createDumpling();
		console.log("Dumpling created!");
		console.log(this.newDumpling._id);
	}

	clickPork(){
		this.ingredientList.push("Pork");
		this.Pork = true;
	}
	clickChicken(){
		this.ingredientList.push("Chicken");
		this.Chicken = true;
	}
	clickDog(){
		this.ingredientList.push("Dog");
		this.Dog = true;
	}
	clickPython(){
		this.ingredientList.push("Python");
		this.Python = true;
	}
	clickShark(){
		this.ingredientList.push("Shark");
		this.Shark = true;
	}
	clickTarantula(){
		this.ingredientList.push("Tarantula");
		this.Tarantula = true;
	}
	clickOnion(){
		this.ingredientList.push("Onion");
		this.Onion = true;
	}
	clickCelery(){
		this.ingredientList.push("Celery");
		this.Celery = true;
	}
	clickDaikon(){
		this.ingredientList.push("Daikon");
		this.Daikon = true;
	}
	clickCassava(){
		this.ingredientList.push("Cassava");
		this.Cassava = true;
	}
	clickBamboo(){
		this.ingredientList.push("Bamboo");
		this.Bamboo = true;
	}
	clickChocolate(){
		this.ingredientList.push("Chocolate");
		this.Chocolate = true;
	}
	clickDirt(){
		this.ingredientList.push("Dirt");
		this.Dirt = true;
	}
	clickShoe(){
		this.ingredientList.push("Shoe");
		this.Shoe = true;
	}
	clickCheese(){
		this.ingredientList.push("Cheese");
		this.Cheese = true;
	}




	addIngredients(_id){
		let observable : Observable<any> = this._http.addIngredient(_id, this.newDumpling);
		observable.subscribe(res => {
			console.log(res)
			if(res['errors']){
				this.errors = res;
			}
			else{
				this._router.navigate([`/dough/${this.newDumpling._id}`])
			}
		})
	}

	createDumpling(){
		let PetObservable : Observable<any> = this._http.create(this.newDumpling);
		PetObservable.subscribe( res=> {
			if(res.errors){
				console.log(res.errors);
				this.errors = res.errors;
			}
			else{
				this.newDumpling = res;
			}
		})
	}
	

}
