// Complete the insertNodeAtPosition function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtPosition(head, data, position) {
    const node =  new SinglyLinkedListNode(data);
    if(head==null)
        {
            node.next = null;
            head=node;
            return head;
            
        }else{
          var current = head;
           var i =1;
            while(i!=position){
                current = current.next;
                i++;
            }
            
 //           current.next = node;
            node.next = current.next;
            current.next = node;
            return head;

        }

}