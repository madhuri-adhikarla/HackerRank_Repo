// Complete the CompareLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function CompareLists(head1, head2) {
    var result=true;
    while((head1!=null)&&(head2!=null)){
    if(head1.data!=head2.data)
     result=false;
    head1=head1.next;
    head2=head2.next;
    }
    if(!(head1==null)&&(head2==null))
        result=false;
return result;

}