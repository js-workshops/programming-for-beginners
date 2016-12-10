# TwitPic

We're going to a create an application that searches Twitter for pictures by a hashtag.

---

## View files

1. Open files in the folder /TwitPic
2. Open index.html in Chrome
3. Open /TwitPic/js/twitpic.js file in Sublime

---

## Submit() event

First, we need to bind an event that tells us when the search form in the nav is submitted.

----

## jQuery Submit()

* View the jQuery docs on submit() at https://api.jquery.com/submit/

----

## jQuery Submit()

* Find the ID on the form in the Nav, and add your submit() event below line 3 of twitpic.js

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="javascript">
$("#myId").submit(function(e) {
  e.preventDefault();
  console.log('form submitted');
})
</code></pre>

----

## jQuery val()

* Next we need to get the value of the field and store it as a variable. Review jQuery's val() method at https://api.jquery.com/val/
* You'll need to find the ID on the input field

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="javascript">
var searchTerm = $("#myId").val();
</code></pre>

----

## string.length

* We need to check if the user inputed any text. Review the length property of strings at https://mzl.la/1GpGsc8
* Wrap the string.length method in an if condition

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="javascript">
if(searchTerm.length) {
  // here is where we will fetch data from our API
}
</code></pre>

----

## Call fetchData()

* Call the fetchData() method we added for you with the search term inside our if condition
* If everything is connected properly, you should see search results logged in the console

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="javascript">
if(searchTerm.length) {
  // here is where we will fetch data from our API
  fetchData(searchTerm);
}
</code></pre>

---

## Call handleResults()

* We now have results returned from our API and need to start handling those responses.
* Call the method handleResults() which we added for you. Pass it the data Ojbect on the json Object that is returned (i.e. json.data). Look for the comment that states Step 2.

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="javascript">
handleResults(json.data);
</code></pre>

---

## Finish imageTemplate()

* Inside handleResults(), we are calling formatResults() which uses the method imageTemplate()
* View the bootstrap format at http://bit.ly/1JWjdWE

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="html">
<div class="card">
  <img src="{tweet.image}" class="card-img-top img-fluid">
  <div class="card-block">
    <h4 class="card-title">{tweet.username}</h4>
    <p class="card-text">{tweet.text}</p>
    <a href="{tweet.tweet_url}" class="btn btn-primary" target="_blank">View Tweet</a>
  </div>
</div>
</code></pre>

---

### Update the DOM

* Now that we have our results formatted with our template, we need to update the DOM with our HTML
* Review the jQuery docs for the html() method - http://api.jquery.com/html/
* You'll need to look up the ID for the container of the search results

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="javascript">
$("#myId").html(results);
</code></pre>

---

# TwitPic

Congrats! You created a dynamic application. Good work!