import React from "react";

function Home() {
  return (
    <>
      <div id="showcase">
        <div>
          <h1>Strength is a reward.</h1>
          <button className="btn white">Choose your Program</button>
        </div>
      </div>
      <main className="container" id="programs">
        <header className="programs__header">
          <h1>Explore our programs that fit your style</h1>
        </header>
        <section className="programs">
          <div className="programs__content grid">
            <div className="programs__card">
              <img
                src="/images/sushil-ghimire-eFx1KZhaSvo-unsplash.jpg"
                alt=""
              />
              <div className="programs__name">
                <h1>Program 1</h1>
                <p>Best for those trying to lose weight</p>
                <button className="btn white">Add to Cart</button>
              </div>
            </div>
            <div className="programs__card">
              <img
                src="/images/alonso-reyes-0HlI76m4jxU-unsplash.jpg"
                alt="picture"
              />
              <div className="programs__name">
                <h1>Program 1</h1>
                <p>Best for those trying to lose weight</p>
                <button className="btn white">Add to Cart</button>
              </div>
            </div>
            <div className="programs__card">
              <img
                src="/images/hayley-kim-design-eot-ka5dM7Q-unsplash.jpg"
                alt=""
              />
              <div className="programs__name">
                <h1>Program 1</h1>
                <p>Best for those trying to lose weight</p>
                <button className="btn white">Add to Cart</button>
              </div>
            </div>
            <div className="programs__card">
              <img
                src="/images/john-fornander-TAZoUmDqzXk-unsplash.jpg"
                alt=""
              />
              <div className="programs__name">
                <h1>Program 1</h1>
                <p>Best for those trying to lose weight</p>
                <button className="btn white">Add to Cart</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
