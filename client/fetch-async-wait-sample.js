/* Make an ajax request using fetch function */

// function fetchAlbums() {
//   fetch('http://rallycoding.herokuapp/api/music/albums')
//     .then(res => res.json())
//     .then(json => console.log(json));
// }
// fetchAlbums();

/* Using async await syntax instead */
const fetchAlbums = async () => {
  const res = await fetch('http://rallycoding.herokuapp/api/music/albums');
  const json = await res.json();
  console.log(json);
};
fetchAlbums();
