const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Page Images
let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Navigation 

let navLink = document.querySelectorAll("nav a");

navLink.forEach((item, i) => {
  item.textContent = siteContent["nav"][`nav-item-${i+1}`];
  item.style.color = "green";
});

// Header 

let ctaText = document.querySelector("h1");
ctaText.textContent = siteContent["cta"]["h1"];
// ctaText.fontSize = ;  << what to use here to fix line breaking issue

let ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];

// Section 1 

let sectionTitles = document.querySelectorAll("h4");

// sectionTitles.forEach((item, i) => {
//   if (item[i = 0]) {
//     item.textContent = siteContent["main-content"]["features-h4"];
//   };
  
//   if (item[i = 1]) {
//     item.textContent = siteContent["main-content"]["about-h4"];
//   };

// })

sectionTitles[0].textContent = siteContent["main-content"]["features-h4"];
sectionTitles[1].textContent = siteContent["main-content"]["about-h4"];
sectionTitles[2].textContent = siteContent["main-content"]["services-h4"];
sectionTitles[3].textContent = siteContent["main-content"]["product-h4"];
sectionTitles[4].textContent = siteContent["main-content"]["vision-h4"];
sectionTitles[5].textContent = siteContent["contact"]["contact-h4"];

let sectionContent = document.querySelectorAll(".text-content p");

sectionContent[0].textContent = siteContent["main-content"]["features-content"];
sectionContent[1].textContent = siteContent["main-content"]["about-content"];
sectionContent[2].textContent = siteContent["main-content"]["services-content"];
sectionContent[3].textContent = siteContent["main-content"]["product-content"];
sectionContent[4].textContent = siteContent["main-content"]["vision-content"];

let contactContent = document.querySelectorAll(".contact p");

contactContent[0].textContent = siteContent["contact"]["address"];
contactContent[1].textContent = siteContent["contact"]["phone"];
contactContent[2].textContent = siteContent["contact"]["email"];

let footerContent = document.querySelector("footer p");

footerContent.textContent = siteContent["footer"]["copyright"];