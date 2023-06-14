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