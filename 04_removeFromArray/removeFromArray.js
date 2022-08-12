//1.) Loop through optional arguments.
//2.) Find out if optional argument is in array.
//3.) If optional argument is in provided array, remove it from array -- splice 
//4.) If not, go to next optional argument.
//5.) The the function must return the edited array.

const removeFromArray = function() {
    const args = Array.from(arguments);
    for (let i=1; i<args.length; i++) {
        if (args[0].includes(args[i])) {
            args[0].splice(args[0].indexOf(args[i]), 1);
        }
    }
    return args[0];
};

// Do not edit below this line
module.exports = removeFromArray;
