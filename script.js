const bubblesortContainer = document.getElementById('bubblesort_container');
const selectionsortContainer = document.getElementById('selectionsort_container');
const insertionsortContainer = document.getElementById('insertionsort_container');
const shellsortContainer = document.getElementById('shellsort_container');
const quicksortContainer = document.getElementById('quicksort_container');
const mergesortContainer = document.getElementById('mergesort_container');
const heapsortContainer = document.getElementById('heapsort_container');
const pigeonholesortContainer = document.getElementById('pigeonholesort_container');
const countingsortContainer = document.getElementById('countingsort_container');
const radixsortContainer = document.getElementById('radixsort_container');

const firstSortContainer = document.getElementById('first_sort_container');
const secondSortContainer = document.getElementById('second_sort_container');

const STATIC_ELEMENTS = 50;
const STATIC_SPEED = 100;

let bubbleSortAnimation = new BubbleSortAnimation(bubblesortContainer, STATIC_ELEMENTS);
let selectionSortAnimation = new SelectionSortAnimation(selectionsortContainer, STATIC_ELEMENTS);
let insertionSortAnimation = new InsertionSortAnimation(insertionsortContainer, STATIC_ELEMENTS);
let shellSortAnimation = new ShellSortAnimation(shellsortContainer, STATIC_ELEMENTS);
let quickSortAnimation = new QuickSortAnimation(quicksortContainer, STATIC_ELEMENTS);
let mergeSortAnimation = new MergeSortAnimation(mergesortContainer, STATIC_ELEMENTS);
let heapSortAnimation = new HeapSortAnimation(heapsortContainer, STATIC_ELEMENTS);
let pigeonHoleSortAnimation = new PigeonHoleSortAnimation(pigeonholesortContainer, STATIC_ELEMENTS);
let countingSortAnimation = new CountingSortAnimation(countingsortContainer, STATIC_ELEMENTS);
let radixSortAnimation = new RadixSortAnimation(radixsortContainer, STATIC_ELEMENTS);

bubbleSortAnimation.WAIT_TIME = STATIC_SPEED;
selectionSortAnimation.WAIT_TIME = STATIC_SPEED;
insertionSortAnimation.WAIT_TIME = STATIC_SPEED;
shellSortAnimation.WAIT_TIME = STATIC_SPEED;
quickSortAnimation.WAIT_TIME = STATIC_SPEED;
mergeSortAnimation.WAIT_TIME = STATIC_SPEED;
heapSortAnimation.WAIT_TIME = STATIC_SPEED;
pigeonHoleSortAnimation.WAIT_TIME = STATIC_SPEED;
countingSortAnimation.WAIT_TIME = STATIC_SPEED;
radixSortAnimation.WAIT_TIME = STATIC_SPEED;

let firstAnimation = null;
let secondAnimation = null;

const numElementsInput = document.getElementById('numElements');
const speedInput = document.getElementById('speed');

numElementsInput.addEventListener('input', updateSettings);
speedInput.addEventListener('input', () => {
    const speed = parseInt(speedInput.value);
    
    if (firstAnimation) firstAnimation.WAIT_TIME = speed;
    if (secondAnimation) secondAnimation.WAIT_TIME = speed;
});

function updateSettings() {
    const numElements = parseInt(numElementsInput.value);
    
    firstSortContainer.innerHTML = '';
    secondSortContainer.innerHTML = '';

    setupFirstSort(document.querySelector('#compare_constainers select').value, numElements);
    setupSecondSort(document.querySelectorAll('#compare_constainers select')[1].value, numElements);
}

function setupFirstSort(value, numElements = parseInt(numElementsInput.value)) {
    firstSortContainer.innerHTML = '';
    switch(value) {
        case 'bubble': firstAnimation = new BubbleSortAnimation(firstSortContainer, numElements); break;
        case 'selection': firstAnimation = new SelectionSortAnimation(firstSortContainer, numElements); break;
        case 'insertion': firstAnimation = new InsertionSortAnimation(firstSortContainer, numElements); break;
        case 'shell': firstAnimation = new ShellSortAnimation(firstSortContainer, numElements); break;
        case 'quick': firstAnimation = new QuickSortAnimation(firstSortContainer, numElements); break;
        case 'merge': firstAnimation = new MergeSortAnimation(firstSortContainer, numElements); break;
        case 'heap': firstAnimation = new HeapSortAnimation(firstSortContainer, numElements); break;
        case 'pigeonhole': firstAnimation = new PigeonHoleSortAnimation(firstSortContainer, numElements); break;
        case 'counting': firstAnimation = new CountingSortAnimation(firstSortContainer, numElements); break;
        case 'radix': firstAnimation = new RadixSortAnimation(firstSortContainer, numElements); break;
        }
    firstAnimation.WAIT_TIME = parseInt(speedInput.value);
}

function setupSecondSort(value, numElements = parseInt(numElementsInput.value)) {
    secondSortContainer.innerHTML = '';
    switch(value) {
        case 'bubble': secondAnimation = new BubbleSortAnimation(secondSortContainer, numElements); break;
        case 'selection': secondAnimation = new SelectionSortAnimation(secondSortContainer, numElements); break;
        case 'insertion': secondAnimation = new InsertionSortAnimation(secondSortContainer, numElements); break;
        case 'shell': secondAnimation = new ShellSortAnimation(secondSortContainer, numElements); break;
        case 'quick': secondAnimation = new QuickSortAnimation(secondSortContainer, numElements); break;
        case 'merge': secondAnimation = new MergeSortAnimation(secondSortContainer, numElements); break;
        case 'heap': secondAnimation = new HeapSortAnimation(secondSortContainer, numElements); break;
        case 'pigeonhole': secondAnimation = new PigeonHoleSortAnimation(secondSortContainer, numElements); break;
        case 'counting': secondAnimation = new CountingSortAnimation(secondSortContainer, numElements); break;
        case 'radix': secondAnimation = new RadixSortAnimation(secondSortContainer, numElements); break;
        }
}

function startComparison() {
    firstAnimation.sort();
    secondAnimation.sort();
}

function stopComparison() {
    alert('Dummy option');
}

function resetComparison() {
    firstAnimation = null;
    secondAnimation = null;
    firstSortContainer.innerHTML = '';
    secondSortContainer.innerHTML = '';
    numElementsInput.value = STATIC_ELEMENTS;
    speedInput.value = STATIC_SPEED;
    updateSettings();
}

function updateSpeedDisplay(value) {
    document.getElementById('speedDisplay').innerText = value;
    
    const speed = parseInt(value);
    if (firstAnimation) firstAnimation.WAIT_TIME = speed;
    if (secondAnimation) secondAnimation.WAIT_TIME = speed;
}
