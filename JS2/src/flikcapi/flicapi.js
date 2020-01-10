export default class flickr {};


let key = "3627815ee4266380dc1e39b206346da1";
let src = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=`;
// let search = document.getElementById("search").value;
let search = document.getElementById("t5");

search.oninput = function() {
    fetch(src+key+'&tags='+search.value+'&per_page=8&page=1&format=json&nojsoncallback=1')
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);

            let picArr = data.photos.photo.map((pic) =>{
                let Path = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
                return `<div class= "flickr_img"><img src=${Path}></div>`;
            });
            let image = '';
            for (let pic of picArr){
                image += pic;
            }

            document.getElementById("outputDiv").innerHTML = image;
        })
        .catch((data) => {console.log(Error, data)});
};
// document.getElementById('submit').onclick = jsonFlickr;
