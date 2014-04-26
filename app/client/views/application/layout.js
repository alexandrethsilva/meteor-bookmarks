Template.layout.helpers({
  viewTitle: function() { return Session.get('viewTitle'); }
});

// Spinner package overwrite, to enable multiple spinners on a single document
Template.spinner.rendered = function(){
  var targets = [].slice.call( document.querySelectorAll('.spinner') );
  targets.forEach( function( target ){
    var spinner =  new Spinner( Meteor.Spinner.options ).spin( target );
  } );
};