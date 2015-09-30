var openbox = function openbox() {
   var el = document.getElementById('menu');
   var display = getComputedStyle(el).display;
   el.style.display = display === 'none' ? 'block' : 'none';
};
var openMenu = document.getElementById('open-menu');
openMenu.addEventListener("click", openbox );

function ajax_get_json(){
   var results = document.getElementById("results");
   var xhr = new XMLHttpRequest();
   xhr.open("GET", "testTask.json", true);
   xhr.setRequestHeader("Content-type", "application/json", true);
   xhr.onreadystatechange = function() {
      if(xhr.readyState == 4 && xhr.status == 200) {
         var data = JSON.parse(xhr.responseText);
         results.innerHTML = "";
         for(var obj in data){
            results.innerHTML += "<div class='card-item' data-index='" + data[obj].productName + data[obj].productType + "'>" + "<h3>" + data[obj].productName + "</h3>" +
                "<img src='images/img.png' alt=''>" + "<p>" + data[obj].productType + "&nbsp;" + "с id номером" + "&nbsp;" + "<b>" +
                data[obj].productId + "</b>" + "</p>" + "<div class='clearfix'><a href='#' class='card-btn'>купить</a></div>" + "</div>";
         }
      }
   };
   xhr.send(null);
   results.innerHTML = "requesting...";
}
ajax_get_json();

var searchStyle = document.getElementById('search-style');
var searchInput = document.getElementById('search');
var searchBtn = document.getElementById('search-btn');
var searchFunc = function () {
   if (!searchInput.value) {
      searchStyle.innerHTML = '';
      return false;
   }
   searchStyle.innerHTML = '#results div:not([data-index*="' + searchInput.value + '"]) { display: none; }';
};
searchBtn.addEventListener('click', searchFunc);