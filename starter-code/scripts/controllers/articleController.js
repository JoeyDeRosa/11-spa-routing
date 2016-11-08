(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    /* TODO: Use your DOM skills to reveal only the articles section! */
    $('#articles').show();
  };

  module.articleController = articleController;
})(window);
