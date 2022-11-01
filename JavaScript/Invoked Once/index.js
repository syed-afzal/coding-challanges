// Create a function that is restricted to invoking func once. Repeat calls to the function return the value of the first invocation. The func is invoked with the this binding and arguments of the created function.

const once = (fn) => {
    let invoked = false;
    return () => {
        if(!invoked) {
            invoked = true;
            fn();
        }
    }
};



const task = () => {
    console.log('invoked');
};

const taskOnce = once(task);
taskOnce(); // expect to see `invoked` in the console
taskOnce(); //
