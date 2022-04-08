var assert = require("assert");


// Definition for a Node.
function Node(val,prev,next,child) {
    this.val = val;
    this.prev = prev;
    this.next = next;
    this.child = child;
};

function createData1() {
  let n1 = new Node(1, null, null, null);
  let n2 = new Node(2, null, null, null);
  let n3 = new Node(3, null, null, null);
  let n4 = new Node(4, null, null, null);
  let n5 = new Node(5, null, null, null);
  let n6 = new Node(6, null, null, null);
  let n7 = new Node(7, null, null, null);

  n1.next = n2;

  n2.next = n3;
  n2.prev = n1;
  n2.child = n4;

  n3.prev = n2;

  n4.next = n5;

  n5.prev = n4;
  n5.child = n6;

  n6.next = n7;

  n7.prev = n6;

  return n1;
}

function createData2() {
  let n1 = new Node(1, null, null, null);
  let n2 = new Node(2, null, null, null);
  let n3 = new Node(3, null, null, null);
  let n4 = new Node(4, null, null, null);
  let n5 = new Node(5, null, null, null);
  let n6 = new Node(6, null, null, null);
  let n7 = new Node(7, null, null, null);
  let n8 = new Node(8, null, null, null);
  let n9 = new Node(9, null, null, null);
  let n10 = new Node(10, null, null, null);
  let n11 = new Node(11, null, null, null);
  let n12 = new Node(12, null, null, null);

  n1.next = n2;

  n2.next = n3;
  n2.prev = n1;

  n3.next = n4;
  n3.prev = n2;
  n3.child = n7;

  n4.next = n5;
  n4.prev = n3;

  n5.next = n6;
  n5.prev = n4;
  
  n6.prev = n5;

  n7.next = n8;

  n8.next = n9;
  n8.prev = n7;
  n8.child = n11;

  n9.next = n10;
  n9.prev = n8;

  n10.prev = n9;

  n11.next = n12;

  n12.prev = n11;

  return n1;
}

function createData3() {
  let n1 = new Node(1, null, null, null);
  let n2 = new Node(2, null, null, null);
  let n3 = new Node(3, null, null, null);

  n1.child = n2;
  n2.child = n3;

  return n1;
}
 
/**
 * @param {Node} head
 * @return {Node}
 */
 var flatten = function(head) {
  let p = head;
  while(p.next || p.child) {
    if(p.child) {
      p.child.prev = p;
      p = flatten(p.child);
      if(!p.prev)
        return p;  
    }
    p = p.next;
  }
  //Recursion exit criteria
  if(!head.prev)
    return head;
  //Searching for nearest NEXT upstream
  let start = head.prev;
  while(!start.next || !start.child) {
    if(start.child && !start.next) {
      let child = start.child;
      start.next = child;
      start.child = null;
    }
    start = start.prev;
    if(!start.prev) {
      if(start.child) {
        let child = start.child;
        start.next = child;
        start.child = null;
      }
      return start;
    }
  }
  
  let next = start.next;
  start.next = null;

  next.prev = p;
  p.next = next;
  head.prev.next = head;
  head.prev.child = null;
  
  return head;
};

let data = createData3();

let result = flatten(data);
