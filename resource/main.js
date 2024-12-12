
  const textElement = document.getElementById('header-par');
  const text = textElement.textContent;
  const letters = text.split('');

  function typeWriter(text, element) {
      let i = 0;
      let txt = '';
      let speed = 50; // ניתן לשנות את המהירות

      function type() {
          if (i < text.length) {
              txt += text.charAt(i);
              element.innerHTML = txt;
              i++;
              setTimeout(type, speed);
          }
      }
      type();
  }