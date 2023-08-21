


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



    const cardData = [
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image01.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image02.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image03.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image04.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image05.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image06.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image07.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image08.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image09.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image00.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image11.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image12.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image13.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image14.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image15.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image16.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image17.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image18.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image19.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image20.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image21.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image22.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image02.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image04.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image25.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image26.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image27.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image28.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image29.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image30.png",
            title: "Card 1",
            content: "Content for Card 1"
        },

        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image31.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image32.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image33.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image34.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image30.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image36.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image37.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image38.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image39.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image30.png",
            title: "Card 1",
            content: "Content for Card 1"
        },

        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image31.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image32.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image33.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image34.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image35.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image36.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image37.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image38.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image39.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image40.png",
            title: "Card 1",
            content: "Content for Card 1"
        },

        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image41.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image42.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image43.png",
            title: "Card 1",
            content: "Content for Card 1"
        },
        {
            imageUrl: "https://sunilkhinchi.github.io/IntersectionObserverImageLoad/images/lazy-image44.png",
            title: "Card 1",
            content: "Content for Card 1"
        }
        
       
        // Add more card data objects as needed
    ];

    const cardContainer = document.getElementById("card-container");

    for (const card of cardData) {
        const cardBox = document.createElement("div");
        cardBox.className = "card-box";

        const imageBox = document.createElement("div");
        imageBox.className = "image-box";
        const image = document.createElement("img");
        image.className = "image-tag lazy-load";
        image.setAttribute("data-src", card.imageUrl);
        image.alt = "image";
        imageBox.appendChild(image);

        const textBox = document.createElement("div");
        textBox.className = "text-box";
        const title = document.createElement("h2");
        title.textContent = card.title;
        const content = document.createElement("p");
        content.textContent = card.content;
        textBox.appendChild(title);
        textBox.appendChild(content);

        cardBox.appendChild(imageBox);
        cardBox.appendChild(textBox);

        cardContainer.appendChild(cardBox);
    }


    

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