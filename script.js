let string = "";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                document.getElementById('result').value = string;
            }
            catch (err) {
                document.getElementById('result').value = "Error";
                console.log(`Invalid input: ${err}`);
                string = "";
            }
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            document.getElementById('result').value = string;
        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.getElementById('result').value = string;
        }
    })
})
