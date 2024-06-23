let note = document.getElementById("note");
let date = document.getElementById("date");
let Amount = document.getElementById("Amount");

let expense = document.querySelector(".expense");

let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    if(note.value.trim() !== "" && date.value.trim() !== "" && Amount.value.trim() !== ""){
    expense.innerHTML += `<tr>
    <td>${note.value}</td>
    <td>${date.value}</td>
    <td>$${Amount.value}</td>
    <td><button class="remove">X</button></td>
    </tr>`

    note.value = "";
    date.value = "";
    Amount.value = "";

    remove();
}
else {
    alert("Please fill in all the inputs");
}
});

function remove(){
    let btnremove = document.querySelectorAll(".remove");
    for(let i = 0; i < btnremove.length; i++){
        btnremove[i].addEventListener("click", function(){
            btnremove[i].parentElement.parentElement.remove();
        });
    }
}
remove();