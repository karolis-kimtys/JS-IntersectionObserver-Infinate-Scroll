function App() {
  document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.item');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('show', entry.isIntersecting); /// load once only

          // if (entry.isIntersecting) {
          //   observer.unobserve(entry.target);
          // }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-50px',
      }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const newObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting);
      });
    }, {});

    const lazyObserver = new IntersectionObserver(
      (entries) => {
        const lastCard = entries[0];
        if (!lastCard.isIntersecting) return;
        loadNewCards();
        lazyObserver.unobserve(lastCard.target);
        lazyObserver.observe(document.querySelector('.item:last-child'));
      },
      {
        threshold: 1,
        rootMargin: '150px',
      }
    );

    lazyObserver.observe(document.querySelector('.item:last-child'));

    const cardContainer = document.querySelector('.container');

    function loadNewCards() {
      for (let i = 0; i < 5; i++) {
        const card = document.createElement('div');
        // card.textContent = '';
        card.classList.add('item');
        newObserver.observe(card);
        cardContainer.append(card);
      }
    }
  });

  return (
    <div className="container">
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
    </div>
  );
}

export default App;
