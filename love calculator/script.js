

var element = document.getElementById("myBtn");
element.addEventListener("click", function() {
      var loveScore = Math.floor( Math.random()*100 + 1);
    if(loveScore==100){
      alert("your love score is " + loveScore + "%.     You are best for each other. Your love is like SHAHJAHAN AND MUMTAZMAHAL")
    }
    else if(loveScore<100 && loveScore>70){
      alert("Your love score is " + loveScore + "%.    You are perfect to each other. your love is like milk and water.");
    }
    else if(loveScore<70 && loveScore>40){
      alert("your love score is " + loveScore + "%.    You have a good match to each other. You should to understand the feelings of each other for a better ralationship.");
    }
    else if (loveScore<40 && loveScore>10){
      alert("Your love score is " + loveScore + "%.     You have a little match to each other . " );
    }
    else{
      alert("Your love score is" + lovescore + "%.   There is no match between you and your crush.you are just like oil and water.")
    }
    
});