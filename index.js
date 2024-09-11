var data = ["movies/movie1.jpeg", 
    "movies/movie2.jpg", 
    "movies/movie3.jpg", 
    "movies/movie4.jpg", 
    "movies/movie5.jpg",
    "movies/movie6.jpg", 
    "movies/movie7.jpg",
    "movies/movie8.png",
    "movies/movie9.jpg",
    "movies/movie10.jpg"];

var container = document.getElementById('secondcontainer');

function createImageNode(imgSrc) {
  var img = document.createElement('img');
  img.src = imgSrc;
  img.width = 100;  
  img.height = 250;
  img.style.margin = "15px";
  img.style.display = "";
  return img;
}
data.forEach(img =>{
   container.appendChild(createImageNode(img)); 
});

let slider = tns({
    container: ".secondcontainer",
            items: 5,
            slideBy: 1,
            autoplay: true,
            autoplayTimeout: 3000,
            controls: false,
            nav: false,
            autoplayButtonOutput: false,
            speed: 400,
            gutter: 10,
    responsive: {
        responsive: {
            1600: {
                items: 5,
                
            },
            1200: {
                items: 4,
              
            },
            768: {
                items: 3,
               
            },
            480: {
                items: 2,
             
            },
            320: {
                items: 1,
               
            }
        }
    }

    
});document.querySelector('.prev-btn').addEventListener('click', function() {
    slider.goTo('prev');
});

document.querySelector('.next-btn').addEventListener('click', function() {
    slider.goTo('next');
});
