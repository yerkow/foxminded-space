import Header from "./components/Header";

function App() {
  return (
      <div className="wrapper">
          <Header />
          <div className="content d-flex align-center justify-between">
              {/*<img className="background-svg" src="/svg/Gradients.svg" alt="Gradients"/>*/}
              <div>
                  <img className="background-svg" src="/svg/BG.png" alt="homesvg"/>
                  <h1>Цифровые решения</h1>
                  <img src="/svg/text_home.svg" alt="Разработка"/>
                  <p>Мы - выдающиеся личности <br/>
                      кто любит сочетать искусство и дизайн</p>
              </div>

              <button className="elliptical-button"><img src="/svg/arrow.svg" alt="arrow"/></button>
          </div>
      </div>
  );
}

export default App;