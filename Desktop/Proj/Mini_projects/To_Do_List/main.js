let inp = document.getElementById("inp");
let submit = document.getElementById("submit");
let result = document.getElementById("result");
let items = document.querySelectorAll("li");
let clear = document.getElementById("Clear");
let listItem = document.querySelectorAll(".listItem");
submit.addEventListener("click", function(){
    let text = inp.value;
    result.innerHTML += "<li class='listItem'>" + text + "<button class='remove'>" + "X" + "</button>" + "</li>" ;
    inp.value = "";
    removeitem();
});
clear.addEventListener("click", function(){
    result.innerHTML = "";
});
 function removeitem(){
    let remove = document.querySelectorAll(".remove");
    for(let i = 0; i < remove.length; i++){
    remove[i].addEventListener("click", function(){
        remove[i].parentElement.remove();
    });
    }
}