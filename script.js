function createDiv(attr, name) {
  const div = document.createElement('div');
  div.setAttribute(attr, name);
  return div;
}

function createSquare() {
  const square = createDiv('class', 'square');
  colorize(square);
  return square;
}

function randColor() {
  let color = '#' + Math.floor(Math.random()*16777215).toString(16);
  return color;
}

function colorize(elem) {
  elem.addEventListener('mouseover', function(e) {
  	e.target.style['background-color'] = randColor();
  })
};

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function init(n) {

	const button = document.createElement('button');
	document.body.appendChild(button);
	button.textContent = 'Refresh'
	button.addEventListener('click', () => {
		let num = prompt("How big would you like the etcher?");
		if (num > 0 && num < 101){
			removeAllChildNodes(document.body);
			init(n);
	    } else {
	    	alert("Please enter a number between 0 and 100")
	    };
	});

	const gameBoard = createDiv('id', 'gameBoard');
	document.body.appendChild(gameBoard);

	function gridify(n) {
	  
	  function sizeGrid(n) {
	    let numCol = '';
	    let numRow = '';
	    for (let i = 0; i < n; i++) {
	      numCol = numCol + '1fr ';
	      numRow = numRow + '1fr ';
	    }
	    gameBoard.style['grid-template-columns'] = numCol;
	    gameBoard.style['grid-template-rows'] = numRow;
	  }
	  
	  sizeGrid(n);

	  function fillGrid(n) {

	    for (let i = 0; i < (n**2); i ++) {
	      gameBoard.appendChild(createSquare());
	    };
	  };

	  fillGrid(n);

	};

	gridify(n);

};

init(16);

