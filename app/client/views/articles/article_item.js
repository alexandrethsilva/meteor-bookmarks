Template.articleItem.helpers({
  article: function(article){ return Articles.find() }
});

Template.articleItem.events({
  "click #bookmarkAdd": function(e){
    Articles.update(
      this._id,
      { $set: { bookmarked: true } },
      function(error){
        if(error) { console.log(error.reason) }
      }
    );
  },
  "click #bookmarkRemove": function(e){
    Articles.update(
      this._id,
      { $set: { bookmarked: false } },
      function(error){
        if(error) { console.log(error.reason) }
      }
    );
  }
});