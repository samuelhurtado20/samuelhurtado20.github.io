class TextAnimate {
	constructor(id, obj){
		this.textElement = document.getElementById(id);
		this.obj = document.getElementById(obj);
		this.letters = this.textElement.innerText.split("");
		
		this.textElement.innerText = '';

		this.letters.forEach((letra) => {
			let character = letra === ' ' ? '&nbsp;' : letra;

			this.textElement.innerHTML = this.textElement.innerHTML + `
				<div>
					<span>${character}</span>
					<span class="hidden-line">${character}</span>
				</div>
			`;
		});

		this.obj.addEventListener('mouseenter', () => {
			let count = 0;

			const interval = setInterval(() => {
				if(count < this.textElement.children.length){
					this.textElement.children[count].classList.add('animacion');
					count += 1;
				} else {
					clearInterval(interval);
				}
			}, 30);
		});

		this.obj.addEventListener('mouseleave', () => {
			let count = 0;

			const interval = setInterval(() => {
				if(count < this.textElement.children.length){
					this.textElement.children[count].classList.remove('animacion');
					count += 1;
				} else {
					clearInterval(interval);
				}
			}, 30);
		});
		
	}
}

new TextAnimate('logoText', 'logo');