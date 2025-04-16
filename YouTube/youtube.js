const videoSection = document.querySelector('section');
require('dotenv').config();//require in the dotenv package
//bring in the environment variables
const apiKey = process.env.YOUTUBE_API_KEY; 
const videoId = process.env.YOUTUBE_VIDEO_ID;
//use string interpolation to create the URL with the videoId and apiKey
const url = `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoId}&key=${apiKey}`;
console.log("Fetching from URL:", url);
//updated your function to use async/await for clarity lol 
const videoFetch = async () => {
  if (!videoId || !apiKey) {
    throw new Error("Missing YOUTUBE_VIDEO_ID or YOUTUBE_API_KEY in environment variables"); //throws an error if the variables are not found
  }

  try {
    const res = await fetch(url); //fetch to the URL
    const data = await res.json(); //parse the response as JSON
    console.log('This is the data!', data);  // see what the full response looks like

    if (data.items && data.items.length > 0) { 
      console.log(data.items[0]);
    } else {
      console.log("No items found in response.");
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

videoFetch(); // <-- don’t forget to call the function
