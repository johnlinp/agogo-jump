(function() {
	var agogoSketch = document.getElementById('agogo-sketch');
	var agogoCircles = document.getElementById('agogo-circles');

	var timeJump = 0.9;
	var timeRest = 1.5;
	var jumpHeight = 150;
	var jumpDistance = 300;

	function initAgogo() {
		TweenLite.to(agogoSketch, 0, {
			x: 0,
			y: 0,
		});
		TweenLite.to(agogoCircles, 0, {
			x: 0,
			y: 0,
		});
	}

	function agogoSketchJump() {
		function jumpUp() {
			TweenLite.to(agogoSketch, timeJump / 2, {
				y: -jumpHeight,
				ease: Power1.easeOut,
				onComplete: jumpDown,
			});
		}

		function jumpDown() {
			TweenLite.to(agogoSketch, timeJump / 2, {
				y: 0,
				ease: Power1.easeIn,
			});
		}

		function moveLeft() {
			TweenLite.to(agogoSketch, timeJump, {
				x: -jumpDistance,
				ease: Power0.easeNone,
				onComplete: moveRight,
			});
		}

		function moveRight() {
			TweenLite.to(agogoSketch, timeRest, {
				x: 0,
				ease: Power0.easeNone,
				onComplete: agogoJump,
			});
		}

		jumpUp();
		moveLeft();
	}

	function agogoCirclesJump() {
		var timeDelay = 0.07;
		var timeBounce = 0.1;
		var bounceDepth = 20;

		function jumpUp() {
			TweenLite.to(agogoCircles, timeJump / 2 - timeDelay, {
				y: -jumpHeight,
				ease: Power1.easeOut,
				delay: timeDelay,
				onComplete: jumpDown,
			});
		}

		function jumpDown() {
			TweenLite.to(agogoCircles, timeJump / 2 - timeDelay, {
				y: 0,
				ease: Power1.easeIn,
				delay: timeDelay,
			});
		}

		function moveLeft() {
			TweenLite.to(agogoCircles, timeJump, {
				x: -jumpDistance,
				ease: Power0.easeNone,
				onComplete: function() {
					moveRight1();
					bounceDown1();
				}
			});
		}

		function moveRight1() {
			TweenLite.to(agogoCircles, timeRest / 2 - timeDelay, {
				x: -jumpDistance / 2,
				delay: timeDelay,
				ease: Power0.easeNone,
				onComplete: moveRight2,
			});
		}

		function moveRight2() {
			TweenLite.to(agogoCircles, timeRest / 2, {
				x: 0,
				ease: Power0.easeNone,
			});
		}

		function bounceDown1() {
			TweenLite.to(agogoCircles, timeBounce, {
				y: bounceDepth,
				ease: Power1.easeOut,
				onComplete: bounceDownBack1,
			});
		}

		function bounceDownBack1() {
			TweenLite.to(agogoCircles, timeBounce, {
				y: 0,
				ease: Power1.easeIn,
				onComplete: bounceUp1,
			});
		}

		function bounceUp1() {
			TweenLite.to(agogoCircles, timeBounce, {
				y: -bounceDepth / 2,
				ease: Power1.easeOut,
				onComplete: bounceUpBack1,
			});
		}

		function bounceUpBack1() {
			TweenLite.to(agogoCircles, timeBounce, {
				y: 0,
				ease: Power1.easeIn,
				onComplete: bounceDown2,
			});
		}

		function bounceDown2() {
			TweenLite.to(agogoCircles, timeBounce, {
				y: bounceDepth / 4,
				ease: Power1.easeOut,
				onComplete: bounceDownBack2,
			});
		}

		function bounceDownBack2() {
			TweenLite.to(agogoCircles, timeBounce, {
				y: 0,
				ease: Power1.easeIn,
				onComplete: bounceUp2,
			});
		}

		function bounceUp2() {
			TweenLite.to(agogoCircles, timeBounce, {
				y: -bounceDepth / 8,
				ease: Power1.easeOut,
				onComplete: bounceUpBack2,
			});
		}

		function bounceUpBack2() {
			TweenLite.to(agogoCircles, timeBounce, {
				y: 0,
				ease: Power1.easeIn,
			});
		}

		jumpUp();
		moveLeft();
	}

	function agogoJump() {
		agogoSketchJump();
		agogoCirclesJump();
	}

	initAgogo();
	agogoJump();
})();
