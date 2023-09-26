/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

// Array of possible colors
const colors = ['d75c30', 'ff9900', 'ffcc00', '008000', '3366ff', '0096ff', '993366'];

// Variable to store the previously selected color
let previousColor = null;

// Function to generate a random color from the array that is different from the previous color
function getRandomColor() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * colors.length);
    } while (colors[randomIndex] === previousColor); // Keep generating until it's different
    previousColor = colors[randomIndex];
    return colors[randomIndex];
}

// Add an event listener for hover on the links
const links = document.querySelectorAll('#menu .links li a');
links.forEach(link => {
    link.addEventListener('mouseover', () => {
        const randomColor = getRandomColor();
        link.style.backgroundColor = `#${randomColor}`;
    });

    link.addEventListener('mouseout', () => {
        // Reset the background color on mouseout
        link.style.backgroundColor = '';
    });
});

// Add an event listener for hover on the button
const button = document.querySelector('.button');

button.addEventListener('mouseover', () => {
    const randomColor = getRandomColor();
    button.style.backgroundColor = `#${randomColor}`;
});

button.addEventListener('mouseout', () => {
    // Reset the background color on mouseout
    button.style.backgroundColor = '';
});

(function($) {

	// User added code for experimentation
	
	// The following logic randomizes the color of pseudo-elements

	// function getRandomColor() {
	// 	const colors = ['d75c30', 'ff9900'];
	// 	const colors1 = ['ffcc00', '008000'];
	// 	const colors2 = ['3366ff', '0096ff'];
	// 	const colors3 = ['993366', 'd75c30'];
	// 	const randomColor = colors[Math.floor(Math.random() * colors.length)];
	// 	const randomColor1 = colors1[Math.floor(Math.random() * colors1.length)];
	// 	const randomColor2 = colors2[Math.floor(Math.random() * colors2.length)];
	// 	const randomColor3 = colors3[Math.floor(Math.random() * colors3.length)];
	// 	return [randomColor, randomColor1, randomColor2, randomColor3];
	// }

	// // Create a new <style> element
	// const styleElement = document.createElement('style');
	// document.head.appendChild(styleElement);

	// // Access the sheet property of the <style> element
	// const styleSheet = styleElement.sheet;

	// const [randomColor, randomColor1, randomColor2, randomColor3] = getRandomColor();

	// // Insert a new rule for .wrapper.spotlight:before
	// console.log(randomColor);
	// styleSheet.insertRule(`
	// .wrapper.spotlight:before, .wrapper.spotlight:after {
	// 	background-image: linear-gradient(45deg, #${randomColor}, black);
	// }
	// `, styleSheet.cssRules.length);	

	// styleSheet.insertRule(`
	// .wrapper.spotlight:before {
	// 	box-shadow: inset 0 -1px 0 0 #${randomColor}, 0 1px 0 0 #ff9900;
	// }
	// `, styleSheet.cssRules.length);

	// styleSheet.insertRule(`
	// .wrapper.spotlight:after {
	// 	box-shadow: inset 0 -1px 0 0 #${randomColor}, 0 1px 0 0 #ff9900;
	// }
	// `, styleSheet.cssRules.length);
	// // styleSheet.insertRule(`
	// // .wrapper.spotlight:before, .wrapper.spotlight:after {
	// // 	background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:linear-gradient(45deg, %23${randomColor}%3B, black' /%3E%3C/svg%3E");
	// // }
	// // `, styleSheet.cssRules.length);	

	// // styleSheet.insertRule(`
	// // .wrapper.spotlight:before {
	// // 	box-shadow: inset 0 -1px 0 0 #${randomColor}, 0 1px 0 0 #ff9900;
	// // }
	// // `, styleSheet.cssRules.length);

	// // styleSheet.insertRule(`
	// // .wrapper.spotlight:after {
	// // 	box-shadow: inset 0 -1px 0 0 #${randomColor}, 0 1px 0 0 #ff9900;
	// // }
	// // `, styleSheet.cssRules.length)

	// // Insert a new rule for .wrapper.spotlight.style2:before
	// console.log(randomColor1);
	// styleSheet.insertRule(`
	// 	.wrapper.spotlight.style2:before, .wrapper.spotlight.style2:after {
	// 		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%23${randomColor1}%3B' /%3E%3C/svg%3E");
	// 	}
	// 	`, styleSheet.cssRules.length);

	// 	styleSheet.insertRule(`
	// 	.wrapper.spotlight.style2:before {
	// 		box-shadow: inset 0 -1px 0 0 #${randomColor1}, 0 1px 0 0 #45558d;
	// 	}
	// 	`, styleSheet.cssRules.length);

	// 	styleSheet.insertRule(`
	// 	.wrapper.spotlight.style2:after {
	// 		box-shadow: inset 0 -1px 0 0 #${randomColor1}, 0 1px 0 0 #45558d;
	// 	}
	// 	`, styleSheet.cssRules.length);

	// // Insert a new rule for .wrapper.spotlight.style3:before
	// console.log(randomColor2);
	// styleSheet.insertRule(`
	// 	.wrapper.spotlight.style3:before, .wrapper.spotlight.style3:after {
	// 		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%23${randomColor2}%3B' /%3E%3C/svg%3E");
	// 	}
	// 	`, styleSheet.cssRules.length);

	// 	styleSheet.insertRule(`
	// 	.wrapper.spotlight.style3:before {
	// 		box-shadow: inset 0 -1px 0 0 #${randomColor2}, 0 1px 0 0 #45558d;
	// 	}
	// 	`, styleSheet.cssRules.length);

	// 	styleSheet.insertRule(`
	// 	.wrapper.spotlight.style3:after {
	// 		box-shadow: inset 0 -1px 0 0 #${randomColor2}, 0 1px 0 0 #45558d;
	// 	}
	// 	`, styleSheet.cssRules.length);

	// // Insert a new rule for .wrapper.spotlight.style4:before
	// console.log(randomColor3);
	// styleSheet.insertRule(`
	// 	.wrapper.spotlight.style4:before, .wrapper.spotlight.style4:after {
	// 		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%23${randomColor3}%3B' /%3E%3C/svg%3E");
	// 	}
	// 	`, styleSheet.cssRules.length);

	// 	styleSheet.insertRule(`
	// 	.wrapper.spotlight.style4:before {
	// 		box-shadow: inset 0 -1px 0 0 #${randomColor3}, 0 1px 0 0 #45558d;
	// 	}
	// 	`, styleSheet.cssRules.length);

	// 	styleSheet.insertRule(`
	// 	.wrapper.spotlight.style4:after {
	// 		box-shadow: inset 0 -1px 0 0 #${randomColor3}, 0 1px 0 0 #45558d;
	// 	}
	// 	`, styleSheet.cssRules.length);

	// // Insert a new rule for .wrapper.spotlight.style5:before
	// const randomColor4 = getRandomColor();
	// console.log(randomColor4);
	// styleSheet.insertRule(`
	// 	.wrapper.spotlight.style5:before, .wrapper.spotlight.style5:after {
	// 		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%23${randomColor4}%3B' /%3E%3C/svg%3E");
	// 	}
	// 	`, styleSheet.cssRules.length);

	// 	styleSheet.insertRule(`
	// 	.wrapper.spotlight.style5:before {
	// 		box-shadow: inset 0 -1px 0 0 #${randomColor4}, 0 1px 0 0 #45558d;
	// 	}
	// 	`, styleSheet.cssRules.length);

	// 	styleSheet.insertRule(`
	// 	.wrapper.spotlight.style5:after {
	// 		box-shadow: inset 0 -1px 0 0 #${randomColor4}, 0 1px 0 0 #45558d;
	// 	}
	// 	`, styleSheet.cssRules.length);

	// // Insert a new rule for .wrapper.spotlight.style6:before
	// const randomColor5 = getRandomColor();
	// console.log(randomColor5);
	// styleSheet.insertRule(`
	// 	.wrapper.spotlight.style6:before, .wrapper.spotlight.style6:after {
	// 		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%23${randomColor5}%3B' /%3E%3C/svg%3E");
	// 	}
	// 	`, styleSheet.cssRules.length);
		
	// 	styleSheet.insertRule(`
	// 	.wrapper.spotlight.style6:before {
	// 		box-shadow: inset 0 -1px 0 0 #${randomColor5}, 0 1px 0 0 #45558d;
	// 	}
	// 	`, styleSheet.cssRules.length);
		
	// 	styleSheet.insertRule(`
	// 	.wrapper.spotlight.style6:after {
	// 		box-shadow: inset 0 -1px 0 0 #${randomColor5}, 0 1px 0 0 #45558d;
	// 	}
	// 	`, styleSheet.cssRules.length);
		
	// 	const randomColor6 = getRandomColor();
	// 	console.log(randomColor6);
	// 	styleSheet.insertRule(`
	// 		.wrapper.spotlight {
	// 			background-image: linear-gradient(to right, #${randomColor6}, #000000);
	// 		}

	// 		`, styleSheet.cssRules.length);

	// 	const randomColor7 = getRandomColor();
	// 	console.log(randomColor7);
	// 	styleSheet.insertRule(`
	// 		.wrapper.spotlight.style2 {
	// 			background-image: linear-gradient(to left, #${randomColor7}, #000000);
	// 		}

	// 		`, styleSheet.cssRules.length);

	// Add more styleSheet.insertRule() calls for other styles if needed
	
	// Back to the original code below

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			// xlarge:	'(max-width: 1680px)',
			// large:	'(max-width: 1280px)',
			// medium:	'(max-width: 980px)',
			// small:	'(max-width: 736px)',
			// xsmall:	'(max-width: 480px)'
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight(),
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

	// Menu.
		var $menu = $('#menu');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {

				event.stopPropagation();

				// Hide.
					$menu._hide();

			})
			.find('.inner')
				.on('click', '.close', function(event) {

					event.preventDefault();
					event.stopPropagation();
					event.stopImmediatePropagation();

					// Hide.
						$menu._hide();

				})
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$menu._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 350);
				});

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});

})(jQuery);