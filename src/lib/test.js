const say = function (text) {
  const block = document.createElement('div');
  block.className = 'text_new_div';
  block.innerHTML = text;
  document.body.appendChild(block);
};

export default say;
