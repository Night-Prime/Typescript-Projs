const pickElement = document.querySelector("foo") as HTMLInputElement;
// type assertions in line 1

// console.log('pickElement',pickElement.value);

pickElement.addEventListener('blur', (event) => {
    const target = event.target as HTMLInputElement;
    console.log('event',target.value);
})