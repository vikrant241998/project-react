import React from "react";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-left">
            Best Themes and <br /> Plugins Marketplace
          </div>
          <div className="para">
            <p>
              Welcome to DigiMarket Multi vendor Marketplace Theme. <br /> Buy
              and Sell any kind of Digital Product you Wish.
            </p>
          </div>

          <div className="button-box">
            <div className="button-container">
              <button className="btn-left">Show Now</button>
              <button className="btn-right">Start Selling</button>
            </div>
          </div>
        </div>

        <div className="logo-event">
          <img src="./1.png" alt="" className="set-img" />
          <img src="./2.png" alt="" className="set-img" />
          <img src="./3.png" alt="" className="set-img" />
          <img src="./4.png" alt="" className="set-img" />
          <img src="./5.png" alt="" className="set-img" />
          <img src="./6.png" alt="" className="set-img" />
        </div>

        <h1 className="fea">Features</h1>
        <div className="features-container">
          <div className="fea-card">
            <img src="./img-1.png" alt="" className="set-image" />
            <div className="text-box">
              <h3>Benchmark</h3>
              <p>Photography Woedpress Themes</p> <br />
              <span>$59.00 &nbsp;&nbsp; - &nbsp;&nbsp;$199.00</span>
            </div>
          </div>

          <div className="fea-card">
            <img src="./img-2.png" alt="" className="set-image" />
            <div className="text-box">
              <h3>ChapterOne</h3>
              <p>Photography Woedpress Themes</p> <br />
              <span>$74.00</span>
            </div>
          </div>

          <div className="fea-card">
            <img src="./img-3.png" alt="" className="set-image" />
            <div className="text-box">
              <h3>Avtorai</h3>
              <p>Photography Woedpress Themes</p> <br />
              <span>$30.00</span>
            </div>
          </div>
        </div>

        <div className="digital-container">
          <h1>Why Choose DigiMarket</h1>
          <br />
          <p>
            Anything embarrassing hidden in the middle of text. All the Lorem
            Ipsum generators on
          </p>
          <p> the Internet tend to repeat predefined necessary.</p>
        </div>

        <div className="digital-box">
          <div className="digital-card">
          <div className="digital-text-box">
            <img src="./digi-1.png" alt="" />
            <h3>We are Open Source</h3>
            <p>Lorem ipsum dummy text in print and website industry are usually use in these section</p> <br />         
        </div>
        </div>

        <div className="digital-card">
          <div className="digital-text-box">
            <img src="./digi-2.png" alt="" />
            <h3>Problem Solvers</h3>
            <p>Lorem ipsum dummy text in print and website industry are usually use in these section</p> <br />         
        </div>
        </div>

        <div className="digital-card">
          <div className="digital-text-box">
            <img src="./digi-3.png" alt="" />
            <h3> Regular Updates & Bug fixes</h3>
            <p>Lorem ipsum dummy text in print and website industry are usually use in these section</p> <br />         
        </div>
        </div>




        </div>
        
      </div>
    </>
  );
}
