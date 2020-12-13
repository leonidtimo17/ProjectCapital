function myMap() {
   const mapCanvas = document.getElementById("map");
   const mapOptions = {
      center: new google.maps.LatLng(51.5, -0.2),
      zoom: 10
   };
   var map = new google.maps.Map(mapCanvas, mapOptions);
}

function myFunction() {
   document.getElementById("myDropdown").classList.toggle("show");
}

