Meteor.publish("articlesList", function(){
  return Articles.find();
});

Meteor.publish("articlesBookmarked", function(){
  return Articles.find({ bookmarked: true });
});