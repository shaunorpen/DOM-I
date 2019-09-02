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

// Add all the navigation links to the top of the page
document.querySelectorAll('nav a').forEach(
  (item, index) => item.textContent = Object.values(siteContent.nav)[index]
);

// Set CTA image
document.getElementById('cta-img').setAttribute('src', siteContent.cta["img-src"]);

// Set CTA h1 text
document.getElementsByTagName('h1')[0].textContent = siteContent.cta.h1;

// Set CTA button text
document.getElementsByTagName('button')[0].textContent = siteContent.cta.button;

// Set main-content image
document.getElementById('middle-img').setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Set main-content h4 and p content

function findValueBySuffix(object, suffix) {
  result = [];
  for (var property in object) {
    if (object.hasOwnProperty(property) && 
       property.toString().endsWith(suffix)) {
       result.push(object[property]);
    }
  }
  return result;
}

document.querySelectorAll('.text-content h4').forEach(
  (item, index) => item.textContent = findValueBySuffix(siteContent["main-content"], 'h4')[index]
);

document.querySelectorAll('.text-content p').forEach(
  (item, index) => item.textContent = findValueBySuffix(siteContent["main-content"], 'content')[index]
);

// Set contact details
document.querySelector('.contact h4').textContent = siteContent.contact["contact-h4"];

document.querySelectorAll('.contact p').forEach(
  (item, index) => item.textContent = Object.values(siteContent.contact)[index + 1]
);