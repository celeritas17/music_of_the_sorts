//Ryan Koven 6 December 2012
//
//------------------->Interesting fact: can't do recursion with an anonymous function.<-------------------------

var isOrdered = function(list){
	var ordered = new Boolean("True");
	for (var i = 0; i < list.length - 1; i++){
		if (list[i + 1] < list[i]){
			ordered = false;
			break;
		}
	}
	return ordered;
}

var wavFile = function(index) {
	return '<img src=\"img/' + index +'.png\" /> <embed style=\"background-color:red; height="0"; width="0" src="tones/' + index + '.wav" hidden>';
}

var writeWavFile = function(index) {
	document.write(wavFile(index));
}

var waveFileWriter = function(index) {
	return function() {
		writeWavFile(index);
	}
}

var playWavFile = function(tone, interval) {
	return setTimeout(waveFileWriter(tone), interval);
}

var forEach = function(arr, f) {
	var i = 0;
	for ( ; i < arr.length; i++) {
		f(arr[i], i)
	}
}

var someInterval = function(i) {
	return 500 + i * 600;
}

var playAssignments = function(assignments) {
	forEach(assignments, function(value, index) {
		playWavFile(value, someInterval(index))
	});	
}

var countLoops = function(i){
	document.write("After " + i + ((i == 1) ? " loop" : " loops") + " it sounds like this: ");
}

var insertionSort = function recur(arr, i) {
	countLoops(i);
	playAssignments(arr);
	 if (i < arr.length) {
		var key = arr[i];
		var j = i - 1;
		while(j >= 0 && arr[j] > key){
			arr[j + 1] = arr[j];
			j--;
			}
		arr[j + 1] = key;
		setTimeout(function() {
			recur(arr, i + 1)
		}, 6250);
	}
}

var bubbleSort = function recur(arr, j, swapped) {
	countLoops(j);
	playAssignments(arr);
	if (swapped == true){
		swapped = false;
		var temp;
		j++;
		for (var k = 0; k < arr.length - j; k++){
			if (arr[k] > arr[k + 1]){
				temp = arr[k];
				arr[k] = arr[k + 1];
				arr[k + 1] = temp;
				swapped = true;
			}
		}
		setTimeout(function() {
			recur(arr, j, swapped);
		}, 6250);
	}
}

var shellSort = function recur(arr, gap, i){
	playAssignments(arr);
	var j, temp;
	
		if (gap){
			for (j = i - gap; j >= 0 && arr[j] > arr[j + gap]; j -= gap){
				temp = arr[j];
				arr[j] = arr[j + gap];
				arr[j + gap] = temp;
			}
		}
	gap = (i < arr.length) ? gap : gap/2;
	i = (i < arr.length) ? i + 1 : gap;
	setTimeout(function() {
			recur(arr, gap, i);
		}, 6250);
}

var assignments = [4, 6, 3, 5, 8, 1, 7, 2];
var sort  = prompt("How do you want to sort? Type 'insertion' for insertion sort, 'shell' for shellsort, or 'bubble' for bubble sort");
if (sort.toLowerCase().search("bubble") > -1)
	setTimeout(function(){bubbleSort(assignments, 0, true);}, 1700);
else if (sort.toLowerCase().search("insertion") > -1)
	setTimeout(function(){insertionSort(assignments, 0);}, 1700);
else 
	setTimeout(function(){shellSort(assignments, assignments.length/2, 0);}, 1700);

