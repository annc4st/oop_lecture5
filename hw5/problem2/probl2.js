/* Write the function propsCount(currentObject) which obtain as input object currentObject and return the number of its properties.

For example:

Test	Result
const mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web-development",
};
console.log(propsCount(mentor));
3

*/

function propsCount(currentObject) {
    //Your code
    let countProperties = 0;
    for (let prop in currentObject) {
        countProperties ++;
    }
    return countProperties;
}
