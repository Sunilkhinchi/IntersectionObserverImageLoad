


document.addEventListener("DOMContentLoaded", function(){
    
    const cards = document.querySelectorAll(".card-box");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {
            entry.target.classList.toggle("show", entry.isIntersecting);
            // if(entry.isIntersecting) observer.unobserve(entry.target);
        }),
        {
            threshold:.5,

            
        }
        // console.log(entries);
    });
    
   

    cards.forEach((card)=>{
           observer.observe(card);
    })
  
  });