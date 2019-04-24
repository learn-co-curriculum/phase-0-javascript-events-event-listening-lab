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

Take a look at `index.html` in the browser. When you click in the `<input>`
area, nothing happens. Now let's set up some _event handling_.

Start by adding an event listener for the `click` event on the `input#input`
element in `index.html`.

Try out the following in the Chrome DevTools console:

```js
const input = document.getElementById('input');
input.addEventListener('click', function(event) {
  alert('I was clicked!');
});
```

When you click inside of `input#input`, **_now_**, you will get an alert box.

Take this code and paste it into the `index.js` file's `addingEventListener`
function.

Let's review the parts of this code:

1. The node that will be doing the listening. We store that node in the `input` constant
2. The invocation of `addEventListener` on the node that will be doing the listening
  1. The first argument is the event name to listen for
  2. The second argument is the _callback function_. It's work that will be executed
     when the node "hears" the event

## Conclusion

When you have pasted the solution into the `addingEventListener` function, your
tests should pass when you run `learn`. This means you can run `learn submit`
and move to the next lesson!

## Resources

- [MDN - Web Events](https://developer.mozilla.org/en-US/docs/Web/Events)
- [StackOverflow - Bubbling and Capturing][stackoverflow]
- [QuirksMode - Event order][quirks]

[stackoverflow]: http://stackoverflow.com/questions/4616694/what-is-event-bubbling-and-capturing
[quirks]: http://www.quirksmode.org/js/events_order.html

<p class='util--hide'>View <a href='https://learn.co/lessons/fewpjs-event-listening'>Interacting with the DOM via JavaScript Event Listeners</a> on Learn.co and start learning to code for free.</p>
