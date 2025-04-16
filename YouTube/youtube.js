const videoSection = document.querySelector('section');

fetch('https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails&id=UCNfR6RLEa0UFS39oTHC1Rfw&key=AIzaSyA1YjgfdpR7GHwEtva241p4dhcrMmaRDLs')
  .then(res => res.json())
  .then(data => {
    console.log(data); // <-- see what the full response looks like
    if (data.items && data.items.length > 0) {
      console.log(data.items[0]);
    } else {
      console.log("No items found in response.");
    }
  })
  .catch(error => {
    console.error("Fetch error:", error);
  });
