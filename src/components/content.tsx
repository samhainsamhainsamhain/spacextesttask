function Content() {
  return (
    <main className="content">
      <section className="title">
        <div className="titleContainer">
          <h1 className="titleMain">Путешествие</h1>
          <h2 className="titleSecondary">на красную планету</h2>
        </div>
        <button className="journeyButton">Начать путешествие</button>
      </section>
      <div className="planet"></div>
      <section className="about">
        <div className="block one">
          <p>мы</p>
          <span>1</span>
          <p>на рынке</p>
        </div>
        <div className="block two">
          <p>гарантируем</p>
          <span>50%</span>
          <p>безопасность</p>
        </div>
        <div className="block three">
          <p>календарик за</p>
          <span>2001</span>
          <p>в подарок</p>
        </div>
        <div className="block four">
          <p>путешествие</p>
          <span>597</span>
          <p>дней</p>
        </div>
      </section>
    </main>
  );
}

export default Content;
