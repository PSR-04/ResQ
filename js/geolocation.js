if ("geolocation" in navigator) {
  // Geolocation is supported by the browser
  navigator.geolocation.getCurrentPosition(
    function(position) {
      // Success callback
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log("Latitude: " + latitude + ", Longitude: " + longitude);
    },
    function(error) {
      // Error callback
      console.log("Error getting location: " + error.message);
    }
  );
} else {
  // Geolocation is not supported by the browser
  console.log("Geolocation is not supported by your browser");
}