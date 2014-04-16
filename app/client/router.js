if(Meteor.isClient){
  Router.configure({
    layoutTemplate: "layout",
    loadingTemplate: "loading",
    notFoundTemplate: "404",
    waitOn: function(){
      return [
        Meteor.subscribe("articlesList"),
        Meteor.subscribe("articlesBookmarked"),
        Meteor.subscribe("notes")
      ]
    }
  });

  Router.map(function () {
    this.route("home", {
      path: "/",
      template: "empty"
    });

    this.route("articleItem", {
      path: "/article/:slug",
      template: "articleItem",
      data: function(){
        return Articles.findOne({ slug: this.params.slug })
      }
    });

    this.route("scrollInterception", {
      path: "/scrollInterception",
      template: "scrollInterception"
    });
  });

  Router.onBeforeAction("loading");
}