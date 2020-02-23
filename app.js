wordArr = ['If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.', 
'The person who says it cannot be done should not interrupt the person who is doing it.', 
'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.', 
'The question isn’t who is going to let me; it’s who is going to stop me.', 
'When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.', 
'The two most important days in your life are the day you are born and the day you find out why.',
'The most common way people give up their power is by thinking they don’t have any.',
'Challenges are what make life interesting and overcoming them is what makes life meaningful.',
'I have learned over the years that when one’s mind is made up, this diminishes fear.'];

authorArr = ['King Luther', 'Marvellous Kelvin', 'Nelly J. Man', 'Goodman Love', 'Mary Gate', 'John Jazz', 'Mike Martin', 'Becky Ball', 'Arial Sing'];

colorArr = ['#FF0000'	, '#800000', '#FFFF00', 	'#808000', 	'#00FF00', '#008000', '#00FFFF', 	'#008080', '#0000FF'];

bgColorArr = ['#FF0000'	, '#800000', '#FFFF00', 	'#808000', 	'#00FF00', '#008000', '#00FFFF', 	'#008080', '#0000FF'];


const buttonClick = document.getElementById("new-quote");
const authorText = document.getElementById("text");
const authorName = document.getElementById("author");
const colorChain = document.querySelectorAll(".color-change");
const bgColor = document.querySelectorAll(".bg-color");


 buttonClick.addEventListener("click", newEvent);

  function newEvent(e){
    authorText.innerHTML = wordArr[Math.floor(Math.random() * 9)];
    authorName.innerHTML = authorArr[Math.floor(Math.random() * 9)];
    let fixedColor = colorArr[Math.floor(Math.random() * 9)];
    colorChain.forEach(function(item){
      item.style.color = fixedColor;
    });
    bgColor.forEach(function(items){
      items.style.backgroundColor = fixedColor;
    });
  
  };