// ==============================
// Counter Animation
// ==============================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {
            counter.innerText = `${Math.ceil(current + increment)}`;
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }

    };

    updateCounter();

});

// ==============================
// Navbar Background on Scroll
// ==============================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 80) {

        navbar.classList.add("shadow");

    } else {

        navbar.classList.remove("shadow");

    }

});

// ==============================
// Scroll To Top Button
// ==============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.cssText = `
position:fixed;
bottom:25px;
right:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#dc3545;
color:white;
font-size:22px;
cursor:pointer;
display:none;
z-index:999;
box-shadow:0 5px 15px rgba(0,0,0,.3);
transition:.3s;
`;

window.addEventListener("scroll", () => {

    if (window.pageYOffset > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// ==============================
// Fade In Animation
// ==============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

const hiddenElements = document.querySelectorAll("section");

hiddenElements.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


// documents
// =====================
// Document Search
// =====================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let filter = this.value.toLowerCase();

        let documents = document.querySelectorAll(".document");

        documents.forEach(doc => {

            let text = doc.innerText.toLowerCase();

            if (text.includes(filter)) {

                doc.style.display = "";

            } else {

                doc.style.display = "none";

            }

        });

    });

}

// photograph

// =====================
// Gallery Filter
// =====================

const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        filterButtons.forEach(b => {
            b.classList.remove("active");
            b.classList.replace("btn-danger","btn-outline-danger");
        });

        btn.classList.add("active");
        btn.classList.replace("btn-outline-danger","btn-danger");

        const filter = btn.dataset.filter;

        galleryItems.forEach(item => {

            if(filter === "all" || item.classList.contains(filter)){
                item.style.display = "block";
            }else{
                item.style.display = "none";
            }

        });

    });

});

// =====================
// Image Preview
// =====================

const images = document.querySelectorAll(".gallery-img");
const modalImage = document.getElementById("modalImage");

images.forEach(img=>{

    img.addEventListener("click",()=>{

        modalImage.src = img.src;

        const modal = new bootstrap.Modal(document.getElementById("imageModal"));

        modal.show();

    });

});

// contact 
// =====================
// Contact Form Validation
// =====================

const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value.trim();
let email=document.getElementById("email").value.trim();
let subject=document.getElementById("subject").value.trim();
let message=document.getElementById("message").value.trim();

if(name==="" || email==="" || subject==="" || message===""){

alert("Please fill up all fields.");

return;

}

let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(emailPattern)){

alert("Enter a valid email.");

return;

}

alert("Message sent successfully!");

contactForm.reset();

});

}