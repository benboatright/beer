// initialize array to store beers
let myLibrary=[];

// function to create beer object
function beer(name, brewery, state, type, rating) {
  this.name = name
  this.brewery = brewery
  this.state = state
  this.type = type
  this.rating = rating
}

//function to add beer
function addBeerToLibrary(beer) {
  myLibrary.push(beer)
}

//add a couple beers to the array before rendering
const quantumHop = new beer('Quantum Hop','Basic City','VA','DIPA','5 Stars')
addBeerToLibrary(quantumHop)
const hopDrone = new beer('Hop Drone', 'Pro Re Nata', 'VA', 'IPA','4 Stars')
addBeerToLibrary(hopDrone)
const iKnow = new beer('I Know, I Know', 'New Anthem', 'NC', 'IPA','4.5 Stars')
addBeerToLibrary(iKnow)


//render the library as card
function renderCard(myLibrary){
  for (i= 0; i < myLibrary.length; i++ ){
    var div = document.createElement('Div')
    div.setAttribute("id","card")
    var p1 = document.createElement('P')
    var p2 = document.createElement('P')
    var p3 = document.createElement('P')
    var p4 = document.createElement('P')
    var p5 = document.createElement('P')
    var button = document.createElement('BUTTON')
    button.setAttribute("id","deleteButton")

    p1.innerText = 'Name: ' + myLibrary[i].name
    p2.innerText = 'Brewery: ' + myLibrary[i].brewery
    p3.innerText = 'State: ' + myLibrary[i].state
    p4.innerText = 'Type: ' + myLibrary[i].type
    p5.innerText = 'Rating: ' + myLibrary[i].rating
    button.innerHTML = 'Delete'
    button.addEventListener("click",function(){div.remove()})

    div.appendChild(p1).appendChild(p2).appendChild(p3).appendChild(p4).appendChild(p5)
    div.append(button)
    div.setAttribute("id","card")
    document.getElementById("container").appendChild(div)
  }
}

renderCard(myLibrary)

// add data entered from ui
function addData(){
  let new_name = document.getElementById('name').value;
  let new_brewery = document.getElementById('brewery').value;
  let new_state = document.getElementById('state').value;
  let new_type = document.getElementById('type').value;
  let new_rating = document.getElementById('rating').value;

  let brew = new beer(new_name,new_brewery,new_state,new_type,new_rating);
  myLibrary.push(brew);

  var div = document.createElement('Div')
  div.setAttribute("id","card")
  var p1 = document.createElement('P')
  var p2 = document.createElement('P')
  var p3 = document.createElement('P')
  var p4 = document.createElement('P')
  var p5 = document.createElement('P')
  var button = document.createElement('BUTTON')
  button.setAttribute("id","deleteButton")

  p1.innerText = 'Name: ' + myLibrary[myLibrary.length -1].name
  p2.innerText = 'Brewery: ' + myLibrary[myLibrary.length -1].brewery
  p3.innerText = 'State: ' + myLibrary[myLibrary.length -1].state
  p4.innerText = 'Type: ' + myLibrary[myLibrary.length -1].type
  p5.innerText = 'Rating: ' + myLibrary[myLibrary.length -1].rating
  button.innerHTML = 'Delete'
  button.addEventListener("click",function(){div.remove()})

  div.appendChild(p1)
  div.appendChild(p2)
  div.appendChild(p3)
  div.appendChild(p4)
  div.appendChild(p5)
  div.appendChild(button)
  document.getElementById("container").appendChild(div)

}

// clear inputs in ui after submission
function clearInputs(){
  document.getElementById('name').value = '';
  document.getElementById('brewery').value='';
  document.getElementById('state').value='';
  document.getElementById('type').value='';
  document.getElementById('rating').value='';
}
