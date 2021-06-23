// Clicks the grailed tab by default when the DOM loads
document.addEventListener("DOMContentLoaded", () => {
document.getElementById("grailedtab").click();
});

/*
  Simulates the functionality of a tab by displaying content
  specific to the tab selected and hiding the unecessary content.

  Highlights the current tab.

  Calls clearForm method to clear the contents of the form each time the tab is changed.

  @param storeName  the name of the store (grailed or depop) that will determine what is displayed
  @ param tab the selected tab
*/
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
    document.getElementById("grailedfeeinfo").style.display = "block";
    document.getElementById("depopfeeinfo").style.display = "none";

  }
  else{
    document.getElementById("radio-container").style.display = "none";
    document.getElementById("calcbutton").style.display = "none";
    document.getElementById("calcbutton2").style.display = "block";
    document.getElementById("grailedfeeinfo").style.display = "none";
    document.getElementById("depopfeeinfo").style.display = "block";

  }

  clearForm();
  }

// clears the form content
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

/*
  Calulates the seller commission fees, PayPal fees and total profit based on the form input.

  Calls the validateForm method and if it returns false it stops the execution of the function.

  @param storeName  the name of the store (grailed or depop) that will determine
  how the fees and profit is calculated.
*/
  function calculateFees(storeName){

    if(validateForm(storeName) == false){
      return;
    }
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

    var total = parseFloat(listPrice) + parseFloat(shipCost);
    sellerFeeResult = total * parseFloat(sellerFee);
    paypalFeeResult = total * parseFloat(paypalFee) + 0.30;
    totalProfit = total - sellerFeeResult - paypalFeeResult;

    document.getElementById("sfeesresult").textContent = sellerFeeResult.toFixed(2);
    document.getElementById("pfeesresult").textContent = paypalFeeResult.toFixed(2);
    document.getElementById("profitresult").textContent = totalProfit.toFixed(2);
  }

// validates user input
function validateForm(storeName){
  if(document.getElementById("listprice").value == ""){
    alert("Please enter a listing price");
    return false;
  }
  else if(document.getElementById("shipcost").value == ""){
    alert("Please enter a shipping cost");
    return false;
  }
  if(storeName == "grailed"){
    if(document.getElementById("domestic").checked == false &&
    document.getElementById("international").checked == false){
      alert("Please select the transaction location");
      return false;
  }
  }
}

/*
      TODO:
      Style the application better
*/
