/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    const ll_to_array = (ll) => {
        let array = [];
        let ll_mut = ll;
        while (ll_mut && ll_mut.val !== null) {
            array.push(ll_mut.val)
            ll_mut = ll_mut.next
        }
        return array
    }
    const l1_array = ll_to_array(l1 || [0]).reverse()
    const l2_array = ll_to_array(l2 || [0]).reverse()

    const l1_num = l1_array.reduce((prev, curr, i, arr) => {
        prev+= BigInt(curr) * BigInt( 10n ** (BigInt(arr.length - 1) - BigInt(i)) )
        return prev
    }, 0n) 
    
    const l2_num = l2_array.reduce((prev, curr, i, arr) => {
        prev+= BigInt(curr) * BigInt( 10n ** (BigInt(arr.length - 1) - BigInt(i)) )
        return prev
    }, 0n) 

    const sum = l1_num + l2_num;
    const sum_array = Array.from(String(sum), Number).reverse()
    
    const nodes_correct_order = []
    for (const digit of sum_array) {
        let node = new ListNode()
        node.val = digit;
        node.next = null;
        nodes_correct_order.push(node)
    }

    let ll = null
    for (const node of nodes_correct_order) {
        if (!ll) {
            ll = node
        } else {
            let next_ref = null;
            const get_last = (ll_) => {
                if (!ll_.next) {
                    return ll_
                } else return get_last(ll_.next)
            }
            next_ref = get_last(ll)
            next_ref.next = node 
        }
    }

    return ll
};