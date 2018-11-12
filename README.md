# Interacting with the DOM via JavaScript Event Listeners

## Learning Goals

- Demonstrate triggering event listeners on DOM nodes with `addEventListener()`
- Demonstrate preventing the default behavior for DOM nodes with `preventDefault()`
- Explain the difference between bubbling and capturing events
- Demonstrate stopping propagated behaviors with `stopPropagation()`

## Introduction

We know how to manipulate nodes in the DOM as well as trigger events. How else
can we interact with nodes on the page? By _listening_ for them! Common event
listeners are:

```js
onclick //when a user clicks something
onmouseover //when a user mouses over something
onfocus //when a user puts the cursor in a form field
onblur //When a user leaves a form field
```

To integrate the event listeners, we can identify the element and add an event
listener as a method.

### Demonstrate Triggering Event Listeners on DOM Nodes with `addEventListener()`

Adding an event listener to a DOM node doesn't require much logic — we just
call `addEventListener()` on the node. `addEventListener()` takes two arguments:
the name of the event, and a function to handle the event.

Start by adding a listener for `click` events to the `main#main` element
in `index.html`. Once you've opened `index.html` in the browser, enter the
following in the browser's JS console:

```js
const main = document.getElementById('main');

main.addEventListener('click', function(event) {
  alert('I was clicked!');
});
```

### Demonstrate Preventing the Default Behavior for DOM Nodes with `preventDefault()`

Let's test out preventing the default behavior of the input by keeping it from
receiving the "g" character.

(this is going to get put into a file)
```js
const input = document.querySelector('input');

input.addEventListener('keydown', function(e) {
  if (e.which === 71) {
    console.log('default prevented');
    return e.preventDefault();
  } else {
    console.log('Not a "g"');
  }
});
```

Now try to type "g" in the input — not working, right?

Every DOM `event` comes with a `preventDefault` property. `preventDefault` is a
function that, when called, will prevent the, well, default event from taking
place. It provides us an opportunity to intercept and tweak user interactions
(usually in more helpful ways than preventing them from typing "g").

Another, related event property is called `stopPropagation`. Like
`preventDefault`, `stopPropagation` is a function that, when called, interrupts
the event's normal behavior. In this case, it stops the event from triggering
other nodes in the DOM that might be listening for the same event. Yes, one
action can trigger multiple events!

### Explain the Difference Between Bubbling and Capturing Events

In JavaScript, all click events "bubble up" the DOM. The `document` object knows
about every event that is triggered on a page. When one element is nested inside
a second element, and both elements have registered a listener for the same
event (a "click", for example). In most cases, that's not the desired behavior.
Imagine if you had a large series of nested elements all with click events.
Firing the click event of the innermost child would trigger the click events of
every single parent.

DOM events propagate by bubbling (starting at the target node and moving up the
DOM tree to the root) and capturing (starting from the target node's parent
elements and propagating down the tree until it reaches the target) — by
default, events nowadays all bubble. We can verify this behavior by attaching
listeners to those nested `div`s in `index.html`.

(this is going to get put into a file)
```js
let divs = document.querySelectorAll('div');

function bubble(e) {
  // remember all of those fancy DOM node properties?
  // we're making use of them to get the number
  // in each div here!

  // if `this` is a bit confusing, don't worry —
  // for now, know that it refers to the div that
  // is triggering the current event handler.
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}
```

Now click on the `div` containing "5". You should see

```js
5 bubbled
4 bubbled
3 bubbled
2 bubbled
1 bubbled
```

In the console, you can see the event starts at `div` 5, and then it bubbles up
to the topmost node. Along the way, it triggers any other nodes that are
listening for the event — in this case, `'click'`.

Try clicking on a node that's not so deeply nested — you should still see the
event bubble up, starting at the node that you clicked and hitting every node up
the tree until it reaches the top.

What about capturing? In order to capture, we need to set the third argument to
`addEventListener` to `true`. Let's try it out.

(this is going to get put into a file)
```js
divs = document.querySelectorAll('div');

function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
}

for (let i = 0; i < divs.length; i++) {
  // set the third argument to `true`!
  divs[i].addEventListener('click', capture, true);
}
```

Now click on `div` 5. You should see:

```js
1 captured
2 captured
3 captured
4 captured
5 bubbled
5 captured
4 bubbled
3 bubbled
2 bubbled
1 bubbled
```

As you can see, the event propagates from the top of the page towards the target
node, triggering event handlers as appropriate along the way.

Notice that the target node is the _last node to capture the event_, whereas
it's the _first node to bubble the event up_. This is the most important
takeaway.

**NOTE**: Don't worry if bubbling and capturing seems strange. The
different event behaviors are the results of the browser wars of the 90s, but
most of the time it's safe just to stick to the default (which, for the record,
is bubbling). You can read more about bubbling and capture on
[StackOverflow][stackoverflow] and [QuirksMode][quirks]

### Demonstrate Stopping Propagated Behaviors with `stopPropagation()`

Now that we've explained a bit about the dangers and behavior of bubbling and
capturing, you can see how events propagate through the DOM. Much of the time,
since we're listening for very specific events, this doesn't matter: our events
can propagate up or down, and they'll only trigger the event handler(s) that we
want them to trigger. Sometimes, as with these `div`s, we have a fairly generic
event that we want to constrain to its target. That's where `stopPropagation`
comes in.

Let's rewrite the bubbling example to stop propagation so that only one event is
triggered:

(this is going to get put into a file)

```js
const divs = document.querySelectorAll('div');

function bubble(e) {
  // stop! that! propagation!
  e.stopPropagation();

  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}
```

Now try clicking on any node — you should only see one log statement!

## Conclusion

We covered a lot in this lesson. Feel free to edit `index.html`, to write code
directly in the document (just put it between `<script></script>` tags), and to
play around with different events. It's important to practice so you can get the
hang of it! You can practice adding an event listener, using different event
triggers, and intercepting user interactions with `e.preventDefault()` and
`e.stopPropagation().`

## Resources

- [MDN - Web Events](https://developer.mozilla.org/en-US/docs/Web/Events)
- [StackOverflow - Bubbling and Capturing](http://stackoverflow.com/questions/4616694/what-is-event-bubbling-and-capturing)
- [QuirksMode - Event order](http://www.quirksmode.org/js/events_order.html)

[events]: https://developer.mozilla.org/en-US/docs/Web/Events
[instructions]: http://help.learn.co/workflow-tips/github/how-to-manually-open-a-lab
[stackoverflow]: http://stackoverflow.com/questions/4616694/what-is-event-bubbling-and-capturing
[quirks]: http://www.quirksmode.org/js/events_order.html
[help]: http://help.learn.co/the-learn-ide/common-ide-questions/viewing-html-pages-in-the-learn-ide

<p class='util--hide'>View <a href='https://learn.co/lessons/listening-to-dom-nodes'>Listening To Nodes</a> on Learn.co and start learning to code for free.</p>
