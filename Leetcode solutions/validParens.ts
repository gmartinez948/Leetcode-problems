// First attempt at Valid Parens

// function isValid(s: string): boolean {
//   let result = false;
//   const validPairs: Record<string, string> = {
//       '(': ')',
//       '{': '}',
//       '[': ']',
//   };
//   for (let i = 0; i < s.length; i++) {
//       let validClosingParen = false;
//        if (s[i + 1] === undefined) {
//            break;
//        }
//        if (validPairs.hasOwnProperty(s[i]) && validPairs[s[i]] === s[i + 1]) {
//           validClosingParen = true;
//        } 
//   result = validClosingParen
//   };
//   return result;
// };

/*
Leetcode score : 67/92
I did not consider the edge case of valid parens inside of other valid parens..
After watching a solution video, I see how using a stack can be beneficial in this approach.
*/

// time complexity : O(n) Linear
// space complexity : O(n) Linear
function isValid(s: string): boolean {
  const validPairs: Record<string, string> = {
      '(': ')',
      '{': '}',
      '[': ']',
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (validPairs[s[i]]) {
      stack.push(validPairs[s[i])
    } else if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
}
