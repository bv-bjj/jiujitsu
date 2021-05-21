// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 41.443108, lng: 2.2247149072424826 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  

  

