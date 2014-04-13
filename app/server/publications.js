Meteor.publish("articlesList", function(){
  return Articles.find({}, { sort: { timestamp: -1 } });
});

Meteor.publish("articlesBookmarked", function(){
  return Articles.find({ bookmarked: true });
});

Meteor.publish("notes", function(){
  return Notes.find();
});