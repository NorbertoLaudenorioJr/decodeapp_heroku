	"use strict";
class App{
	constructor(){
		this.bags = [
			{
				"id": 1,
				"Brand":"Jansport",
				"Color":"Black",
				"Size":"Large",
				"Img": "img/black.jpg"
				
			},
			{
				"id": 2,
				"Brand":"Jansport",
				"Color":"Red",
				"Size":"Meduim",
				"Img":"img/red.jpg"				
			},
			{
				"id": 3,
				"Brand":"Jansport",
				"Color":"Blue",
				"Size":"Small",
				"Img": "img/blue.jpg"
			},
			{
				"id": 4,
				"Brand":"Jansport",
				"Color":"Violet",
				"Size":"XL",
				"Img": "img/violet.jpg"
			},
			{
				"id": 5,
				"Brand":"Jansport",
				"Color":"Yellow",
				"Size":"XM",
				"Img": "img/yellow.jpg"
			},
			{
				"id": 6,
				"Brand":"Jansport",
				"Color":"Maroon",
				"Size":"XS",
				"Img": "img/maroon.jpg"			
			}
		];
	}
	render(html, component){

    component.innerHTML += html;
  }

  reRender(html, component){

    component.innerHTML = html;
  }
	createBags(){
		let t = document.getElementById('newBrand');
		let y = document.getElementById('newColor');
		let d = document.getElementById('newSize');
		let p = document.getElementById('newImg');
		let bag = {"Brand":t.value,"Color":y.value,"Size":d.value,"Img":p.value};
		this.bags.push(bag);
		t.value = y.value = d.value = p.value = ''; //Clear Fields
		this.bagsListInfo();
	}
	deleteBags(key){		
		let table = document.getElementById('bagsListInfo');
		table.deleteRow(key);
		this.bags.splice(key,1);
		
		let details = document.getElementById('bagsDetails');
		details.innerHTML = "";
		
		this.bagsListInfo();	
		this.showBagsList();	
	}
	updateBags(key){
		let t = document.getElementById('updateBrand');
		let y = document.getElementById('updateColor');
		let d = document.getElementById('updateSize');
		
		let m = this.bags[key];
		let bag = {"id":m.id,"Brand":t.value,"Color":y.value,"Size":d.value,"Img":m.Img};
		
		this.bags[key] = bag;
		let details = document.getElementById('bagsDetails');
		details.innerHTML = "";
		
		this.bagsListInfo();
		this.showBagsList();
	}
	showLandingPage(){
		$('#landingpage').show();
		$('#createpage').hide();
		$('#readpage').hide();
		$('#updatedeletepage').hide();
	}	
	showBagsList(){
		$('#landingpage').hide();
		$('#createpage').hide();
		$('#readpage').show();
		$('#updatedeletepage').hide();
	}
	showBagsCreate(){
		$('#landingpage').hide();
		$('#createpage').show();		
		$('#readpage').hide();
		$('#updatedeletepage').hide();
	}
	showUpdateDelete(){
		$('#landingpage').hide();
		$('#createpage').hide();		
		$('#readpage').hide();
		$('#updatedeletepage').show();
	}	
	searchBags(value=""){
		let objects = [];
		let r = this.bags;
		for(let i=0;i<r.length;i++){
			let expr1 = (r[i].Brand.toUpperCase().indexOf(value.toUpperCase()) > -1);
			if(expr1){
				objects.push(r[i]);
			}
		}
		return objects;		
	}
}
class Component extends App{
	constructor(){
		super();
	}
	bagsList(){
		this.render(
			`	      
<div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper">
        <a href="#!" class="brand-logo"></a>
        <ul class="right hide-on-med-and-down">
          <li><a class="" href="#" onclick="component.showLandingPage()">Home</a></li>
          <li><a class="" href="#" onclick="component.showBagsList()">List</a></li>
          <li><a class="" href="#" onclick="component.showBagsCreate()">Create</a></li>
        </ul>
      </div>
    </nav>
  </div>

			  
		
		<div id="landingpage">

		</div>
				
				<div id="createpage" class="container">
					<div class="">
						<div id="bagsCreate"></div>						
					</div>
				</div>
				<div id="readpage" class="">
					<div class="center-align">
						<h1 class="indigo-text text-darken-4"> List</h1>
						<table id="bagsList" class="">
							<div class="">
							    <div class="">
							      <div class="">
									  <span class=""></span>
								</div>
							      <input oninput="component.bagsListInfo(this.value)" type="text" class="" placeholder="Search">
							    </div>
							  </div>
							<tbody id="bagsListInfo"></tbody>
						</table>
					</div>
				</div>
				<div id="updatedeletepage" class="">
					<div id="bagsDetails"></div>
				</div>
				
          
			`
			,document.getElementById('app'));
		this.bagsListInfo();
		$('#landingpage').show();
		$('#createpage').hide();		
		$('#readpage').hide();
	}
	bagsListInfo(filter){
		
		let html = "";
		
		let m = this.searchBags(filter);
		for(let i=0;i<m.length;i++){	
			html += `
				<tr class="indigo-text text-darken-4"><b>
					<td align="center"><img class="" src="${m[i].Img}" width="220" /><td>
					<p><td>${m[i].Brand}</td></P>
					<p><td>${m[i].Color}</td></P>
					<td><button class="waves-effect waves-light btn"  onclick="component.bagsDetails(${i})">Show Details</button></td>
				</b></tr>
			`;
		}
		this.reRender(html,document.getElementById('bagsListInfo'));
	}
	bagsDetails(key){
		this.reRender(
			`
				<h1>Details</h1>
				<div class="font">
				    <div class="">
				        <a href="#">
				            <img class="" src="${this.bags[key].Img}" width="220" />
				        </a>
				    </div>
				    <div class="blue-text text-darken-2" id="bagsDetailsInfo">
				        <h4>${this.bags[key].Brand}</h4>
				        Color: ${this.bags[key].Color}<br/>
						Size: ${this.bags[key].Size}<br/>
						<button class="waves-effect waves-light btn" onclick="component.bagsUpdate(${key})">Update</button>
						<button class="waves-effect waves-light btn" onclick="component.deleteBags(${key})">Delete</button>
						<button class="waves-effect waves-light btn" onclick="component.showBagsList()">Back</button>
					</div>	
				</div>			
			`,document.getElementById('bagsDetails'));
			this.showUpdateDelete();
	}
	bagsCreate(){
		this.render(
			`
			<div class="center-align"
			<br>
			<br>
				<h1 class="indigo-text text-darken-4"> Create</h1>
				Brand: <input class="input-field col s6" id="newBrand" type="" placeholder="Enter Brand" /><br/>
				Color: <input class="input-field col s6" id="newColor" type="" placeholder="Enter Color" /><br/>
				Photo: <input class="input-field col s6" id="newImg" type="" placeholder="Enter Photo" /><br/>
				<br>
				<button class="waves-effect waves-light btn" onclick="component.createBags()">Create</button>
				</div>
			`,document.getElementById('bagsCreate'));
	}
	bagsUpdate(key){
		this.reRender(
			`
				<div class="">
		        	<span class="">
		        		<span>ID</span>
		        	</span>
		        	<input readonly class="" type="text" value="${this.bags[key].id}" /><br/>
		        </div>
		        <br/>
		        <div class="">
		        	<span class="">
		        		<span>Title</span>
		        	</span>
		        	<input class="" id="updateBrand" type="text" value="${this.bags[key].Brand}" /><br/>
		        </div>
		        <br/>
		        <div class="">
		        	<span class="">
		        		<span>Year</span>
		        	</span>
		        	<input class="" id="updateColor" type="text" value="${this.bags[key].Color}" /><br/>
		        </div>
		        <br/>
		        <div class="">
		        	<span class="">
		        		<span>Director</span>
		        	</span>
		        	<input class="" id="updateSize" type="text" value="${this.bags[key].Size}" /><br/>
		        </div>	
		        <br/>
		        <br/>
				<button class="waves-effect waves-light btn" onclick="component.updateBags(${key})">Save</button>
			`,document.getElementById('bagsDetailsInfo'));
	}
	
}
let component = new Component();
component.bagsList();
component.bagsCreate();