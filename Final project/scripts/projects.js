
	var listItems = document.querySelectorAll('.skills-list li');

	for (var i = 0; i < listItems.length; i++) {
		listItems[i].addEventListener('mouseenter', function() {
			this.classList.add('hover');
		});

		listItems[i].addEventListener('mouseleave', function() {
			this.classList.remove('hover');
		});
	}

