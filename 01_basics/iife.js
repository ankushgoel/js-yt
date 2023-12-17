//Immediately Invoked Function Expressions (IIFE)
(function db_connect() {
    console.log(`DB connected`);
})(); // semi colon to end context

(() => {
    console.log(`DB connected`);
})();

((name) => {
    console.log(`hello ${name}`);
})("Ankush");