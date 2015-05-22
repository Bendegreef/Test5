/* jshint
browser: true,
devel: true,
*/
		window.onload = function () {
			var canvas = document.getElementById("myCanvas");
			var ctx = canvas.getContext("2d");
			var img = document.getElementById("scream");
			var width = document.getElementById("scream").width;
			ctx.drawImage(img, 0, 0, 3000, 3000, 0, 0, 3000, 3000);
			var dataURL = canvas.toDataURL();
			document.getElementById("defImg").setAttribute('crossOrigin', 'anonymous');
			document.getElementById("defImg").src = dataURL;

		};
	