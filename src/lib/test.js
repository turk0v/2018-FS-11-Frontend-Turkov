const say = function (text)	{
    var new_block=document.createElement('div');
    new_block.style.position='absolute'
    new_block.style.textAlign='center';
    // new_block.style.top='50%';
    // new_block.style.left='50%';
    new_block.style.width='500px';
    new_block.style.height='500px';
    new_block.style.backgroundColor='green';
    new_block.innerHTML=text;
    document.body.appendChild(new_block);
 }
export default say;