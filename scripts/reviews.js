const reviews = [
	{
		name: 'Saharsh Gobinath',
		quote: 'Homework is important, but gaming is importanter!',
		rating: '10',
		anonymous: false,
	},
	{
		name: 'Saharsh Gobinath',
		quote: 'The teacher is just an NPC with unskippable dialogue',
		rating: '10',
		anonymous: false,
	},
	{
		name: 'Saharsh Gobinath',
		quote: 'Real life has terrible graphics, no respawn button and GRASS. 10/10 would not recommend. ',
		rating: '10',
		anonymous: false,
	},
	{
		name: 'Saharsh Gobinath',
		quote: 'I forgot my homework because my inventory space was full. At least I have Project-Hub!',
		rating: '10',
		anonymous: false,
	},
	{
		name: 'Saharsh Gobinath',
		quote: 'You can\'t pause an online game, Mom. You can pause my education, though.',
		rating: '10',
		anonymous: false,
	},
	{
		name: 'Saharsh Gobinath',
		quote: 'My teacher said \'Applying yourself is key.\' I thought \'F\' was the key to pay respects.',
		rating: '10',
		anonymous: false,
	},
	{
		name: 'big bananna',
		quote: 'Best site ever i will physycslly and emotionally attack whoever doesnt like this site',
		rating: '10',
		anonymous: false,
	},
	{
		name: 'Saharsh Gobinath',
		quote: 'I was playing Project-Hub at full volume on the Math Final, and the teacher took my gaming setup away. ',
		rating: '0',
		anonymous: false,
	},
	{
		name: 'Christian Santangelo',
		quote: "Project-Hub is always my number one pick for unblocked gaming whenever I'm feeling bored, and have nothing else to do.",
		rating: '10',
		anonymous: false,
	},
	{
		name: 'typicalsneeze',
		quote: "Project-Hub: A serene digital escape – the calm luh website you've been seeking.",
		rating: '9',
		anonymous: false,
	},
	{
		name: 'kai',
		quote: 'Wsg giggity giggity good gang, yessir W mans fr yea',
		rating: '10',
		anonymous: true,
	},
	{
		name: 'Zachary',
		quote: 'could use more games but amazing nevertheless. this game helped me while i was sick and i think its amazing',
		rating: '9',
		anonymous: false,
	},
	/* Template File
    {
        name: "userName1",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis luctus fermentum.",
        rating: "__",
        anonymous": true,
    },
    */
];

async function addReviews() {
	try {
		// const reviews = await (await fetch('reviews.json')).json();
		var index = 1;
		for (const review of reviews) {
			const slide = document.createElement('div');
			slide.className = 'reviews-slides';
			slide.classList.add(`slides${index}`);

			var image;
			if (review.anonymous === true) {
				image = 'anonymous';
			} else {
				image = review.name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
			}

			slide.innerHTML = `
                <img src="img/reviews/${image}.png" alt="Unloaded Picture" />
                <div>
                    <h2>${review.name}</h2>
                    <p>- "${review.quote}" ${review.rating}/10</p>
                </div>
            `;

			document.getElementById('reviews').appendChild(slide);
			index += 1;
		}

		showSlide(currentSlide);
		setInterval(nextSlide, secondsTilSwitch * 1000);
	} catch (error) {
		console.error('REVIEWS ERROR:' + error);
	}
}

var currentSlide = 1;
var secondsTilSwitch = 5;

function showSlide(slideIndex) {
	const slides = document.getElementsByClassName('reviews-slides');
	if (slideIndex > slides.length) {
		currentSlide = 1;
	}
	if (slideIndex < 1) {
		currentSlide = slides.length;
	}
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	slides[currentSlide - 1].style.display = 'inline-flex';
}

function nextSlide() {
	showSlide((currentSlide += 1));
}
