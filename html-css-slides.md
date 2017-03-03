<img src="/img/ga-logo.png" style="border:none; background: transparent; box-shadow:none;" />

# Web Development Fundamentals

Evan Johnson + Brian Cama

---

## About Us

* Front-End Engineer, Amazon & Freelance Web Developer<!--- .element: class="fragment" data-fragment-index="1" -->
* Both of us are self-taught<!--- .element: class="fragment" data-fragment-index="2" -->
* Love JavaScript<!--- .element: class="fragment" data-fragment-index="3" -->

----

## About You

* Introduce yourself (i.e. name, what you do, random fact)<!--- .element: class="fragment" data-fragment-index="1" -->
* Why do you want to learn Programming?<!--- .element: class="fragment" data-fragment-index="2" -->

----

## Exercise Files

<img src="img/Octocat.png" width="200" style="border:none;box-shadow:none; width: 200px; display:block;margin:30px auto;background:transparent;"/>

* https://github.com/js-workshops/programming-for-beginners
* Download files using git clone or the ‘Download Zip’ button
* After unzipping the files, copy them to a directory you want to work from (i.e. ~/Document, ~/Desktop)

---

## HTML

<img src="../img/html5.png" style="border:none; height:400px; background: transparent; box-shadow:none;" />

----

### HTML vs HTML5

HTML5 is HTML with a few additions. The Doctype tells you if the page is HTML5 ready.

<pre><code data-trim class="html">
&lt;!DOCTYPE html&gt;
</code></pre>

----

### HTML History

<img src="/img/html-timeline.jpg" style="border:none; background: transparent;" />

----

### Tags

<img src="/img/tags.png" style="border:none; background: transparent;" />

----

### Tag Attributes

<img src="/img/tags_attributes.png" style="border:none; background: transparent;" />

----

### Content Tags

Heading Elements

<pre><code data-trim class="html">
&lt;h1&gt;Largest Heading&lt;/h1&gt;
&lt;h2&gt; . . . &lt;/h2&gt;
&lt;h3&gt; . . . &lt;/h3&gt;
&lt;h4&gt; . . . &lt;/h4&gt;
&lt;h5&gt; . . . &lt;/h5&gt;
&lt;h6&gt;Smallest Heading&lt;/h6&gt;
</code></pre>

----

### Content Tags

Text Elements

<pre><code data-trim class="html">
&lt;p&gt;This is a paragraph.&lt;/p&gt;
&lt;span&gt;This is a span.&lt;/span&gt;
</code></pre>

----

### Content Tags

Unordered List

<pre><code data-trim class="html">
&lt;ul&gt; . . . &lt;/ul&gt;
</code></pre>

----

### Content Tags

Unordered List Items

<pre><code data-trim class="html">
&lt;li&gt;First item&lt;/li&gt;
&lt;li&gt;Second item&lt;/li&gt;
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="html">
&lt;ul&gt;
  &lt;li&gt;First item&lt;/li&gt;
  &lt;li&gt;Second item&lt;/li&gt;
&lt;/ul&gt;
</code></pre>


----

### Content Tags

Anchor Tags (Links)

<pre><code data-trim class="html">
&lt;a href="link"&gt;Link text&lt;/a&gt;
</code></pre>

----

### Images

<img src="/img/cookies.jpg" />

----

### Image Tag

<pre><code data-trim class="html">
&lt;img src="path/to/image" /&gt;
</code></pre>

----

### Paths

* <!--- .element: class="fragment" data-fragment-index="1" -->Full URL (http://placehold.it/img.jpg)

* <!--- .element: class="fragment" data-fragment-index="2" -->Absolute - Searches from webroot directory and starts with a forward slash (**/**)

* <!--- .element: class="fragment" data-fragment-index="3" -->Relative - Searches from current directory (Does not start with forward slash)

----

<img src="/img/stranger-tags.png" style="border:none; background: transparent;" />

## Activity

----

### Div Tags
<pre><code data-trim class="html">
&lt;div&gt;&lt;/div&gt;
</code></pre>
* It can be used to group elements for styling purposes.
* Divs serve as a generic container for content, which does not inherently represent anything.

----

### Semantic Tags
* There are additional tags added in HTML 5
* These tags help structure and provide meaning to the layout of the page

Ex.
<pre><code data-trim class="html">
&lt;header&gt;&lt;/header&gt;
&lt;nav&gt;&lt;/nav&gt;
&lt;article&gt;&lt;/article&gt;
&lt;section&gt;&lt;/section&gt;
</code></pre>

----

### TwitPic Lab - HTML

<img src="/img/exercise_icon_md.png" style="border:none;box-shadow:none;background:transparent;" />

---

## CSS

<img src="../img/css3.png" style="border:none; height:400px; background: transparent; box-shadow:none;" />

----

### CSS Syntax

<img src="/img/css_syntax.png" style="border:none;" />

----

### CSS Syntax

<pre><code data-trim class="css">
p {
  color: red;
  font-weight: bold;
  font-size: 14px;
}

img {
  width: 100px;
  height: 100px;
  border-radius: 50px;
}
</code></pre>

----

### Where does CSS live?

####External

<pre><!--- .element: class="fragment" data-fragment-index="2" --><code data-trim class="html">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Title&lt;/title&gt;
  &lt;link rel="stylesheet" type="text/css" href="path/to/css/file" /&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;p&gt;This is styled with external CSS!&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

----

### Code Along

<img src="/img/code_along.png" style="border:none;box-shadow:none;background:transparent;" />

----

### Colors

<img src="/img/color.png" style="border:none;background:transparent;" />

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
p {
  color: red; /* Keyword */
}

p {
  color: #ff0000; /* Hex Code */
}

p {
  color: rgb(255,0,0); /* RGB */
}
</code></pre>

----

### Tag Selector

<pre><code data-trim class="css">
p {
  color: #F00; /* red */
}

div {
  background-color: rgba(0,255,0.5); /* green */
}

img {
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0,0,255,0.8); /* blue */
}
</code></pre>

----

### ID Selector

<pre><code data-trim class="html">
&lt;ul&gt;
  &lt;li id="main"&gt;1 cup brown sugar&lt;/li&gt;
  &lt;li&gt;2 Tbl milk&lt;/li&gt;
  &lt;li&gt;2 eggs&lt;/li&gt;
&lt;/ul&gt;
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
#main {
  color: red;
  font-weight: bold;
}
</code></pre>

----

### Class Selector

<pre><code data-trim class="html">
&lt;ul&gt;
  &lt;li id="main"&gt;1 cup brown sugar&lt;/li&gt;
  &lt;li class="optional"&gt;2 Tbl milk&lt;/li&gt;
  &lt;li class="optional"&gt;2 eggs&lt;/li&gt;
&lt;/ul&gt;
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
#main {
  color: red;
  font-weight: bold;
}

.optional {
  color: #CCC;
}
</code></pre>

----

### Lab

<img src="/img/exercise_icon_md.png" style="border:none;box-shadow:none;background:transparent;" />

---

##CSS: Inheritance, The Cascade, Specificity

----

### Inheritance

* What color will the strong tag be?
* What font-weight will the strong tag be?


<pre><code data-trim class="html">
&lt;ul&gt;
  &lt;li&gt;&lt;strong&gt;1&lt;/strong&gt; cup brown sugar&lt;/li&gt;
  &lt;li&gt;&lt;strong&gt;2&lt;/strong&gt; Tbl milk&lt;/li&gt;
&lt;/ul&gt;
</code></pre>

<pre><code data-trim class="css" contenteditable>
li {
  color: gray;
}
</code></pre>

----

### Specificity

Not all selectors are created equal

<img src="/img/specificity-wars.jpg" style="border:none;" />

---

##The Box Model

----

<img src="/img/box_model.gif" style="border:none;" />

----

### Content

<pre><code data-trim class="html">
&lt;div id="main"&gt;
  ...
&lt;/div&gt;
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
#main {
  width: 100px;
  height: 100px;
}
</code></pre>

----

### Padding

'top right bottom left' vs. 'top/bottom right/left'.

<pre><code data-trim class="css">
#main {
  padding: 50px 25px 50px 25px;
}
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
#main {
  padding: 50px 25px;
}
</code></pre>

----

### Padding

<pre><code data-trim class="html">
&lt;div id="main"&gt;
  ...
&lt;/div&gt;
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
#main {
  width: 100px;
  height: 100px;
  padding: 50px 25px;
}
</code></pre>

----

### Border

<pre><code data-trim class="css">
#main {
  border-width: 1px;
  border-style: solid;
  border-color: #000;
}
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
#main {
  border: 1px solid #000;
}
</code></pre>

----

### Border

<pre><code data-trim class="html">
&lt;div id="main"&gt;
  ...
&lt;/div&gt;
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
#main {
  width: 100px;
  height: 100px;
  padding: 50px 25px;
  border: 1px solid #000;
}
</code></pre>

----

### Margin

'top right bottom left' vs. 'top/bottom right/left'.

<pre><code data-trim class="css">
#main {
  margin: 50px 25px 50px 25px;
}
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
#main {
  margin: 50px 25px;
}
</code></pre>

----

### Margin

<pre><code data-trim class="html">
&lt;div id="main"&gt;
  ...
&lt;/div&gt;
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="css">
#main {
  width: 100px;
  height: 100px;
  padding: 50px 25px;
  border: 1px solid #000;
  margin: 50px 25px;
}
</code></pre>

----

### Lab

<img src="/img/exercise_icon_md.png" style="border:none;box-shadow:none;background:transparent;" />

---

## Floats

... a CSS positioning property.

<small>Credit to *CSS-Tricks: All About Floats*</small>

----

### Print Layouts

<img src="img/print-layout.png" style="border:none;" />

----

### Web Layouts

<img src="img/web-text-wrap.png" style="border:none;" />

----

### Web Layouts

<pre><code data-trim class="html">
&lt;img src="path/to/img" class="left" /&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur...&lt;/p&gt;
&lt;img src="path/to/img" class="right" /&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur...&lt;/p&gt;
</code></pre>

<pre><code data-trim class="css">
.left {
  float: left;
}

.right {
  float: right;
}
</code></pre>

----

### Web Layouts

<img src="img/web-layout.png" style="border:none;" />

---

##Bootstrap

<img src="/img/bootstrap.png" style="border:none; height:400px; background: transparent; box-shadow:none;" />

----

##Bootstrap

Definitely the most popular JavaScript, CSS and HTML framework out there, Twitter Bootstrap is used in websites all over the internet.

----

### What is a framework?

> [A framework] is a standardized set of practices and concepts used to address common problems and can be used as a reference to help us solve new issues that are similar

----

### Frameworks in Front End Web Development

Most websites share a similar structure. Web Frameworks give us a standardized package of files that includes CSS, Javascript and even HTML Files.

----

##Bootstrap

Bootstrap provides many of the basic modules you will need to develop your website:
* <!--- .element: class="fragment" data-fragment-index="1" -->Typography
* <!--- .element: class="fragment" data-fragment-index="2" -->Grid
* <!--- .element: class="fragment" data-fragment-index="3" -->Components
* <!--- .element: class="fragment" data-fragment-index="4" -->Responsiveness

----

<img src="img/code_along.png" style="border:none;box-shadow:none;background:transparent;" />
##Setting up Bootstrap

----

### Using Bootstrap

To use the Bootstrap capabilities we will have to add classes to our html elements.

Documentation: http://v4-alpha.getbootstrap.com/

----

### Container


<pre><code><div class="container"></div></code></pre>

The element with the container class serves as the outer container for all of our html elements.

----

##Bootstrap Components

Bootstrap provides reusable modules that help you build out components of your website. You can use these to build buttons, navbars and even carousels.

----

### Code Along

<img src="/img/code_along.png" style="border:none;box-shadow:none;background:transparent;" />

