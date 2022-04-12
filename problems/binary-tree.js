var assert = require("assert");


// Definition for a Node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

function createData1() {
  let n1 = new TreeNode(1, null, null);
  let n2 = new TreeNode(2, null, null);
  let n3 = new TreeNode(3, null, null);

  n1.right = n2;
  n2.left = n3;

  return n1;
}

/**
 * @param {TreeNode} head
 * @return {[]}
 */
 var postorderTraversal = function(root) {
  if(!root)
  return [];

  let answer = [];
  let stack = [];
  let lastVisitedNode;
  let cur = root;

  while(stack.length > 0 || cur) {
    while(cur != null) {
      stack.push(cur);
      cur = cur.left;
    }
    
    cur = stack[stack.length - 1];
    
    if(cur.right && lastVisitedNode != cur.right)
      cur = cur.right;
    else {
      answer.push(cur.val);
      lastVisitedNode = stack.pop();
      cur = null;
    }
  }
  return answer;
};

let data = createData1();

let result = postorderTraversal(data);
