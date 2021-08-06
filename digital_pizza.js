/* **************************

written by Alfredo "Freddy" Rodriguez
August 6, 2021 1:44PM PST

************************** */
// #region


const crayons = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
    
    fg: {
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[1;32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[1;37m",
        crimson: "\x1b[38m"
    }
};

function terminal_screen(arg_thru, arg_color = 'white'){
    switch (arg_color){
        case "white":
            console.log(crayons.fg.white, arg_thru, crayons.reset);
            break;
        case "red":
            console.log(crayons.fg.red, arg_thru, crayons.reset);
            break;
        case "green":
            console.log(crayons.fg.green, arg_thru, crayons.reset);
            break;
    }
}
// #endregion

let topping_final = "pepperoni";
let topping_original = topping_final;

function manager_changed_it($arg_newTopping = topping_final){
    topping_final = $arg_newTopping;
    return topping_final;
}

function order_checker(){
    if(topping_final == topping_original){
        terminal_screen('\u2713  Order is correct. Nice!', 'green');
    }else{
        terminal_screen('\u2717  WTF!! Customer\'s gonna be PISSED!', 'red');
    }
}

function showTable(){
    console.table(
        [
            { person: 'customer requested', topping: topping_original },
            { person: 'manager used', topping: topping_final }
        ]
    );
}

function delivery(){
    console.clear();
    manager_changed_it();
    showTable();
    terminal_screen(`Looks like customer wanted: \x1b[0m${topping_original}`);
    terminal_screen(`And Mr.Manager prepared with: \x1b[0m${topping_final}`);
    order_checker();
    console.log(" ");
}

delivery();

