function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Talha Anjum", "Downer At Dusk");
var album2 = make_album("aleemrk", "Wake Me Up");
var album3 = make_album("kafi khaleel", "Kahani Suno", 1);
console.log(album1);
console.log(album2);
console.log(album3);
