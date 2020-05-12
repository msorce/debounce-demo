function debounce(func, wait) {
  let timeout;

  return function () {
    clearInterval(timeout);
    const context = this;
    timeout = setTimeout(() => func.apply(context, arguments), wait);
  };
}

function callAPI(val) {
  console.log(val);
}

const debouncedAPICall = debounce(callAPI, 2000);

const queryInput = document.querySelector("#query");

queryInput.addEventListener("keyup", (e) => {
  debouncedAPICall(e.target.value);
});
