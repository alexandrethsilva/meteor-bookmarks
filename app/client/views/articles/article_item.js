Template.articleItem.helpers({
  article: function(article){ return Articles.find() },
  notes: function(){ return Notes.find({ articleId: this._id }) }
});

Template.articleItem.events({
  "click #bookmarkAdd": function(e){
    Articles.update(
      this._id,
      { $set: { bookmarked: true } },
      function(error){
        if (error) { console.log(error.reason) }
      }
    );
  },
  "click #bookmarkRemove": function(e){
    Articles.update(
      this._id,
      { $set: { bookmarked: false } },
      function(error){
        if (error) { console.log(error.reason) }
      }
    );
  },
  "click #noteCreate": function(e){
    document.getElementById("notesCallout").classList.add("hidden");
    document.getElementById("noteForm").classList.remove("hidden");
    document.getElementById("noteTitle").focus();
  },
  "click #noteAdd": function(e, article){
    e.preventDefault();
    var notesCallout = document.getElementById("notesCallout");
    var noteForm = document.getElementById("noteForm");
    var noteTitle = document.getElementById("noteTitle");
    var noteSummary = document.getElementById("noteSummary");

    /*
    // That's from when the notes were in the same collection as the article, but I figured it wouldn't take long to separate them, so I'm leaving just as a reference for you to have a look. //

    Articles.update(
      this._id,
      { $push: {
        notes: {
          body: noteSummary.value,
          timestamp: new Date()
          title: noteTitle.value
        }
      } },
      function(error){
        if (error) {
          console.log(error.reason)
        }
        else {
          noteTitle.value = "";
          noteSummary.value = "";
          noteForm.classList.add("hidden");
          notesCallout.classList.remove("hidden");
        }
      }
    );*/

    Notes.insert({
      articleId: article.data._id,
      body: noteSummary.value,
      timestamp: new Date(),
      title: noteTitle.value
    }, function(error){
      if (error) {
        console.log(error.reason)
      }
      else {
        noteTitle.value = "";
        noteSummary.value = "";
        noteForm.classList.add("hidden");
        notesCallout.classList.remove("hidden");
      }
    });
  },
  "click #noteCancel": function(e){
    e.preventDefault();
    document.getElementById("notesCallout").classList.remove("hidden");
    document.getElementById("noteForm").classList.add("hidden");
  },
  "click #noteDelete": function(e){
    Notes.remove(this._id);
  }
});