function generateBlocks() {
    const blockNumber = document.getElementById('blockNumber').value;
    const diagonalContainer = document.getElementById('diagonalContainer');
    diagonalContainer.innerHTML = '';
    const containerHeight = diagonalContainer.clientHeight;
    const containerWidth = diagonalContainer.clientWidth;
  
    for (let i = 0; i < parseInt(blockNumber, 10); i++) {
      const block = document.createElement('div');
      block.className = 'block';
      block.style.height = containerHeight / parseInt(blockNumber, 10) + 'px';
      block.style.width = containerWidth / parseInt(blockNumber, 10) + 'px';
      block.style.marginRight = i * (containerWidth / parseInt(blockNumber, 10)) + 'px';
      diagonalContainer.appendChild(block);
    }
  }
  