var R = require('ramda');
var Chance = require('chance');

// Instantiate Chance so it can be used
var chance = new Chance();

var a1 = chance.pick([1,1,4,4,4,4])

var print = console.log
// var dice1 = chance.pick([1,1,4,4,4,4])
// var printPick = print();
// R.forEach(printPick,
// R.range(1, 5));

var d11 = [0,0,4,4,4,4]
var d12 = [0,0,4,4,4,4]
var d21 = [1,1,1,5,5,5]
var d22 = [1,1,1,5,5,5]

var pair = function(d1,d2) {

	var p = [];
	d1.forEach(function(i){
		d2.forEach(function(j) {
			p.push([i,j]) 
		})
	})

	return p;
}

var p1 = pair(d11,d12)
var p2 = pair(d21,d22)

print(p1)
print(p2)

var sums = function(l) {
	var s = [];
	l.forEach(function(i){
		s.push(i[0] + i[1])
	})
	return s;
}

var ps1 = sums(p1);
var ps2 = sums(p2);

print(ps1)
print(ps2)

var allpairs = pair(ps1,ps2)
// print("==============")
// print(allpairs)

var countLeft = function(l) {
	var s = 0;
	l.forEach(function(i){
		if(i[0] > i[1]) s += 1;
	})
	return s;
}

var countRight = function(l) {
	var s = 0;
	l.forEach(function(i){
		if(i[0] < i[1]) s += 1;
	})
	return s;
}

print(countLeft(allpairs))
print(countRight(allpairs))


