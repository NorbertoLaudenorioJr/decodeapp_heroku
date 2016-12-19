"use strict";

class App{
  constructor(){
    this.teams = [
      {
          "id": 1,
          "team": "Wings Gaming",
          "photo": "img/WingsGaming.jpg",
          "player": "shadow, bLink, Faith_bian, y`, iceice" 
        }, 
        {
          "id": 2,
          "team": "Digital Chaos",
          "photo": "img/DigitalChaos.jpg",
          "player": "Resolut1on, w33, MoonMeander, MiSeRy`, Saksa, Blitz, BuLba"
        }, 
        {
          "id": 3,
          "team": "Evil Geniuses",
          "photo": "img/EvilGeniuses.jpg",
          "player": "Arteezy, Suma1L, UNiVeRsE, zai, Cr1t-, Fear"
        },
        {
          "id": 4,
          "team": "Newbee",
          "photo": "img/Newbee.jpg",
          "player": "uuu9, Sccc, kpii, Faith, Kaka"
      },
        {
          "id": 5,
          "team": "EHOME",
          "photo": "img/EHOME.jpg",
          "player": "Sylar, old chicken, eleVen, LaNm, Garder"
        },
        {
          "id": 6,
          "team": "LGD Gaming",
          "photo": "img/LGDGaming.jpg",
          "player": "Ame, Maybe, Jixing, Xz, Victoria"
        },
        {
          "id": 7,
          "team": "OG",
          "photo": "img/og.jpg",
          "player": "N0tail, ana, s4, JerAx, Fly, 7ckingMad"
        },
        {
          "id": 8,
          "team": "MVP Phoenix",
          "photo": "img/MVPPhoenix.jpg",
          "player": "Velo, QO, Forev, Febby, DuBu"
        },
        {
          "id": 9,
          "team": "Team NP",
          "photo": "img/TeamNP.jpg",
          "player": "Aui_2000, EternaLEnVy, MSS, SVG, 1437"
        },
        {
          "id": 10,
          "team": "compLexity Gaming",
          "photo": "img/col.jpg",
          "player": "Moo, canceL^^, monkeys-forever, Zfreek, melonzz"
        },
        {
          "id": 11,
          "team": "LGD.Forever Young",
          "photo": "img/LGDForeverYoung.jpg",
          "player": "END, Super, Yao, xiao8, DDC"
        },
        {
          "id": 12,
          "team": "iG Vitality",
          "photo": "img/igvitality.jpg",
          "player": "Yuno, Sakata, Injuly, BurNIng, Q"
        },
        {
          "id": 13,
          "team": "Ad Finem",
          "photo": "img/adfinem.jpg",
          "player": "Madara, ThuG, SkyLark, Maybe Next Time, SsaSpartan"
        },
        {
          "id": 14,
          "team": "Virtus.pro",
          "photo": "img/virtuspro.jpg",
          "player": "RAMZES666, Noone, 9pasha, Lil, Solo"
        },
        {
          "id": 15,
          "team": "Team Faceless",
          "photo": "img/teamfaceless.jpg",
          "player": "Black^, Jabz, iceiceice, xy-, NutZ"
        },
        {
          "id": 16,
          "team": "WarriorsGaming.Unity",
          "photo": "img/wgunity.jpg",
          "player": "Ahjit, NaNa, KaNG ,Ahfu, xNova-"
      }
    ];
 }

  render(html, component){

    component.innerHTML += html;
  }

  reRender(html, component){

    component.innerHTML = html;
  }

  createTeam(){
    let w = document.getElementById('newTeam');
    let e = document.getElementById('newPhoto');
    let r = document.getElementById('newPlayer');

    let t = {"team":w.value,"photo":e.value,"player":r.value};
    this.teams.push(t);

    w.value = e.value = r.value = '';
    this.teamListInfo();
  }

  deleteTeam(key){    
    let table = document.getElementById('teamListInfo');
    table.deleteRow(key);
    this.teams.splice(key,1);

    let details = document.getElementById('teamDetails');
    details.innerHTML = "";
    
    this.teamListInfo();  
    this.showTeamList();  
  }

  updateTeam(key){
    let t = document.getElementById('updateTeam');
    let a = document.getElementById('updatePlayer');

    let m = this.teams[key];
    let team = {"id":m.id,"team":t.value,"photo":m.photo,"player":a.value};

    this.teams[key] = team;
    let details = document.getElementById('teamDetails');
    details.innerHTML = "";
    
    this.teamListInfo();
    this.showTeamList();
  }

  showLandingPage(){
    $('#landingpage').show();
    $('#createpage').hide();
    $('#readpage').hide();
    $('#updatedeletepage').hide();
  } 

  showTeamList(){
    $('#landingpage').hide();
    $('#createpage').hide();
    $('#readpage').show();
    $('#updatedeletepage').hide();
  }

  showTeamCreate(){
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

  searchTeam(value=""){
    let objects = [];
    let r = this.teams;
    for(let i=0;i<r.length;i++){
      let expr1 = (r[i].team.toUpperCase().indexOf(value.toUpperCase()) > -1);
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

  teamList(){
    this.render(
      `       
      <div class="header clearfix">
              <nav class ="navbar navbar-default navbar-fixed-top">
                <ul class=" nav nav-pills float-xs-left">
                  <li class="nav-item">
                    <a class="nav-link" href="#" onclick="component.showLandingPage()">
            <i class="fa fa-home"></i>
                      <p class = "color-me">Home</p> <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link " href="#" onclick="component.showTeamList()">
            <i class="fa fa-list"></i>
                      <p class = "color-me">Qualifiers</p></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#" onclick="component.showTeamCreate()">
                      <p class = "color-me">Add Team</p></a>
                  </li>
              </ul>
            </nav>            
            </div>

      <div id="landingpage">
        <div class="slideshow-container">
  <div class="mySlides fade">
    <img src="img/ca3.jpg" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="img/ca2.jpg" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="img/ca1.jpg" style="width:100%">
  </div>
  <div class="mySlides fade">
    <img src="img/ca4.jpg" style="width:100%">
  </div>
</div>

<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span> 
  <span class="dot" onclick="currentSlide(2)"></span> 
  <span class="dot" onclick="currentSlide(3)"></span> 
  <span class="dot" onclick="currentSlide(4)"></span> 

</div>       

      </div>
        
      <div id="createpage" class="row marketing">
      <div class="col col-sm-12">
        <div id="teamCreate"></div>           
      </div>
      </div>

      <div id="readpage" class="row marketing">
      <div class="col col-sm-12">
        <h1>Qualifiers</h1>
        <table id="teamList" class="table">
      <div class="form-group">
        <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
      <div class="input-group">
      <div class="input-group-addon">
        <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
        <!-- checkout other fontawesome icons at http://fontawesome.io/icons/ -->
      </div>
        <input oninput="component.teamListInfo(this.value)" type="text" class="form-control" placeholder="Search">
      </div>
      </div>
        <tbody id="teamListInfo"></tbody>
        </table>
      </div>
      </div>

      <div id="updatedeletepage" class="row marketing">
        <div id="teamDetails"></div>
      </div>
        
        <div class="footer">
            <p>
            Dota 2 Boston Major 2016<br>
            Copyright (c) 2016<br>
            Contact Us</p>
        </div>

      `
      ,document.getElementById('app'));
    this.teamListInfo();
    $('#landingpage').show();
    $('#createpage').hide();
    $('#readpage').hide();
    $('#updatedeletepage').hide();

  }

  teamListInfo(filter){
    let html = "";
    let m = this.searchTeam(filter);
    for(let i=0;i<m.length;i++){  
      html += `
        <tr>
          <td align="center"><img class="media-object img-thumbnail" src="${m[i].photo}" width="220" /><td>
          <td id="cssTable"><b>${m[i].team}</b></td>
          <td id="cssTable"><button class="btn btn-primary"  onclick="component.teamDetails(${i})">Show Details</button></td>
        </tr>
      `;
    }
    this.reRender(html,document.getElementById('teamListInfo'));
  }

  teamDetails(key){
    this.reRender(
      `
        <h1>Team Members</h1>
        <div class="media">
            <div class="media-left">
                <a href="#">
                    <img class="media-object img-thumbnail" src="${this.teams[key].photo}" width="220" />
                </a>
            </div>
            <div class="media-body" id="teamDetailsInfo">
            <br>
            <br>
                <h1 class="media-heading">${this.teams[key].team}</h1>
                Players: <b>${this.teams[key].player}<br/></b>
                <br>
                <br>
            <button class="btn btn-primary" onclick="component.teamUpdate(${key})">Update</button>
            <button class="btn btn-primary" onclick="component.deleteTeam(${key})">Delete</button>
            <button class="btn btn-primary" onclick="component.showTeamList()">Back</button>
          </div>  
        </div>      
      `,document.getElementById('teamDetails'));
      this.showUpdateDelete();
  }

  teamCreate(){
    this.render(
      `
        <h1>Team Create</h1>
        Team: <input class="form-control" id="newTeam" type="" placeholder="Enter Team" /><br/>
        Players: <input class="form-control" id="newPlayer" type="" placeholder="Enter Players(Separate Players by comma)" /><br/>
        Team Logo: <input class="form-control" id="newPhoto" type="" placeholder="Enter Logo" /><br/>
        <button class="btn btn-primary" onclick="component.createTeam()">Add Team</button>
      `,document.getElementById('teamCreate'));
  }

  teamUpdate(key){
    this.reRender(
      `
        <div class="input-group input-group-md">
              <span class="input-group-addon">
                <span>ID</span>
              </span>
              <input readonly class="form-control" type="text" value="${this.teams[key].id}" /><br/>
            </div>
            <br/>
            <div class="input-group input-group-md">
              <span class="input-group-addon">
                <span>Team</span>
              </span>
              <input class="form-control" id="updateTeam" type="text" value="${this.teams[key].team}" /><br/>
            </div>
            <br/>
            <div class="input-group input-group-md">
              <span class="input-group-addon">
                <span>Players</span>
              </span>
              <input class="form-control" id="updatePlayer" type="text" value="${this.teams[key].player}" /><br/>
            </div>  
            <br/>
            <button class="btn btn-success btn-block" onclick="component.updateTeam(${key})">Save</button>
      `,document.getElementById('teamDetailsInfo'));
  }  
}

let component = new Component();
component.teamList();
component.teamCreate();

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 5000); // Change image every 2 seconds
}