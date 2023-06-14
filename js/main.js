// WHAT ARE DOM EVENTS? //
    /* DOM events are the bedrock of interactivity on web pages. */
    /* DOM events enable us as developers to implement event-driven programming. This programming paradigm is such that much of our code runs in response to events being triggered during run-time. */
    /* Lots of events are being generated within the browser, for example, when:
        + A user moves or clicks the mouse.
        + A user presses a key.
        + When a form is submitted.
        + When the page has finished loading or has been resized.
        + ect. */

// WHAT'S AN EVENT LISTENER? //
    /* An event listener is a function (a callback function), that is called when an event fires. */
    /* Event listeners may also be refered to as event handlers. */
    /* There are three different approaches for registering event listeners:
        + In the HTML (inline):
            * <button id="reset-btn" onclick="reset()>"
                - In the example above, onclick is the event-name, reset() is the callback.
                - Also, the HTML approach is not recommended because it requires that the function be in the global scope, also inline styling creates unnecessary clutter in your html file. It defeats the purpose of having a seperate JS file and a more readable code.
        + Assiging to DOM elements' properties:
            * resetBtn.onclick = "reset";
                - In the example above, resetBtn probably equals document.getElementById("reset-btn"); so we can access the button tag within our DOM. Therefore the event (onclick) is called on the variable, and when it's activated (when user clicks on button) it activate the callback function (reset).
                -  The DOM element approach is better than HTML (inline) because the function doesnt have to be in global scope.
        + Calling addEventListener() on a DOM element
            * The addEventListener approach is widely considered to be the best practice because it has the flexibility of adding multiple listener functions! */
    /* Here is the common syntax for registering an event listener for a given event:
        + element.addEventListener(event-name, callback, use-capture);
            * event-name - the name of the event
            * callback - the function we want executed when the event happens. When called by the JS engine, it will pass an event object as an argument.
            * use-capture - is a boolean and is option. It has to do w/ event phases (none (0), capture (1), target (2), or bubbling (3)) */

// OUR FIRST EVENT LISTENER //
    /* When we click the Add Comment button, we want to create a new comment w/ the text entered in the input and then clear the input. */
const btn = document.querySelector('button');
btn.addEventListener('click', (event) => {
    const li = document.createElement("li");    /* creates a li element each time the button is pressed */
    const input = document.querySelector('input');
    li.textContent = input.value;   /* saves what user puts into the input text box the value of the li */
    document.querySelector('ul').appendChild(li);   /* adds DOM element to the document. this allows the value of li to be print and attached to the ul tag, creating another li tag in html. */
})

// THE EVENT OBJECT //
    /* Examining the event object that was provided as an argument to our event listener reveals lots of useful information about the event. Of special interest are: 
        + Several ...x and  ...y properties that provide where the click occurred.
        + The target property, which holds a reference to the DOM element that triggered (dispatched) the event.
        + NOTE: JS this keyword within the listener function will be set to the DOM element that addEventListener was called on. */

// EVENT BUBBLING //
    /* When an event occurs on an element, that event, whether it is listened to on that element or not, bubbles up through the DOM, all the way up to the document object */
    /* All event listeners registered for the same event, such as click, will be invoked along the path to the document element - unless one of those listeners calls the event object's stopPropagation method (method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases. It does not, however, prevent any default behaviors from occurring; for instance, clicks on links are still processed. If you want to stop those behaviors, see the preventDefault() method. It also does not prevent propagation to other event-handlers of the current element. If you want to stop those, see stopImmediatePropagation().). */
    /* When a DOM event fires in your app, it doesn’t just fire once where the event originated; it embarks on a journey of three phases. In short, the event flows from the document’s root to the target (i.e. capture phase), then fires on the event target (target phase), then flows back to the document’s root (bubbling phase). */