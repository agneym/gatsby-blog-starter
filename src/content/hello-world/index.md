---
title: 'Lets look at some code'
date: '2018-04-14T22:12:03.284Z'
---

Probably because you are using it wrong.

If you browse Stackoverflow for React questions, this is one of the most common questions that you will find. Well, it is this or other versions of the same question. All this after Stackoverflow marks questions as duplicates.

```js
function handleChange(value) {
  this.setState({
    value: newValue,
  });
  console.log(this.state.value); //Why is my state not updated?
}
```

Why is your state not getting updated?

Straight out of [React docs](https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous), `setState` may be asynchronous. What does that mean?

Let’s find out.

```js
setTimeout(() => console.log('foo'), 0);
console.log('bar');
```

What is the output?

First the second `console.log` fires and then the first one inside the `setTimeout` function. This happens because `setTimeout` is asynchronous and is moved to the browser thread. So the code that runs after `setTimeout` gets executed however small the timeout is.

Same is the case with `setState` Because of it’s asynchronous state, the statement after is being called before the actual `setState` function.

---

### How do we fix this?

```js
function handleChange(value) {
  this.setState(
    {
      value: newValue,
    },
    () => {
      console.log(this.state.value);
    }
  );
}
```

`setState` actually comes with a callback version. All you have to do is provide the function to be run after the `setState` is executed. Here, you can give whatever action you wanted to perform once the setState is done.

Since you might already have the result you are going to `setState` with, it might be better to utilise that result for regular operations rather than using the callback.

PS: You could also just use `console.log(this.state.value)` in `render()` function or `componentDidUpdate()` but I’m guessing you already knew that.

### Why is it asynchronous?

Now that you know how to fix it, you can leave.

Or you can stay and figure out why is it made asynchronous. _Doesn’t it make React slower?_

From the docs:

> React may batch multiple `setState()` calls into a single update for performance.

> Because `this.props` and `this.state` may be updated asynchronously, you should not rely on their values for calculating the next state.

Yes, that is just it. React it doing this for performance. You might not feel the need for it in a small application. But in a larger application where a lot of state updates may be taking place simultaneously, batching state updates comes as a boon.

The `setState` comes with several other neat tricks as well, with `prevState` which you should definitely check out if you are new to React or may be just haven’t heard of it.
