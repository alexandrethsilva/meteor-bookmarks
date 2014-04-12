Template.articlesList.helpers({
  articles: function(){ return Articles.find({}, { fields: { content: false } }) }
});

Template.articlesList.events({
  "click a": function(e){
    Session.set("viewTitle", this.title);
  }
});