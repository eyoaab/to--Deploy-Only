console.log("Hello World!");
var Images = [
  "Images/Advanced/image1.png",
  "Images/Advanced/image2.png",
  "Images/Advanced/image3.png",
  "Images/Advanced/image4.png",
  "Images/Advanced/image5.png",
  "Images/Advanced/image6.png",
  "Images/Advanced/image7.png",
  "Images/Advanced/image8.png",
  "Images/Advanced/image9.png",
  "Images/Advanced/image10.png",
  "Images/Advanced/image11.png",
  "Images/Advanced/image12.png",
  "Images/Advanced/image13.png"



];
var Leetcode = [
  'Images/Leetcode/image1.png',
  'Images/Leetcode/image2.png',
  'Images/Leetcode/image3.png',
  'Images/Leetcode/image4.png',
  'Images/Leetcode/image5.png',
  'Images/Leetcode/image6.png',
  'Images/Leetcode/image7.png',
  'Images/Leetcode/image8.png',
  'Images/Leetcode/image9.png'
]
var Car_shiping = [
  'Images/Car shoping project/image1.png',
  'Images/Car shoping project/image2.png',
  'Images/Car shoping project/image3.png',
  'Images/Car shoping project/image4.png',
  'Images/Car shoping project/image5.png',
  'Images/Car shoping project/image6.png'
]
var kattice = [
    'Images/kattice/kattice_profile.png',
    'Images/kattice/image2.png',
    'Images/kattice/image1.png'
  ]

function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}
function changeImage(Images, photoId) {
  var imageElement = document.getElementById(photoId);
  var currentImageSrc = imageElement.src;
  currentImageSrc = currentImageSrc.substring(3, currentImageSrc.length);
  var currentIndex = getRandomInt(Images.length); 
  console.log('current index',currentIndex)
  console.log('length',Images.length)
  imageElement.src = Images[currentIndex];
}
// spiner
document.addEventListener("DOMContentLoaded", function() {
  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
  };

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          } else {
              entry.target.classList.remove('visible'); 
          }
      });
  }, observerOptions);

  document.querySelectorAll('.A').forEach(section => {
      observer.observe(section);
  });
});
/*to the second */
document.addEventListener("DOMContentLoaded", function() {
  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
  };
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible1');
          } else {
              entry.target.classList.remove('visible1');
          }
      });
  }, observerOptions);

  document.querySelectorAll('.B').forEach(section => {
      observer.observe(section);
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
  };
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible2');
          } else {
              entry.target.classList.remove('visible2');
          }
      });
  }, observerOptions);

  document.querySelectorAll('.C').forEach(section => {
      observer.observe(section);
  });
});
/**to the see more option */
function toggleProjectInfo(para,button) {
  const projectInfo = document.getElementById(para);
  const showMoreButton = document.getElementById(button);

  if (projectInfo.classList.contains('expanded')) {
      projectInfo.classList.remove('expanded');
      showMoreButton.textContent = 'Show More';
  } else {
      projectInfo.classList.add('expanded');
      showMoreButton.textContent = 'Show Less';
  }
}

/*to change the themes from black to white */
function changeToWhite() {
    let body = document.body;
    let texts = document.querySelectorAll(".texts");
    texts.forEach(function(text) {
        text.style.color = 'black';
    });
    body.style.backgroundColor = ' #f5f5f5';
}

function changeToBlack() {
    let body = document.body;
    let texts = document.querySelectorAll(".texts");
    let black_btn = document.getElementById("black");
    black_btn.style.boxShadow = "white 3px 5px 15px";
    texts.forEach(function(text) {
        text.style.color = 'white';
    });
    body.style.backgroundColor = 'black';
}
function changeToGray() {
    let body = document.body;
    let texts = document.querySelectorAll(".texts");
    texts.forEach(function(text) {
        text.style.color = 'white';
    });
    body.style.backgroundColor = 'gray';
}
document.getElementById("white").onclick = function() {
    changeToWhite()
};
document.getElementById("black").onclick = function() {
    changeToBlack()
};
document.getElementById("gray").onclick = function() {
    changeToGray()
};






  
 
 
  
 
  
 