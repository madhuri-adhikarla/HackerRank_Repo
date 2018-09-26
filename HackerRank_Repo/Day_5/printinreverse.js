// Complete the reversePrint function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function reversePrint(head) {
        var rev = [];
         while(head!=null){
            rev.push(head.data);
            head=head.next;
        }
        rev.reverse();
        for(let i=0;i<rev.length;i++){
            console.log(rev[i]);
        }


}