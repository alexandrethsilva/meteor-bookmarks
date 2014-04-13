if(Meteor.isClient){
  Router.configure({
    layoutTemplate: "layout",
    loadingTemplate: "loading",
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
      template: "layout"
    });

    this.route("articleItem", {
      path: "/article/:slug",
      template: "articleItem",
      data: function(){
        return Articles.findOne({ slug: this.params.slug })
      }
    });
  });

  Router.onBeforeAction("loading");
}