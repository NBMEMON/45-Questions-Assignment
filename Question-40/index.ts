function make_album(artist_name :string , album_title :string , tracks? :number){
    let album : {artist :string ,title :string , tracks? :number}={
                       artist : artist_name
                       ,title :album_title
    };

    if (tracks !== undefined){
        album.tracks = tracks
    }
              
     return album;
}

let album1 = make_album("Talha Anjum","Downer At Dusk");

let album2 = make_album("aleemrk","Wake Me Up");

let album3 = make_album("kafi khaleel","Kahani Suno",1)


console.log(album1);
console.log (album2);
console.log(album3);