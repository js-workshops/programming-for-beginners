$(document).ready(function() {
  // Handle search field fold submissions
  // Step 1. Add a click event

  function fetchData(tag) {
    // create a url to request twitter pictures from
    var url = "https://twitter-proxy-server.herokuapp.com/?searchTerm=" + tag;
    // add the AJAX get method here - $.get()
    $.get(url, function(json) {
      console.log('json', json);
      // Step 2. Call handleResults with json.data

    }, "jsonp");
  }

  function handleResults(dataArray) {
    // hook it up to our view function
    console.log('dataArray', dataArray);
    var results = formatResults(dataArray);
    // Step 4. Append results to DOM
  }

  function formatResults(dataArray) {
    var resultHTML = '';

    // Add your cardTemplate() function here
    function cardTemplate(tweet) {
      // Step 3. Finish HTML template
      var resultHTML = '<div class="card">';                      // opening parent DIV
      resultHTML += '<img src="';                                 // opening img tag
      // Step 3.1. Add Image URL

      resultHTML += '" class="card-img-top img-fluid" />'         // closing img tag
      resultHTML += '<div class="card-block">';
      resultHTML += '<h4 class="card-title">';
      // Step 3.2. Add Twitter username to h4 tag

      resultHTML += '</h4>';
      resultHTML += '<p class="card-text">';
      // Step 3.3. Add Tweet text to p tag

      resultHTML += '</p>';
      resultHTML += '<a href="';
      // Step 3.4. Add Tweet url to href attribute of a tag

      resultHTML += '" class="btn btn-primary" target="_blank">View Tweet</a>';
      resultHTML += '</div>';
      resultHTML += '</div>';                                     // closing parent DIV
      return resultHTML;
    }

    for(var i = 0; i < dataArray.length; i++) {
      resultHTML += cardTemplate(dataArray[i]);
    }
    return resultHTML;
  }
});