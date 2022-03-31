var assert = require("assert");

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
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

let testCase = testSet[0];
let head = new ListNode(testCase.case[0])
let start = head;
for(let i = 1; i < testCase.case.length; i++) {
  let node = new ListNode(testCase.case[i]);
  head.next = node;
  head = head.next;
}

let res = reverseList(start);


// describe("Reverse linked list", function () {
//   let testCase = testSet[0];
//   let head = ListNode(testCase.case)
//   start = head;
//   for(let i = 1; i < testCase.lenth; i++) {
//     let node = ListNode(testCase[i]);
//     head.next = node;
//     head = head.next;
//   }
//   assert.equal(reverseList(start), testCase.result);
// });
