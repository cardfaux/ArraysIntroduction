const strings = ['a', 'b', 'c', 'd'];
const numbers = [1, 2, 3, 4, 5];
// Variable array is somewhere in memory and the computer knows it. Stored in the RAM random access memory.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.

//push adds to the end of the array
strings.push('e'); // 0(1) operation -- Time Complexity

//pop remove the last item in an array  -- 0(1) -- Time Complexity
strings.pop();
strings.pop();

//unshift adds item at the beginning of an array TimeComplexity is 0(n) time is based on the size of the array because all the indexes have to shift
strings.unshift('x'); // Causing a loop

//splice this adds alienat the index of 2 and the 0 says don't delete anything -- Time Complexity 0(n) indexes have to be looped to change
strings.splice(2, 0, 'alien');

console.log(strings);
