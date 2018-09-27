// Complete the removeDuplicates function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function removeDuplicates(head) {
    var currentNode = head;
    while(currentNode.next!=null){
        var temp = currentNode.next;
        
        if(currentNode.data == temp.data){
            currentNode.next = temp.next;
            
        }else{
            currentNode = currentNode.next;
        } 
    }
    return head;
}