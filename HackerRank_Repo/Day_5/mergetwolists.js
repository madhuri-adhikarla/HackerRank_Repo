// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
    
    var list1=head1;
    var list2=head2;
    if(list1==null){
            return list2;
        }else if(list2==null){
            return list1;
        }
    
        if(list1.data > list2.data){
          list2.next = mergeLists(list1,list2.next);
                return list2;
            }
            else{
            list1.next = mergeLists(list1.next,list2);
                return list1;
}
}