
import Image from "next/image";
import "../app/style/hero.css";

export default function Hero() {
  return (
    <div className="hero-had">
      <div className="conatiner">
        <div className="main">
          <div className="text-had">
            <h1>I am Sagar, a Creative Web Developer</h1>
            <p>
              I create responsive, user-friendly websites with a focus on
              functionality and design.&quot;
              <br />
              &quot;Passionate about bringing ideas to life through code and
              creativity.
            </p>
            <button className="button">Explore My Work</button>
          </div>
          <div className="img">
            <Image
              src="/portimg.png"
              width={200}
              height={200}
              alt="imag"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
