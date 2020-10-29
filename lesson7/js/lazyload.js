//get all imgs with data-src attribute
const imagesToLoad = document.querySelectorAll('img[data-src]');

//optional paramteres being set for the IntersectionalObserver
const imgOptions={
    threshold: 0,
    rootMargin: "0px 0px 200px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload=()=> {image.removeAttribute('data-src');};

};

//first check to see if Intersection Observer is supported
if('IntersectionObserver' in window){
    const observer = new IntersectionObserver((items,observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });

    //loop through each img on check status and load if necessary
    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
}

else { //just load ALL images if not supported
    imagesToLoad.forEach((img) =>{
        loadImages(img);
    })
}

loadImages()


/*
const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 200px 0px"
};

const imgObserver = new IntersectionObserver((entries, 
    imgObserver) => {
        entries.forEach(entry =>{
            if (!entry.isIntersecting) {
                return;
             }else {
                 preloadImage(entry.target);
                 imgObserver.unobserve(entry.target);
             
            }
        })

}, imgOptions);

//preloading the images

function preloadImages(img){
    const src= img.getAttribute("data-src");
    if(!src) {
        return;
    }

    img.src = src;
}


images.forEach(image => {
    imgObserver.observe(image);
});
*/