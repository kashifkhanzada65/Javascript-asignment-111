var parent = document.getElementById("parent")
 

function addnotes(){
    console.log("jjjjj");
    
    var input = document.getElementById("input")
    // validation
    if(input.value.length < 5){
        alert("invalid notes")
        return
    }



var cardUi = `<div class="card" style="width: 18rem;">
  <img src="https://picsum.photos/400/200" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"> ${ input.value}</h5>
    <button class="btn btn-info" 
    onclick ="edittodo(this)">Edit</button>
    <button class="btn btn-danger"
    onclick = "deleteAll(this)">Delete
    </button>
  </div>
</div>`

parent.innerHTML += cardUi
input.value = ""
}

function deleteAll(deletebtn){
    deletebtn.parentNode.parentNode.remove()
}

function edittodo(editbtn){
  var edittt = prompt("enter your option" , editbtn.previousElementSibling.innerHTML)
 editbtn.previousElementSibling.innerHTML = edittt
}

function deleteall(){
  parent.innerHTML = ""
}
