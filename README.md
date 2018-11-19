# Interacting with the DOM via JavaScript Event Listeners

## Learning Goals

- Demonstrate triggering event listeners on DOM nodes with `addEventListener()`

## Introduction

We know how to manipulate nodes in the DOM by using JavaScript. We also know
that events can be _handled_ and can do work inside _callback functions_ when the
event is triggered. JavaScript programmers often say we are "listening" for
an event in order to "execute" or "call" a _callback function_.

In order to teach nodes (or, "elements") to "listen" for an event, we use `addEventListener()`.
It allows us to associate "hearing" an event with executing a callback.

## Demonstrate Defining Event Listeners on DOM Nodes with `addEventListener()`

`addEventListener()` takes two arguments:

1. the name of the event
2. a _callback function_ to "handle" the event

Start by adding a listener for `click` event on the `main#main` element
in `index.html`.  Take a look at `index.html` in the browser. When you
click in the `main#main` area, nothing happens. Now let's set up
some _event handling_.

Enter the following into `index.js`:

```js
const main = document.getElementById('main');

main.addEventListener('click', function(event) {
  alert('I was clicked!');
});
```

When you click inside of `main#main`, **_now_**, you will get an alert box.

Let's review the parts of this code:

1. The node that will be doing the listening. We store that node in the `main` constant
2. The invocation of `addEventListener` on the node that will be doing the listening
  1. The first argument is the event name to listen for
  2. The second argument is the _callback function_. It's work that will be executed
     when the node "hears" the event

## Conclusion

Edit `index.js` to rewrite your codealong JavaScript code.

## Resources

- [MDN - Web Events](https://developer.mozilla.org/en-US/docs/Web/Events)
- [StackOverflow - Bubbling and Capturing](http://stackoverflow.com/questions/4616694/what-is-event-bubbling-and-capturing)
- [QuirksMode - Event order](http://www.quirksmode.org/js/events_order.html)

[events]: https://developer.mozilla.org/en-US/docs/Web/Events
[instructions]: http://help.learn.co/workflow-tips/github/how-to-manually-open-a-lab
[stackoverflow]: http://stackoverflow.com/questions/4616694/what-is-event-bubbling-and-capturing
[quirks]: http://www.quirksmode.org/js/events_order.html
[help]: http://help.learn.co/the-learn-ide/common-ide-questions/viewing-html-pages-in-the-learn-ide

<p class='util--hide'>View <a href='https://learn.co/lessons/fewpjs-event-listening'>Interacting with the DOM via JavaScript Event Listeners</a> on Learn.co and start learning to code for free.</p>
