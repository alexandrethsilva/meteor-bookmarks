UI.registerHelper("formatDate", function(timestamp, format) {
  var DateFormats = {
    short: "DD/MM/YYYY",
    long: "dddd DD.MM.YYYY HH:mm"
  };
  if (moment) {
    return moment(timestamp).format(DateFormats[format]);
  }
  else {
    return timestamp; }
});

UI.registerHelper("safeString", function(html) {
  return new Handlebars.SafeString(html)
});

UI.registerHelper("isCollectionEmpty", function(collection) {
  return collection.count() ? false : true;
});

UI.registerHelper('isRouteActive', function (routePath,parentCategory) {
  if(Router.current().path.match(routePath,"") !== null) {
    return "active ";
  }
  else {
    return "";
  }
});