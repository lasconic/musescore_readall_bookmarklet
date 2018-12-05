(function() {

  function readAll() {
    // ES6 has a spread iterator ... Live with it !
    var links = [
      ...document.querySelectorAll("div.forum__topic-status--new + div.forum__title div.forum__name a"),
      ...document.querySelectorAll("div.forum__topic-status--hot-new + div.forum__title div.forum__name a")
    ]
    for (const a of links) {
        console.log(a.href)
        var sArray = a.href.split("/")
        var nid = sArray[sArray.length - 1];
        var readUrl = "https://musescore.org/en/history/"+nid+"/read";
        console.log(readUrl)
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "POST", readUrl, false ); // false for synchronous request
        xmlHttp.send( null );
        console.log(xmlHttp.responseText);
        }
  }

  var original = window.MuseScoreorg;

  var self = (window.MuseScoreorg = {
    readAll: readAll,
    noConflict: function() {
      window.MuseScoreorg = original;
      return self;
    }
  });
})();


