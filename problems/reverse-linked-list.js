var assert = require("assert");

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
}

function arrayToLinked(arr) {
  let head = new ListNode(arr[0])
  let start = head;
  for(let i = 1; i < arr.length; i++) {
    let node = new ListNode(arr[i]);
    head.next = node;
    head = head.next;
  }
  return start;
}
 
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  if(!head || !head.next)
    return head;
  
  let p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  
  return p;
};

let testSet = [
  { case: [1, 2, 3, 4, 5], result: [5, 4, 3, 2, 1] },
];

let foo = arrayToLinked(testSet[0].case);
let res = reverseList(foo);

// describe("Reverse linked list", function () {
//   let res = arrayToLinked(testSet[0].case);

//   assert.equal(reverseList(res), arrayToLinked([testSet[0].result]));
// });
