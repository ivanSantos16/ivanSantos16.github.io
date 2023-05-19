// document.getElementById("button").addEventListener("click", 
//     function(){
//         console.log("click");
//         document.querySelector(".bg-modal").style.display = "flex";
//         document.querySelector("body").style.overflow = "hidden";
//     }
// );

// document.querySelector(".icon-button-close-modal").addEventListener("click",
//     function(){
//         document.querySelector(".bg-modal").style.display = "none";
//         document.querySelector("body").style.overflow = "auto";
//     }
// );


// // Get modal number 1 element
// const modal = document.getElementById('.modal-one');
// // All page modals
// var modals = document.querySelectorAll('.bg-modal');
// // Get open modal button
// const openModalBtn = document.querySelectorAll('.buton');
// // Get close button
// const closeModalBtn = document.getElementsByClassName('icon-button-close-modal');

// // Listen 	for OPEN Click
// openModalBtn.forEach(function(e) {
//     e.addEventListener('click', openModal);
// })

// // Listen for CLOSE Click
// closeModalBtn.forEach(function(e) {
//     e.addEventListener('click', closeModal);
// })

// // Listen for outside Click
// window.addEventListener('click', outsideClick);

// // Function to open modal
// function openModal() {
//     console.log("click");
//     document.querySelector(".bg-modal").style.display = "flex";
//     document.querySelector("body").style.overflow = "hidden";

// document.getElementById("button").addEventListener("click", 
//     function(){
//         console.log("click");
//         document.querySelector(".bg-modal").style.display = "flex";
//         document.querySelector("body").style.overflow = "hidden";
//     }
// );

// document.querySelector(".icon-button-close-modal").addEventListener("click",
//     function(){
//         document.querySelector(".bg-modal").style.display = "none";
//         document.querySelector("body").style.overflow = "auto";
//     }
// );

const openModalBtns = document.querySelectorAll('[data-target]');
const closeModalBtns = document.querySelectorAll('.icon-button-close-modal');

openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft =
            window.pageXOffset || document.documentElement.scrollLeft,
        
        document.body.style.overflow = "hidden";
                // if any scroll is attempted,
                // set this to the previous value
                window.onscroll = function() {
                    window.scrollTo(scrollLeft, scrollTop);
                };
        
        document.querySelector(btn.dataset.target).classList.add('active');
        // Reset scroll for all modals
        document.querySelectorAll(".modal-containerbody").forEach(function(modal) {
            modal.scrollTop = 0;
        });
        console.log('open modal')
    });
});

closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        window.onscroll = function() {};
        document.querySelector(btn.dataset.target).classList.remove('active');
        document.body.style.position = "static";
        document.body.style.overflow = "auto";
    });
});    