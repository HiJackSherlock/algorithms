class MyMaxHeap {
    constructor (limit) {
        this.limit = limit;
        this.heapSize = 0;
        this.heap = [];
    }

    getHeap() {
        return this.heap.slice(0, this.heapSize);
    }

    isEmpty() {
        return this.heapSize === 0 ? true : false;
    }

    isFull() {
        return this.heapSize === this.limit ? true : false;
    }

    push(value) {
        if (this.isFull()) {
            throw Error('the heap is full.');
        }
        this.heap[this.heapSize] = value;
        this.heapInsert(this.heap, this.heapSize++);
    }

    pop() {
        if (this.isEmpty()) {
            throw Error('the heap is empty.');
        }
        let result = this.heap[0];
        this.swap(this.heap, 0, --this.heapSize);
        this.heapify(this.heap, 0, this.heapSize);
        return result;
    }

    heapInsert(arr, i) {
        // 要注意 js 对数组下标的处理，自己要处理成整数
        while (arr[i] > arr[Math.floor((i - 1) / 2)]) {
            this.swap(arr, i, Math.floor((i - 1) / 2));
            i = Math.floor((i - 1) / 2);
        }
    }

    heapify(arr, index, heapSize) {
        let left = index * 2 + 1;
        while (left < heapSize) {
            let largest = left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left;
            largest = arr[largest] > arr[index] ? largest : index;
            if (largest === index) {
                break;
            }
            this.swap(arr, index, largest);
            index = largest;
            left = index * 2 + 1;
        }
    }

    swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

let myHeap = new MyMaxHeap(10);
const arr1 = [5, 8, 2, 1, 7, 0, 4, 6, 3, 9];
for (let i = 0; i < arr1.length; i++) {
    myHeap.push(arr1[i]);
}
/* myHeap.push(10); */
console.log(myHeap.getHeap());
console.log(myHeap.pop());
console.log(myHeap.getHeap());
console.log(myHeap.pop());
console.log(myHeap.getHeap());
console.log(myHeap.pop());
console.log(myHeap.getHeap());



