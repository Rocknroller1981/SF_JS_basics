// Module 5 Task 8 start --------------------------

let bands = new Map();

bands.set("electronic", "The Chemical Brothers");
bands.set("rock", "Metallica");
bands.set("pop", "Madonna");
bands.set("hiphop", "2Pac");

//console.log(bands.size);

for (let genre of bands.keys()) {
    console.log(genre);
}
for (let artist of bands.values()) {
    console.log(artist);
}
for (let playlist of bands) {
    console.log(playlist);
}

// Module 5 Task 8 end --------------------------