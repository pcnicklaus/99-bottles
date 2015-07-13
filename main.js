for (var i = 100; i > 0; i--) {
	if (i > 2)
		console.log(i + " bottles of beer on the wall," + i + " bottles of beer, you take one down, pass it around, now there's only " + (i - 1) + " bottles of beer on the wall.");
	else if (i > 1)
      console.log("2 bottle of beer on the wall, 2 bottles of beer, you take 1 down, pass it around, now there's only 1 bottle of beer on the wall.");
	else
      console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall...")
}
