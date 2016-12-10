$(document).ready(function() {
  // Handle search field fold submissions
  $("#searchForm").submit(function(e) {
    e.preventDefault();
    var searchTerm = $("#searchField").val();
    console.log('search:', searchTerm);
    if(searchTerm.length) {
      fetchData(searchTerm);
    }
  });

  function fetchData(tag) {
    // create a url to request twitter pictures from
    var url = "https://twitter-proxy-server.herokuapp.com/?searchTerm=" + tag;
    // add the AJAX get method here - $.get()
    $.get(url, function(json) {
      console.log('json', json);
      handleResults(json.data);
    }, "jsonp");
  }

  function handleResults(dataArray) {
    // hook it up to our view function
    console.log('dataArray', dataArray);
    var results = formatResults(dataArray);
    $("#searchResults").html(results);
  }

  function formatResults(dataArray) {
    var resultHTML = '';

    // Add your imageTemplate() function here
    function imageTemplate(tweet) {
      var resultHTML = '<div class="card">';                      // opening parent DIV
      resultHTML += '<img src="';                                 // opening img tag
      resultHTML += tweet.image;                                  // image url
      resultHTML += '" class="card-img-top img-fluid" />'
      resultHTML += '<div class="card-block">';
      resultHTML += '<h4 class="card-title">';
      resultHTML += tweet.username;
      resultHTML += '</h4>';
      resultHTML += '<p class="card-text">';
      resultHTML += tweet.text;
      resultHTML += '</p>';
      resultHTML += '<a href="' + tweet.tweet_url + '" class="btn btn-primary" target="_blank">View Tweet</a>';
      resultHTML += '</div>';
      resultHTML += '</div>';                                     // closing parent DIV
      return resultHTML;
    }

    for(var i = 0; i < dataArray.length; i++) {
      resultHTML += imageTemplate(dataArray[i]);
    }
    return resultHTML;
  }
});