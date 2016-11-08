(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    /* TODO: Use your DOM skills to reveal only the about section! */
    $('main').hide().not('#about');
  };

  module.aboutController = aboutController;
})(window);
