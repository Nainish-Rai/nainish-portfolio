import "./App.css";
import "../css-presets/perspectivegrid.css";
import { useEffect } from "react";
import useScript from "../hooks/useScript";

function App() {
  useScript("/js-presets/perspectivegrid/gsap.min.js");
  useScript("/js-presets/perspectivegrid/imagesloaded.pkgd.min.js");
  useScript("/js-presets/perspectivegrid/lenis.min.js");
  useScript("/js-presets/perspectivegrid/ScrollTrigger.min.js");
  useScript("/js-presets/perspectivegrid/utils.js");
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "/js-presets/perspectivegrid/index.js";
    script.async = true;
    script.type = "module";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <section className="content">
        <div className="grid grid--1">
          <div className="grid-wrap">
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/1.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/2.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/3.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/4.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/5.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/6.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/7.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/8.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/9.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/10.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/11.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/12.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/13.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/14.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/15.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/16.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/17.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/18.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/19.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/20.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/21.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/22.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/23.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/24.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/25.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/26.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/27.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/28.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/29.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/30.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/31.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/32.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/33.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/34.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/35.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/36.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/37.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/38.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/39.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/40.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/41.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/42.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/43.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/44.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/45.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/46.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/47.jpg)" }}
              ></div>
            </div>
            <div className="grid__item">
              <div
                className="grid__item-inner"
                style={{ backgroundImage: "url(img/48.jpg)" }}
              ></div>
            </div>
          </div>
        </div>
        <h3 className="content__title content__title--right content__title--top">
          Fleeting moments
        </h3>
      </section>
    </>
  );
}

export default App;
