function openTab(tabName){
  var storetitle, i;

  storetitle = document.getElementsByClassName("storetitle");
  for(i = 0; i < storetitle.length; i++){
    storetitle[i].style.display = "none";
  }

  document.getElementById(tabName).style.display = "block";
  }
