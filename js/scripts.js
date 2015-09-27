$(document).ready(function(){
 
  // Navigation
 
  var $menuIcon = $('.menu-icon'),
      $navigation = $('.navigation'),
      $mainNavigation = $('.main-navigation'),
      $navigationLink = $('.main-navigation a');
 
  $(window).scroll(function() {
    if(window.scrollY > window.outerHeight) {
      $menuIcon.addClass('active');
    } else {
      $menuIcon.removeClass('active');
    }
  });
 
  $menuIcon.click(function(e) {
    e.preventDefault();
 
    $navigation.toggleClass('active');
  });
    
 // Single Page Nav
  $mainNavigation.singlePageNav({
    filter: ':not(.external)',
    speed: 1000,
    currentClass: 'current',
    easing: 'swing',
    updateHash: false,
    beforeStart: function() {
    },
    onComplete: function() {
      $navigation.removeClass('active');
    }
  });
    
// Hero maintains window height    
    var $heroContainer = $('.hero');
 
    $heroContainer.height(window.innerHeight);
    
    $(window).resize(function() {
        $heroContainer.height(window.innerHeight);
});
 
window.sr = new scrollReveal();
    
    $("#first-image").click(function() {
   $(this).attr('width', '100%');
    $(this).attr('height', 'auto');
});
});
