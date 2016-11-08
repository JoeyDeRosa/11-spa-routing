(function(module) {
  var articleView = {};

  articleView.handleAuthorFilter = function() {
    $('#author-filter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $('article[data-author="' + $(this).val() + '"]').fadeIn();
      } else {
        $('article').fadeIn();
        $('article.template').hide();
      }
      $('#category-filter').val('');
    });
  };

  articleView.handleCategoryFilter = function() {
    $('#category-filter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $('article[data-category="' + $(this).val() + '"]').fadeIn();
      } else {
        $('article').fadeIn();
        $('article.template').hide();
      }
      $('#author-filter').val('');
    });
  };
  /* TODO: Done Once the routes are handling '/' and '/about', we can delete
      this handleMainNav function. YESSSS! */

  articleView.setTeasers = function() {
    $('h2').prev('p').remove();
    $('h2').next('p').remove();
    $('.article-body *:nth-of-type(n+2)').hide();
    $('article').on('click', 'a.read-on', function(event) {
      event.preventDefault();
      if($(this).text() === 'Read on →') {
        $(this).parent().find('*').fadeIn();
        $(this).html('Show Less &larr;');
      } else {
        $('body').animate({
          scrollTop: ($(this).parent().offset().top)
        },200);
        $(this).html('Read on &rarr;');
        $(this).parent().find('.article-body *:nth-of-type(n+2)').hide();
      }
    });
  };

  articleView.renderIndexPage = function() {
    $('#ajax-spinner').fadeOut();
    $('#filters').fadeIn();
    Article.allArticles.forEach(function(article){
      $('#articles').append(article.toHtml('#article-template'));
      if($('#category-filter option:contains("'+ article.category + '")').length === 0) {
        $('#category-filter').append(article.toHtml('#category-filter-template'));
      };
      if($('#author-filter option:contains("'+ article.author + '")').length === 0) {
        $('#author-filter').append(article.toHtml('#author-filter-template'));
      };
    });
    /* TODO: Done Remember to also remove any invocations of handleMainNav... */
    articleView.handleCategoryFilter();
    articleView.handleAuthorFilter();
    articleView.setTeasers();
  };
  Article.fetchAll(articleView.renderIndexPage);
  module.articleView = articleView;
})(window);
