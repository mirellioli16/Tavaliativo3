const quotes = [
    {
      quote: "A vida é o que acontece enquanto você está ocupado fazendo outros planos.",
      author: "John Lennon"
    },
    {
      quote: "Não é a força, mas a constância dos bons sentimentos que conduz os homens à felicidade.",
      author: "Friedrich Nietzsche"
    },
    {
      quote: "O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.",
      author: "Henry Ford"
    },
    {
        quote: "A persistência é o caminho do êxito.",
        author: "Charles Chaplin"
      },
      {
        quote: "O sucesso é ir de fracasso em fracasso sem perder entusiasmo.",
        author: "Winston Churchill"
      },
      {
        quote: "A vida é uma viagem, não um destino.",
        author: "Ralph Waldo Emerson"
      },
      {
        quote: "O que não provoca minha morte faz com que eu fique mais forte.",
        author: "Friedrich Nietzsche"
      },
      {
        quote: "Não espere por uma crise para descobrir o que é importante em sua vida.",
        author: "Platão"
      },
      {
        quote: "A felicidade é uma borboleta que, sempre que perseguida, parecerá inatingível; no entanto, se você for paciente, ela pode pousar no seu ombro.",
        author: "Nathaniel Hawthorne"
      },

      {
        quote: "A vida é o que acontece enquanto você está fazendo outros planos.",
        author: "Allen Saunders"
      },


      {
        quote: "A persistência é o caminho do êxito.",
        author: "Charles Chaplin"
      },
      {
        quote: "O sucesso é ir de fracasso em fracasso sem perder entusiasmo.",
        author: "Winston Churchill"
      },
      {
        quote: "A vida é uma viagem, não um destino.",
        author: "Ralph Waldo Emerson"
      },
      {
        quote: "O que não provoca minha morte faz com que eu fique mais forte.",
        author: "Friedrich Nietzsche"
      },
      {
        quote: "Não espere por uma crise para descobrir o que é importante em sua vida.",
        author: "Platão"
      },
      {
        quote: "A felicidade é uma borboleta que, sempre que perseguida, parecerá inatingível; no entanto, se você for paciente, ela pode pousar no seu ombro.",
        author: "Nathaniel Hawthorne"
      },
      {
        quote: "A vida é o que acontece enquanto você está fazendo outros planos.",
        author: "Allen Saunders"
      },
      {
        quote: "O maior prazer na vida é fazer o que as pessoas dizem que você não é capaz de fazer.",
        author: "Walter Bagehot"
      },
      {
        quote: "A mente é tudo. Você se torna aquilo que pensa.",
        author: "Buda"
      },
      {
        quote: "Se você quer ser bem-sucedido, precisa ter dedicação total, buscar seu último limite e dar o melhor de si mesmo.",
        author: "Ayrton Senna"
      },
      // Adicione mais citações aqui
    ];


      

      

      
    
    // Adicione mais citações à lista
  
  
  const quoteDisplay = document.getElementById('quoteDisplay');
  const authorDisplay = document.getElementById('authorDisplay');
  const newQuoteButton = document.getElementById('newQuoteButton');
  
  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteDisplay.textContent = `"${randomQuote.quote}"`;
    authorDisplay.textContent = `- ${randomQuote.author}`;
  }
  
  newQuoteButton.addEventListener('click', generateRandomQuote);
  
  // Exibir uma citação aleatória ao carregar a página
  generateRandomQuote();