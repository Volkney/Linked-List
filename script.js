class Node{
	constructor(value, next = null){
  	this.value = value;
    this.next = next;
  }
}

class LinkedList{
	constructor(){
  	this.head = null;
    this.size = 0
  }
  append(data){
  	const newNode = new Node;
    if (!this.head){
    	this.head = newNode
    }else {
    	let current = this.head
      while (current.next){
      	current = current.next;
      }
      current.next = newNode;
    }
    this.size++
  }
}
const ll = new LinkedList();
ll.append(100)
ll.append(200)
console.log(ll.head)