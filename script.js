function NightMode() {
    document.body.style.backgroundColor = 'black';
    document.getElementById('content').style.color = 'whitesmoke';
    // Get all anchor elements with a specific class
    var selectedAnchors = document.querySelectorAll('a.content');

    // Iterate through the collection and modify styles
    selectedAnchors.forEach(function (currentAnchor) {
    // Modify the style properties
    currentAnchor.style.color = 'whitesmoke';
  })

    var selectedAnchors = document.querySelectorAll('a.link');

    // Iterate through the collection and modify styles
    selectedAnchors.forEach(function (currentAnchor) {
    // Modify the style properties
    currentAnchor.style.color = 'whitesmoke';
  })

    var selectedAnchors = document.querySelectorAll('div.read-more');

    // Iterate through the collection and modify styles
    selectedAnchors.forEach(function (currentAnchor) {
    // Modify the style properties
    currentAnchor.style.color = 'whitesmoke';
  })

    var selectedAnchors = document.querySelectorAll('div.hidden-block');

    // Iterate through the collection and modify styles
    selectedAnchors.forEach(function (currentAnchor) {
    // Modify the style properties
    currentAnchor.style.color = 'whitesmoke';
  })

    var selectedAnchors = document.querySelectorAll('ul.content');

    // Iterate through the collection and modify styles
    selectedAnchors.forEach(function (currentAnchor) {
    // Modify the style properties
    currentAnchor.style.color = 'whitesmoke';
  })
    var selectedAnchors = document.querySelectorAll('div.profession');

    // Iterate through the collection and modify styles
    selectedAnchors.forEach(function (currentAnchor) {
    // Modify the style properties
    currentAnchor.style.color = 'whitesmoke';
  })

        // Get all anchor elements with a specific class
    var selectedAnchors = document.querySelectorAll('a.content1');

    // Iterate through the collection and modify styles
    selectedAnchors.forEach(function (currentAnchor) {
    // Modify the style properties
    currentAnchor.style.color = 'whitesmoke';

    currentAnchor.addEventListener('mouseover', function () {
        currentAnchor.style.color = "#e30085"
    });

    // Remove the class on mouseout (hover out)
    currentAnchor.addEventListener('mouseout', function () {
        currentAnchor.style.color = "whitesmoke"
    });
  })
}

function LightMode() {
    document.body.style.backgroundColor = 'whitesmoke';
    document.getElementById('content').style.color = 'black';
    // Get all anchor elements with a specific class
    var selectedAnchors = document.querySelectorAll('a.content');

    // Iterate through the collection and modify styles
    selectedAnchors.forEach(function (currentAnchor) {
    // Modify the style properties
    currentAnchor.style.color = 'black';
    });
    var selectedAnchors = document.querySelectorAll('a.link');

    // Iterate through the collection and modify styles
    selectedAnchors.forEach(function (currentAnchor) {
    // Modify the style properties
    currentAnchor.style.color = 'black';
  })

    var selectedAnchors = document.querySelectorAll('div.read-more');

    // Iterate through the collection and modify styles
    selectedAnchors.forEach(function (currentAnchor) {
    // Modify the style properties
    currentAnchor.style.color = 'black';
  })

    var selectedAnchors = document.querySelectorAll('div.hidden-block');

    // Iterate through the collection and modify styles
    selectedAnchors.forEach(function (currentAnchor) {
    // Modify the style properties
    currentAnchor.style.color = 'black';
  })
    var selectedAnchors = document.querySelectorAll('ul.content');

    // Iterate through the collection and modify styles
    selectedAnchors.forEach(function (currentAnchor) {
    // Modify the style properties
    currentAnchor.style.color = 'black';
  })
    var selectedAnchors = document.querySelectorAll('div.profession');

    // Iterate through the collection and modify styles
    selectedAnchors.forEach(function (currentAnchor) {
    // Modify the style properties
    currentAnchor.style.color = 'black';
  })
       // Get all anchor elements with a specific class
    var selectedAnchors = document.querySelectorAll('a.content1');

    // Iterate through the collection and modify styles
    selectedAnchors.forEach(function (currentAnchor) {
    // Modify the style properties
    currentAnchor.style.color = 'black';

    currentAnchor.addEventListener('mouseover', function () {
        currentAnchor.style.color = "#e30085"
    });

    // Remove the class on mouseout (hover out)
    currentAnchor.addEventListener('mouseout', function () {
        currentAnchor.style.color = "black"
    });
})
}

function UltraMode() {
    document.body.style.backgroundColor = '#57068c';
    document.getElementById('content').style.color = 'black';
    // Get all anchor elements with a specific class
    var selectedAnchors = document.querySelectorAll('a.content');

    // Iterate through the collection and modify styles
    selectedAnchors.forEach(function (currentAnchor) {
    // Modify the style properties
    currentAnchor.style.color = 'black';
});
    var selectedAnchors = document.querySelectorAll('a.link');

    // Iterate through the collection and modify styles
    selectedAnchors.forEach(function (currentAnchor) {
    // Modify the style properties
    currentAnchor.style.color = 'black';
  })
    var selectedAnchors = document.querySelectorAll('div.read-more');

    // Iterate through the collection and modify styles
    selectedAnchors.forEach(function (currentAnchor) {
    // Modify the style properties
    currentAnchor.style.color = 'black';
  })

    var selectedAnchors = document.querySelectorAll('div.hidden-block');

    // Iterate through the collection and modify styles
    selectedAnchors.forEach(function (currentAnchor) {
    // Modify the style properties
    currentAnchor.style.color = 'black';
  })
    var selectedAnchors = document.querySelectorAll('ul.content');

    // Iterate through the collection and modify styles
    selectedAnchors.forEach(function (currentAnchor) {
    // Modify the style properties
    currentAnchor.style.color = 'black';
  })
    var selectedAnchors = document.querySelectorAll('div.profession');

    // Iterate through the collection and modify styles
    selectedAnchors.forEach(function (currentAnchor) {
    // Modify the style properties
    currentAnchor.style.color = 'black';
  })
    // Get all anchor elements with a specific class
    var selectedAnchors = document.querySelectorAll('a.content1');

    // Iterate through the collection and modify styles
    selectedAnchors.forEach(function (currentAnchor) {
    // Modify the style properties
    currentAnchor.style.color = 'black';

    currentAnchor.addEventListener('mouseover', function () {
        currentAnchor.style.color = "#e30085"
    });

    // Remove the class on mouseout (hover out)
    currentAnchor.addEventListener('mouseout', function () {
        currentAnchor.style.color = "black"
    });
})
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('function')
  //giving the event as "click", so when the mouse is clicked on the first image with advice called "FirstAdvice", another image with more detailed advice called "FirstAdviceText" appears.
  document.getElementById('read-more-1').addEventListener('click', function() {
      var readMore_1 = document.getElementById('hidden-block-1');
      var readMoreButton = document.getElementById('read-more-1');
  //the conditional to make the second image hide and appear by the click of the mouse. So, if the image "FirstAdviceText" is hidden, with the click of the mouse on the "FirstAdvice" image, it appears and vice versa.
      if (readMore_1.style.display === 'none' || readMore_1.style.display === '') {
          readMore_1.style.display = 'block'; // Show the image "firstframeText"
          readMore_1.style.width = '70%';
          readMore_1.style.margin = 'auto';
          readMoreButton.textContent = 'read less'; // Change button text to "Read Less"
      } else {
          readMore_1.style.display = 'none'; // Hide the image "firstAdviceText"
          readMoreButton.textContent = 'read more'; // Change button text to "Read More"
      }
  });
  document.getElementById('read-more-2').addEventListener('click', function() {
      var readMore_2 = document.getElementById('hidden-block-2');
      var readMoreButton = document.getElementById('read-more-2');
      if (readMore_2.style.display === 'none' || readMore_2.style.display === '') {
          readMore_2.style.display = 'block';
          readMore_2.style.width = '70%';
          readMore_2.style.margin = 'auto';
          readMoreButton.textContent = 'read less'; // Change button text to "Read Less"
      } else {
          readMore_2.style.display = 'none';
          readMoreButton.textContent = 'read more'; // Change button text to "Read More"

      }
  });
  document.getElementById('read-more-3').addEventListener('click', function() {
      var readMore_3 = document.getElementById('hidden-block-3');
      var readMoreButton = document.getElementById('read-more-3');
      if (readMore_3.style.display === 'none' || readMore_3.style.display === '') {
          readMore_3.style.display = 'block';
          readMore_3.style.width = '70%';
          readMore_3.style.margin = 'auto';
          readMoreButton.textContent = 'read less'; // Change button text to "Read Less"
      } else {
          readMore_3.style.display = 'none';
          readMoreButton.textContent = 'read more'; // Change button text to "Read More"

      }
  });
  document.getElementById('read-more-4').addEventListener('click', function() {
      var readMore_4 = document.getElementById('hidden-block-4');
      var readMoreButton = document.getElementById('read-more-4');
      if (readMore_4.style.display === 'none' || readMore_4.style.display === '') {
          readMore_4.style.display = 'block';
          readMore_4.style.width = '70%';
          readMore_4.style.margin = 'auto';
          readMoreButton.textContent = 'read less'; // Change button text to "Read Less"
      } else {
          readMore_4.style.display = 'none';
          readMoreButton.textContent = 'read more'; // Change button text to "Read More"
      }
  });
  document.getElementById('read-more-5').addEventListener('click', function() {
      var readMore_5 = document.getElementById('hidden-block-5');
      var readMoreButton = document.getElementById('read-more-5');
      if (readMore_5.style.display === 'none' || readMore_5.style.display === '') {
          readMore_5.style.display = 'block';
          readMore_5.style.width = '70%';
          readMore_5.style.margin = 'auto';
          readMoreButton.textContent = 'read less'; // Change button text to "Read Less"
      } else {
          readMore_5.style.display = 'none';
          readMoreButton.textContent = 'read more'; // Change button text to "Read More"
      }
  });
  document.getElementById('read-more-6').addEventListener('click', function() {
      var readMore_6 = document.getElementById('hidden-block-6');
      var readMoreButton = document.getElementById('read-more-6');
      if (readMore_6.style.display === 'none' || readMore_6.style.display === '') {
          readMore_6.style.display = 'block';
          readMore_6.style.width = '70%';
          readMore_6.style.margin = 'auto';
          readMoreButton.textContent = 'read less'; // Change button text to "Read Less"
      } else {
          readMore_6.style.display = 'none';
          readMoreButton.textContent = 'read more'; // Change button text to "Read More"
      }
  });
  document.getElementById('read-more-7').addEventListener('click', function() {
      var readMore_7 = document.getElementById('hidden-block-7');
      var readMoreButton = document.getElementById('read-more-7');
      if (readMore_7.style.display === 'none' || readMore_7.style.display === '') {
          readMore_7.style.display = 'block';
          readMore_7.style.width = '70%';
          readMore_7.style.margin = 'auto';
          readMoreButton.textContent = 'read less'; // Change button text to "Read Less"
      } else {
          readMore_7.style.display = 'none';
          readMoreButton.textContent = 'read more'; // Change button text to "Read More"
      }
  });
  document.getElementById('read-more-8').addEventListener('click', function() {
      var readMore_8 = document.getElementById('hidden-block-8');
      var readMoreButton = document.getElementById('read-more-8');
      if (readMore_8.style.display === 'none' || readMore_8.style.display === '') {
          readMore_8.style.display = 'block';
          readMore_8.style.width = '70%';
          readMore_8.style.margin = 'auto';
          readMoreButton.textContent = 'read less'; // Change button text to "Read Less"
      } else {
          readMore_8.style.display = 'none';
          readMoreButton.textContent = 'read more'; // Change button text to "Read More"
      }
  });
  document.getElementById('read-more-9').addEventListener('click', function() {
      var readMore_9 = document.getElementById('hidden-block-9');
      var readMoreButton = document.getElementById('read-more-9');
      if (readMore_9.style.display === 'none' || readMore_9.style.display === '') {
          readMore_9.style.display = 'block';
          readMore_9.style.width = '70%';
          readMore_9.style.margin = 'auto';
          readMoreButton.textContent = 'read less'; // Change button text to "Read Less"
      } else {
          readMore_9.style.display = 'none';
          readMoreButton.textContent = 'read more'; // Change button text to "Read More"
      }
  });
  
});

function showPopup() {
  var popUpOverlay = document.getElementById('popUpOverlay');
    console.log(popUpOverlay); // Check if this logs the correct element
    popUpOverlay.style.display = 'flex';
    // document.getElementById('popupOverlay').style.display = 'flex';
}

function closePopup() {
  var popUpOverlay = document.getElementById('popUpOverlay');
    console.log(popUpOverlay); // Check if this logs the correct element
    popUpOverlay.style.display = 'none';
    // document.getElementById('popupOverlay').style.display = 'none';
}



let lastScrollPosition = 0;
const navBar = document.getElementById('navBar');

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
      console.log('disappear')
        // Scrolling down
        navBar.style.bottom = '-100px';
    } else {
        // Scrolling up
        navBar.style.bottom = '0';
    }

    lastScrollPosition = currentScrollPosition;});

