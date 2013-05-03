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

var insertionSort = function recur(arr, i) {
	document.write("After " + i + ((i == 1) ? " loop" : " loops") + " it sounds like this: ");
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
	document.write("After " + j + ((j == 1) ? " loop" : " loops") + " it sounds like this: ");
	playAssignments(arr);
	if (swapped == true) {
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

var assignments = [4, 6, 3, 5, 8, 1, 7, 2];
var loops = 0;
if (prompt("How do you want to sort? (Type 'insertion' for insertion sort or 'bubble' for bubble sort").toLowerCase().search("bubble") > -1)
	setTimeout(function(){bubbleSort(assignments, 0, true)}, 1700);
else 
	setTimeout(function(){insertionSort(assignments, 0)}, 1700);
