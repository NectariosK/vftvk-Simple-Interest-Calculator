function compute(){

    var principal = document.getElementById("principal").value;
    if (principal<=0){
      document.getElementById("result").innerHTML = "Please enter a valid amount.";
      return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (parseInt(principal) * parseFloat(rate) * parseInt(years))/100;
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var maturityYear = parseInt(years) + parseInt(year);
    var maturityValue = parseInt(interest) + parseInt(principal);
    var output = "If you deposit " + principal +"<br>at an interest rate of " + rate +"%.<br>You will receive an amount of " + maturityValue + "<br> at year " + maturityYear + ".<br>";
    document.getElementById("result").innerHTML = output;
}
function displayRate(){
    var rate = document.getElementById("rate").value;
    rate += "%";
    document.getElementById("displayRate").innerHTML = rate;
} 