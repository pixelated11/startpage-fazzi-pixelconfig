function handleSearch(event) {
  if (event.key === "Enter") {
    const query = document.getElementById("search-input").value.trim();
    if (query) {
      window.location.href = "https://duckduckgo.com/?q=" + encodeURIComponent(query);
    }
  }
}
