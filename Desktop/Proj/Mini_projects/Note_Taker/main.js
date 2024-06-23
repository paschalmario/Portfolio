let note = document.querySelector("#Note");
let btn = document.getElementById("btn");
let results = document.querySelector(".results");
let showbtn = document.querySelectorAll(".showBtn"); 

let i = 1
btn.addEventListener("click", function(){
      let text = note.value;
      if(text.length > 30){
      text = text.substr(0, 30);
      results.innerHTML += 
     "<div class='resultItems'>" +
     "<h2>" + "Note " + i + "</h2>" +
     "<p>"+ text + "..."+"</p>" +
     "<button class='showBtn'>" + "view detail" + "</button>" + "</div"; 
     i++;}
     else {
      results.innerHTML += 
     "<div class='resultItems'>" +
     "<h2>" + "Note " + i + "</h2>" +
     "<p>"+ text +"</p>" +
     "<button class='showBtn'>" + "view detail" + "</button>" + "</div"; 
     i++;
     }
});
showbtn.addEventListener("click", function(){
      
});
