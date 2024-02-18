    function init() {
        let name = "Mozilla"; 
        function displayName() {
            console.log(name); 
        }
        displayName();
    }
    init();

    function outer(){
        let username = "user"
        // console.log("OUTER", secret);
        function inner(){
            let secret = "my123"
            console.log("inner", username);
        }
        function innerTwo(){
            console.log("innerTwo", username);
            // console.log(secret);
        }
        inner()
        innerTwo()

    }
    outer()
    // console.log("TOO OUTER", username); // ReferenceError: username is not defined