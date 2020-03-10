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
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav
let navItems = document.querySelectorAll('a');
navItems[0].textContent = siteContent['nav']['nav-item-1'];
navItems[1].textContent = siteContent['nav']['nav-item-2'];
navItems[2].textContent = siteContent['nav']['nav-item-3'];
navItems[3].textContent = siteContent['nav']['nav-item-4'];
navItems[4].textContent = siteContent['nav']['nav-item-5'];
navItems[5].textContent = siteContent['nav']['nav-item-6'];
//forEach method that style nav links color
navItems.forEach(linkText => {
  linkText.style.color = 'slateGray';
});

let nav = document.querySelector('nav');
//first new nav link with styling
const newNav1 = document.createElement("a");
newNav1.textContent = 'Prepend';
nav.prepend(newNav1);
newNav1.style.cursor = 'pointer';
newNav1.style.color = 'slateGray';
//second new nav link with styling
const newNav2 = document.createElement('a');
newNav2.textContent = 'Append';
nav.appendChild(newNav2);
newNav2.style.cursor = 'pointer';
newNav2.style.color = 'slateGray';

//CTA
//CTA IMG attribute set
let circleImg = document.getElementById('cta-img');
circleImg.setAttribute('src', siteContent['cta']['img-src']);
//H1 using innerHTML
let ctaH1 = document.querySelector('h1');
ctaH1.innerHTML = siteContent['cta']['h1'].split(' ').join('<br>');
//button
let ctaGetStartedButton = document.querySelector('button');
ctaGetStartedButton.innerHTML = siteContent['cta']['button'];

//Middle Img attribute and styling
let middleBannerImg = document.getElementById('middle-img');
middleBannerImg.setAttribute('src', siteContent['main-content']['middle-img-src'])
