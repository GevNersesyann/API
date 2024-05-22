document.getElementById("searchBtn").addEventListener("click", function () {
  const searchTerm = document.getElementById("searchInput").value;
  const apiKey = "WiH7eGxhlfAF4OEzSM3ZBGWYnYPYMPSn";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=10&offset=0&rating=g&lang=en`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const gifsContainer = document.getElementById("gifsContainer");
      gifsContainer.innerHTML = "";

      data.data.forEach((gif) => {
        const gifElement = document.createElement("img");
        gifElement.className = "gif";
        gifElement.src = gif.images.fixed_height.url;
        gifsContainer.appendChild(gifElement);
      });
    })
    .catch((error) => {
      console.error("Error fetching the GIFs:", error);
    });
});
