const countValue =document.querySelector('#counter'); // countValue ek element hai div wali elemnt jisme 0 hai and value jo hai wo iss element ki under ki value hai

// function increment() { }
const increment = () => {
    // get value from UI
    let value = parseInt(countValue.innerText); // qk above value string type mei mil rhi thi
    // Update the value
    value = value+1;
    // set the value onto UI
    countValue.innerText = value;
};

//function decrement() { }
const decrement = () => {
    // get value from UI
    let value = parseInt(countValue.innerText); // qk above value string type mei mil rhi thi
    // Update the value
    value = value-1;
    // set the value onto UI
    countValue.innerText = value;
};