window.addEventListener('DOMContentLoaded', function(){
     const quotes = [
          {
               id: 1,
               left: "how are",
               right: "you doing"
          },
          {
               id: 2,
               left: "how is",
               right: "everything"
          },
          {
               id: 3,
               left: "hope you",
               right: "are doing fine"
          },
          {
               id: 4,
               left: "how is",
               right: "your family"
          },
     ];
     const heading1 = document.querySelector('#heading-1');
     const heading2 = document.querySelector('#heading-2');
     setInterval( function(){
          switchQuotes();
          heading1.classList.toggle('animation-up')
          heading2.classList.toggle('animation-down')
          function switchQuotes(){
               //  console.log(num)
               let num = Math.floor(Math.random() * quotes.length)
               let item = quotes[num];
               heading1.textContent = item.left;
               heading2.textContent = item.right;
          }
     }, 1000)
});