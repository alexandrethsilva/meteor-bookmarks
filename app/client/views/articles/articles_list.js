Template.articlesList.helpers({
  articles: function(){ return Articles.find({ bookmarked: false }, { fields: { content: false } }) }
});

Template.articlesBookmarkedList.helpers({
  articlesBookmarked: function(){ return Articles.find({ bookmarked: true }, { fields: { content: false } }) }
});

Template.articlesList.events({
  "touchstart #list-articles, click #list-articles": function(){
    var column = document.querySelector("#articlesColumn .content-column"),
        articlesHeaderBounds = document.getElementById("list-articles").getBoundingClientRect(),
        bookmarksBounds = column.querySelector(".list-bookmarks-items").getBoundingClientRect(),
        articlesBounds = column.querySelector(".list-articles-items").getBoundingClientRect();

    if (articlesBounds.top < articlesHeaderBounds.bottom) {
      App.Helpers.animateScroll(column, bookmarksBounds.height, 400);
    }
  }
});

Template.articlesBookmarkedList.events({
  "touchstart #list-bookmarks, click #list-bookmarks": function(){
    App.Helpers.animateScroll(document.querySelector("#articlesColumn .content-column"), 0, 400);
  }
});