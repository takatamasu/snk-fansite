document.addEventListener('DOMContentLoaded', () => {
	const promoVideo = document.querySelector('.promo-video')
	const heroTitan = document.querySelector('.hero-titan')
	const hero = document.querySelector('.hero')

	/* After 3 seconds (after 'shake') add show-titan class */
	setTimeout(() => {
		hero.classList.add('show-titan')
	}, 3000)

	/* After another 2 seconds (when the titan finishes its animation), unlock the scroll. */
	setTimeout(() => {
		document.body.style.overflow = 'auto'
		document.documentElement.style.overflow = 'auto'
	}, 6000) // 3s shake + 2s animacji titan

	/* video starts loading after titan animation */
	/* listen for when the titan animation ends */ 
	heroTitan.addEventListener('animationend', () => {
		promoVideo.play()
	})
})

const corpsInfo = document.querySelector('.corps__info p')
const corpsUnits = document.querySelectorAll('.corps__unit')
const descriptions = {
	trainee:
		'The Trainee Corps trains young recruits in combat, survival, and discipline. After graduation, cadets are assigned to one of the three military branches. This stage shapes their skills, endurance, and mental strength. For many, it marks the beginning of their struggle for humanity’s future.',
	survey:
		'The Survey Corps is tasked with exploring beyond the Walls and confronting Titans directly. Known for their bravery, they often face the highest risks in order to expand humanity’s knowledge and territory. Their emblem symbolizes the "Wings of Freedom." Despite high casualties, they embody the hope of reclaiming the world.',
	military:
		'The Military Police protects the royal family and maintains order within the innermost Walls. They enjoy privileges and relative safety compared to other branches. Their duties include investigation, law enforcement, and guarding important figures. However, they are often criticized for corruption and complacency.',
	garrison:
		'The Garrison Regiment is responsible for defending the Walls and ensuring the safety of civilians. They maintain fortifications, man the cannons, and respond to Titan breaches. As the first line of defense, their role is vital in times of crisis. Though not as prestigious, they are essential to daily survival.',
}

corpsUnits.forEach(unit => {
	unit.addEventListener('mouseenter', () => {
		const type = unit.classList[1].split('--')[1] // eg. 'survey'
		corpsInfo.textContent = descriptions[type]
	})

	unit.addEventListener('mouseleave', () => {
		corpsInfo.textContent = 'Discover all the divisions by hovering over each one.'
	})
})


const track = document.querySelector(".universe__track");
const items = Array.from(track.children);

// save the width of the ORIGINAL track before duplication
const originalWidth = track.scrollWidth;

items.forEach((item) => {
  const clone = item.cloneNode(true);
  track.appendChild(clone);
});

let scrollAmount = 0;
const speed = 0.5;

function animate() {
  scrollAmount -= speed;

  // if the shift reaches the width of the original set, reset
  if (Math.abs(scrollAmount) >= originalWidth) {
    scrollAmount = 0;
  }

  track.style.transform = `translateX(${scrollAmount}px)`;
  requestAnimationFrame(animate);
}

animate(); 