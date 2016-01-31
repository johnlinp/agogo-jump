(function() {
	var agogo = document.getElementById('agogo');

	function initAgogo() {
		TweenLite.to(agogo, 0, {
			x: 0,
			y: 0,
		});
	}

	function agogoJump() {
		var timeJump = 0.9;
		var timeRest = 1.5;
		var jumpHeight = 150;
		var jumpDistance = 300;

		TweenLite.to(agogo, timeJump / 2, {
			y: -jumpHeight,
			ease: Power1.easeOut,
			onComplete: function() {
				TweenLite.to(agogo, timeJump / 2, {
					y: 0,
					ease: Power1.easeIn,
				});
			}
		});

		TweenLite.to(agogo, timeJump, {
			x: -jumpDistance,
			ease: Power0.easeNone,
			onComplete: function() {
				TweenLite.to(agogo, timeRest, {
					x: 0,
					ease: Power0.easeNone,
					onComplete: agogoJump,
				});
			}
		});
	}

	initAgogo();
	agogoJump();
})();
