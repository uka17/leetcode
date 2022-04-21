var assert = require("assert");

 // Definition for a Node.
 function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
 };
 

function createData1() {
  let n1 = new Node(1, null, null);
  let n2 = new Node(2, null, null);
  let n3 = new Node(3, null, null);
  let n4 = new Node(1, null, null);
  let n5 = new Node(2, null, null);
  let n6 = new Node(3, null, null);

  n1.left = n2;
  n1.right = n3;

  n2.left = n4;
  n2.right = n5;

  n3.right = n6;

  return n1;
}

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
  var doChild = function(child) {
    if(child) {
      if(lowLead)
        lowLead.next = child;
      else
        theLeft = child;
      
      lowLead = child;
    }
  }
  
  if(!root)
    return root;
  
  let theLeft = root;
  let head = theLeft;
  let lowLead;
  
  while(theLeft) {
    lowLead = null;
    head = theLeft;
    theLeft = null;
    while(head) {
      doChild(head.left);
      doChild(head.right);
      head = head.next;
    }
  }
  return root;
};

let data = createData1();

let result = connect(data);
