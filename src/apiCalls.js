export const fetchData = () => {
  return fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=tp7wVrjLK4k98bbfuC5GNU05cFGW8rVA")
  .then(response => response.json())
}