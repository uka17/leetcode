var assert = require("assert");


// Definition for a Node.
function Node(val,next,random) {
    this.val = val;
    this.random = random;
    this.next = next;
};

function createData1() {
  let n1 = new Node(7, null, null);
  let n2 = new Node(13, null, null);
  let n3 = new Node(11, null, null);
  let n4 = new Node(10, null, null);
  let n5 = new Node(1, null, null);

  n1.next = n2;
  n1.random = null;

  n2.next = n3;
  n2.random = n1;

  n3.next = n4;
  n3.random = n5;

  n4.next = n5;
  n4.random = n3;

  n5.next = null;
  n5.random = n1;

  return n1;
}

/**
 * @param {Node} head
 * @return {Node}
 */
 var copy = function(head) {
  
  let prevCopy = new Node(null, null, null);
  let headCopy = prevCopy;
  
  while(head) {
    let nextCopy; 
    if(head.next) {
      nextCopy = head.next.copy ? head.next.copy : new Node(head.next.val, null, null);
      head.next.copy = nextCopy;
    }
    else
      nextCopy = null;
    
    let randomCopy;
    if(head.random) {
      randomCopy = head.random.copy ? head.random.copy : new Node(head.random.val, null, null);
      head.random.copy = randomCopy;
    }
    else
      randomCopy = null;
    
    let copied;
    if(head.copy)
      copied = head.copy;
    else 
      copied = new Node(null, null, null);
    
    copied.val = head.val;
    copied.next = nextCopy;
    copied.random = randomCopy;
    
    head.copy = copied;
    prevCopy.next = copied;
    prevCopy = prevCopy.next;
    copied = copied.next;
    head = head.next;
  }
  return prevCopy.next;
};

let data = createData1();

let result = copy(data);
