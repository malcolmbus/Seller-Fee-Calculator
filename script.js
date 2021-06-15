document.addEventListener("DOMContentLoaded", () => {
document.getElementById("grailedtab").click();
});

function openTab(storeName, tab){
  var storeTitle, tabs, i;

  storeTitle = document.getElementsByClassName("storetitle");
  for(i = 0; i < storeTitle.length; i++){
    storeTitle[i].style.display = "none";
  }

  tabs = document.getElementsByClassName("tab");
  for(i = 0; i < tabs.length; i++){
    tabs[i].style.backgroundColor = "";
    tabs[i].style.color = "";
  }

  document.getElementById(storeName).style.display = "block";
  tab.style.backgroundColor = "#a0a0a0";
  tab.style.color = "#fff";

  if(storeName == "grailed"){
    document.getElementById("radio-container").style.display = "block";
    document.getElementById("calcbutton").style.display = "block";
    document.getElementById("calcbutton2").style.display = "none";
  }
  else{
    document.getElementById("radio-container").style.display = "none";
    document.getElementById("calcbutton").style.display = "none";
    document.getElementById("calcbutton2").style.display = "block";
  }

  clearForm();
  }

  function clearForm(){
    document.getElementById("listprice").value = "";
    document.getElementById("shipcost").value = "";
    document.getElementById("sfeesresult").textContent ="--";
    document.getElementById("pfeesresult").textContent = "--";
    document.getElementById("profitresult").textContent = "--";
    var selectedradio = document.getElementsByName("location");
    for(var i = 0; i < selectedradio.length; i++){
      selectedradio[i].checked = false;
    }
  }

  function calculateFees(storeName){
    var listPrice = document.getElementById("listprice").value;
    var shipCost = document.getElementById("shipcost").value;
    var sellerFee;
    var paypalFee;
    var currencySymbol, sellerFeeResult, paypalFeeResult, totalProfit;
    var grailed = document.getElementById("grailed");
    var depop = document.getElementById("depop");

    if(storeName == "grailed"){
      sellerFee = 0.09
      if(document.getElementById("domestic").checked){
        paypalFee = 0.029;
      }
      else if(document.getElementById("international").checked){
        paypalFee = 0.044;
      }
    }
    else if(storeName == "depop"){
      sellerFee = 0.1;
      paypalFee = 0.029;
    }

    sellerFeeResult = parseFloat((listPrice - shipCost) * sellerFee);
    paypalFeeResult = parseFloat((listPrice - shipCost) * paypalFee + 0.30);
    totalProfit = parseFloat(listPrice - sellerFeeResult - paypalFeeResult);

    document.getElementById("sfeesresult").textContent = sellerFeeResult.toFixed(2);
    document.getElementById("pfeesresult").textContent = paypalFeeResult.toFixed(2);
    document.getElementById("profitresult").textContent = totalProfit.toFixed(2);
  }
