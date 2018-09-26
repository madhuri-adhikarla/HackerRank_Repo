// Complete the insertNodeAtHead function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtHead(head, data) {
 const node = new SinglyLinkedListNode(data);
    if(head==null){
      node.next = null;
      head = node;
        return head;
    }else{
        node.next = head;
        head = node;
        return head;

    }

}