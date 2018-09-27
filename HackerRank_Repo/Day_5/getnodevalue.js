// Complete the getNode function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function getNode(head, positionFromTail) {
    var count=0;
        
        var currentNode = head;
        while(currentNode!=null){
            currentNode=currentNode.next;
            count++;
        }    
        var reqNode = count - positionFromTail;
    
            var i=1;
            while(i!=(reqNode)){
                head = head.next;
                i++;
            }
            return head.data;     
}