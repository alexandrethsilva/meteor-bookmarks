Template.scrollInterception.events({
"mousewheel .scroll-list": function(e){
  var list = e.currentTarget,
      listHeight = list.getBoundingClientRect().height,
      listScrollHeight = list.scrollHeight,
      wheelDelta = e.originalEvent.wheelDelta;

  if ((list.scrollTop == 0 && wheelDelta > 0) || (list.scrollTop == (listScrollHeight - listHeight) && wheelDelta < 0)) {
    e.preventDefault();
  };
}
});