
const container = document.querySelector('#container');
const button = document.querySelector('.askSize');

let x = 16, y = 16;
createCanvas(x,y);

container.addEventListener('mouseover', function (e) {
  // console.log(e.target.id);
	const box = document.querySelector(`.newBox[id="${e.target.id}"]`);
	box.classList.add('colorBox');
});

button.addEventListener('click', function (e) {

	let x = prompt('Set number of side squares: 1-50');
	if(x > 0 && x <= 50){
		removeAllChildNodes(container);
		createCanvas(x,x);
		console.log(x)
		}
	else{alert('Invalid input')}
});


//Will create a customized grid canvas
function createCanvas(xlen,ylen){
	let count = 1;
	for(y = 1; y <= ylen; y++){
		
		const startDiv = document.createElement('div');
		container.append(startDiv);

		for (x = 1; x <= xlen; x++){
			const newBox = document.createElement('div');			
			newBox.setAttribute('class','newBox');
			newBox.setAttribute('id',count);
			container.append(newBox);		
			// console.log(count);
			count++
		}
	}
}

function removeAllChildNodes(parent) {
	while (parent.firstChild) {
			parent.removeChild(parent.firstChild);
	}
}


