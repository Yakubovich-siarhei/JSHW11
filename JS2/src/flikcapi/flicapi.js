export default class flickr {};

// // // 'https://www.flickr.com/services/feeds/photos_public.gne?tags='
// // // +document.getElementById("search").value+'&format=json&jsoncallback=1'
// var key = "3627815ee4266380dc1e39b206346da1";
// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": 'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='
//      +key+'&tags=minsk&per_page=5&format=json&nojsoncallback=1',
//   "method": "GET",
//   "headers": {},
//   mode: "no-cors" 
// }

// $.ajax(settings).done(function (data) {
//   console.log(data);



// $("#galleryTitle").append(data.photos.photo[0].title + " Gallery");
//     	$.each( data.photos.photo, function( _i, gp ) {

// var farmId = gp.farm;
// var serverId = gp.server;
// var id = gp.id;
// var secret = gp.secret;

// console.log(farmId + ", " + serverId + ", " + id + ", " + secret);

// //  https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

// $("#flickr").append('<img src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"/>');

// });
// });




// 'https://www.flickr.com/services/feeds/photos_public.gne?tags=soccer&format=json&jsoncallback=?'



function JavaScriptFetch () {
fetch('https://www.flickr.com/services/feeds/photos_public.gne?tags='
 +document.getElementById("search").value+'&format=json&jsoncallback=?')
.then(function (resp) {return resp.json() })
.then(function (data) {
  console.log(data); })
    .catch(function () {
 //Обрабатываем ошибки
    });
  };
  document.getElementById('submit').onclick = JavaScriptFetch;


  

// function JavaScriptFetch() {
 
//     let script = document.createElement('script');
//     // let key = "3627815ee4266380dc1e39b206346da1";
//     script.src = 'https://www.flickr.com/services/feeds/photos_public.gne?tags='
//     +document.getElementById("search").value+'&format=json&jsoncallback=?';
    
//     // document.getElementById('weathers').appendChild(script); 
//     console.log(data);
//     // function jsonFlickrFeed(data) {
//     // let image = "";
//     // data.items.forEach(function (element) {
//     // image += "<img src=\"" + element.media.m + "\"/>";
//     // });
//     // 
//     // document.getElementById("outputDiv").innerHTML = image;
//     // }
//     // jsonFlickrFeed();
//     }
    
//     document.getElementById('submit').onclick = JavaScriptFetch;
      
  