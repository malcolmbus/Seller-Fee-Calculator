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
  }
  else{
    document.getElementById("radio-container").style.display = "none";
  }
  clearForm();
  }

  function clearForm(){
    document.getElementById("listprice").value = "";
    document.getElementById("shipcost").value = "";
  }

  // function calculateFees(listPrice, shipCost, currency, translocation){
  //   var sellerFee;
  //   var paypalFee;
  //   var currencySymbol, sellerFeeResult, paypalFeeResult, totalProfit;
  //   var grailed = document.getElementById("grailed");
  //   var depop = document.getElementById("depop");
  //
  //   if(grailed.style.display = "block"){
  //     sellerFee = 0.09;
  //     if(document.getElementById("domestic").checked){
  //       paypalFee = 0.029 + 0.30;
  //     }
  //     else if(document.getElementById("international").checked){
  //       paypalFee = 0.44 + 0.30;
  //     }
  //   }
  //   else if(depop.style.display = "block"){
  //     sellerFee = 0.1;
  //     payPalFee = 0.029 + 0.30;
  //   }
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
  //   paypalFeeResult = listPrice - shipCost * payPalFee;
  //   totalProfit = listPrice - sellerFeeResult - paypalFeeResult;
  //
  //   document.getElementById("sfeesresult").innerHTML = sellerFeeResult;
  //   document.getElementById("pfeesresult").innerHTML = payPalFeeResult;
  //   document.getElementById("profitresult").innerHTML = currencySymbol + " " + totalProfit;
  // }

//   var listPrice = document.getElementById("listprice").value;
//   var shipCost = document.getElementById("shipcost").value;
//   var currency = document.getElementById("currency").selectedIndex.value;
//   var transLocation;
//   if(document.getElementById("domestic").checked){
//     transLocation = document.getElementById("domestic").value;
//   }
//   else if(document.getElementById("international").checked){
//     transLocation = document.getElementById("international").value;
//   }
//
//   document.getElementById("calcbutton")
//   .addEventListener("click", calculateFees(listPrice, shipCost, currency, transLocation));
// }




                          /*TO DO*/
  // add a description of the fees below the form to be changed on each page
  // add a clear button ?
