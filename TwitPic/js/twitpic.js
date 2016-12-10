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
      // Step 3. Create HTML template
    }

    for(var i = 0; i < dataArray.length; i++) {
      resultHTML += cardTemplate(dataArray[i]);
    }
    return resultHTML;
  }
});