function name() {
  let firstName = "John";
  firstName === "John"
    ? (document.getElementById("demo").innerHTML = "Hello John!")
    : (document.getElementById("demo").innerHTML = "Hello Human!");
}
console.log(firstName);
