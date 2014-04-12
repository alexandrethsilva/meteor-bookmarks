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