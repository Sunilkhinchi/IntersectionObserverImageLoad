


document.addEventListener("DOMContentLoaded", function(){
    
    // const cards = document.querySelectorAll(".card-box");

    // const observer = new IntersectionObserver((entries) => {

    //     entries.forEach((entry) => {
    //         entry.target.classList.toggle("show", entry.isIntersecting);
    //         // if(entry.isIntersecting) observer.unobserve(entry.target);
    //     }),
    //     {
    //         threshold:.5,

            
    //     }
    //     // console.log(entries);
    // });
    // cards.forEach((card)=>{
    //        observer.observe(card);
    // })


    

let lazyImages = document.querySelectorAll(".image-tag.lazy-load");

let lazyImageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let lazyImage = entry.target;
            console.log(entry);
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazy-load");
            lazyImageObserver.unobserve(lazyImage);
        }
    });
});

lazyImages.forEach(lazyImage => {
    lazyImageObserver.observe(lazyImage);
});
  
  });