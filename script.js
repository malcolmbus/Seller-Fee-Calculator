document.addEventListener("DOMContentLoaded", () => {
document.getElementById("default").click();
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
  }

  // function calculateFees(listPrice, shipCost, currency, translocation){
  //   var sellerFee = 0;
  //   var paypalFee = 0;
  //   var currencySymbol, sellerFeeResult, var paypalFeeResult, var totalProfit;
  //
  //   var grailed = document.getElementById("default");
  //   var depop = document.getElementById("tab1");
  //
  //   if(grailed.hasFocus()) {
  //     sellerFee = 0.09;
  //     if(document.getElementById("domestic").checked) {
  //       paypalFee = 0.029 + 0.30;
  //     }
  //     else if(document.getElementById("international").checked) {
  //       paypalFee = 0.44 + 0.30;
  //     }
  //   }
  //   else if(depop.hasFocus()) {
  //     sellerFee = 0.1;
  //     payPalFee = 0.029 + 0.30;
  //   }
  //
  //
  //
  //   if(currency == "USD"){
  //     currencySymbol = "$";
  //   }
  //   else if(currency == "GBP"){
  //     currencySymbol = "£";
  //   }
  //   else if(currency == "CAD"){
  //     currencySymbol = "CAD";
  //   }
  //
  //   sellerFeeResult = listPrice - shipCost * sellerFee;
  //
  // }

  //add a description of the fees below the form to be changed on each page
  //hide radio buttons when the depop tab is clicked
