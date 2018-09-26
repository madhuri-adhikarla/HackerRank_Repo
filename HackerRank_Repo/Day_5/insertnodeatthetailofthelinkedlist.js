// Complete the insertNodeAtTail function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtTail(head, data) {
    
    const node = new SinglyLinkedListNode(data);

            if(head==null){
             node.next = null;   
             head=node;
             return head;
        }
         else{
             var current = head;
            while(current.next!=null){
                current = current.next;
            }
            current.next=node;
            return head;
        }


}