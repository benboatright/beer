// initialize array to store vacation
let myLibrary=[];

// function to create vacation object
function vacation(name, state, geography, rating) {
  this.name = name
  this.state = state
  this.geography = geography
  this.rating = rating
}

//function to add vacation
function addVacationToLibrary(vacation) {
  myLibrary.push(vacation)
}

//add a couple vacations to the array before rendering
const kureBeach = new vacation('Kure Beach','VA','Beach','5 Stars')
addVacationToLibrary(kureBeach)
const newYork = new vacation('New York City', 'NY', 'Urban','4 Stars')
addVacationToLibrary(newYork)
const keystone = new vacation('Keystone', 'CO', 'Mountains','5 Stars')
addVacationToLibrary(keystone)


//render the library as card
function renderCard(myLibrary){
  for (i= 0; i < myLibrary.length; i++ ){
    var div = document.createElement('Div')
    div.setAttribute("id","card")
    var p1 = document.createElement('P')
    var p2 = document.createElement('P')
    var p3 = document.createElement('P')
    var p4 = document.createElement('P')
    var button = document.createElement('BUTTON')
    button.setAttribute("id","deleteButton")

    p1.innerText = 'City/Region: ' + myLibrary[i].name
    p2.innerText = 'State: ' + myLibrary[i].state
    p3.innerText = 'Geography: ' + myLibrary[i].geography
    p4.innerText = 'Rating: ' + myLibrary[i].rating
    button.innerHTML = 'Delete'
    button.addEventListener("click",function(){this.parentNode.remove()})

    div.appendChild(p1).appendChild(p2).appendChild(p3).appendChild(p4)
    div.append(button)
    div.setAttribute("id","card")
    document.getElementById("container").appendChild(div)
  }
}

renderCard(myLibrary)

// add data entered from ui
function addData(){
  let new_name = document.getElementById('name').value;
  let new_state = document.getElementById('state').value;
  let new_geography = document.getElementById('geography').value;
  let new_rating = document.getElementById('rating').value;

  let vaca = new vacation(new_name,new_state,new_geography,new_rating);
  myLibrary.push(vaca);

  var div = document.createElement('Div')
  div.setAttribute("id","card")
  var p1 = document.createElement('P')
  var p2 = document.createElement('P')
  var p3 = document.createElement('P')
  var p4 = document.createElement('P')
  var button = document.createElement('BUTTON')
  button.setAttribute("id","deleteButton")

  p1.innerText = 'Name: ' + myLibrary[myLibrary.length -1].name
  p2.innerText = 'State: ' + myLibrary[myLibrary.length -1].state
  p3.innerText = 'Geography: ' + myLibrary[myLibrary.length -1].geography
  p4.innerText = 'Rating: ' + myLibrary[myLibrary.length -1].rating
  button.innerHTML = 'Delete'
  button.addEventListener("click",function(){this.parentNode.remove()})

  div.appendChild(p1)
  div.appendChild(p2)
  div.appendChild(p3)
  div.appendChild(p4)
  div.appendChild(button)
  document.getElementById("container").appendChild(div)

}

// clear inputs in ui after submission
function clearInputs(){
  document.getElementById('name').value = '';
  document.getElementById('state').value='';
  document.getElementById('geography').value='';
  document.getElementById('rating').value='';
}
