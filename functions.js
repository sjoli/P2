//Part a
//Completed

var isArmstrong = function(num) {
	num = String(num);
	var a = num[0], b = num[1], c = num.charAt(2), d = num[3], e = num[4];
	
	a = Math.pow(a, num.length);
	b = Math.pow(b, num.length);
	c = Math.pow(c, num.length);
	d = Math.pow(d, num.length);
	e = Math.pow(e, num.length);
	var sum1 = a;
	var sum2 = a + b;
	var sum3 = a + b + c;
	var sum4 = a + b + c + d;
	var sum5 = a + b + c + d + e;

	if (num == sum1) {
		return true;
	}

	else if (num == sum2) {
		return true;
	}

	else if (num == sum3) {
		return true;
	}

	else if (num == sum4) {
		return true;
	}

	else if (num == sum5) {
		return true;
	}

	else {
		return false;
	}
}
//----------------------------------------------------------------

//Part b


var allArmstrongs = function() {

	var result = "";
	for(var i = 0; i <= 99999; ++i) {
		 if (isArmstrong(i)) {
		 	result = result + i + " ";
		 }
	}
			 return result;

}

//-----------------------------------------------------------

//Part c
var allSubstrings1 = function(str) {
	var result = "";
	for (var i = 0; i <= str.length; ++i) {
		for (var k = i + 1; k <= str.length; ++k)
			result = result + str.substring(i, k) + ", ";
	} return result;
}

//--------------------------------------------------------------------------------

//Part d

var allSubstrings2 = function(str) {
	var result = [];
	for (var i = 0; i <= str.length; ++i) {
		for (var k = i + 1; k <= str.length; ++k)
			result.push(str.substring(i, k));
	} return result;
}

//--------------------------------------------------------------------------

//Part e

var maxWord = function (wd) {
	var i;
	var resultArray = wd.split(" ");
	var max = 0;
	var maxstring = " ";
	for (i = 0; i < resultArray.length; ++i) {
		if (resultArray[i].length > max) {
			max = resultArray[i].length;
			maxstring = resultArray[i];
		}
	}
	return maxstring;
}