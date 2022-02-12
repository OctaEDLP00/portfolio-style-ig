import ProfileImage from '../../img/profile/octaviocaro_21.jpg'

export default function AboutMe() {
  return(
    <div className="div__aboutme">
      <div className="about-me">
        <div className="about-me__img">
          <div className="border"></div>
          <img src={ProfileImage} alt="Me" />
        </div>
        <div className="about-me__title">
          <h1>Octavio Caro</h1>
        </div>
        <div className="about-me__list">
          <ul className="about-me__list-ul">
            <li>
              <a href="#Proyects">
                <span>1 </span>
                Proyects
              </a>
            </li>
            <li>
              <a href="#Lenguajes">
                <span>8 </span>
                Languages
              </a>
            </li>
            <li>
              <a href="#">
                <span> </span>
                
              </a>
            </li>
          </ul>
        </div>
        <div className="about-me__content">
          <p>
            I am a full stack developer with a passion for creating
            beautiful and intuitive user interfaces. I have a background
            in graphic design and web development, and I am currently
            working on my portfolio.
          </p>
          <p>
            I am a self-taught developer with a background in graphic design
            and web development. I have a passion for creating beautiful and
            intuitive user interfaces. I am currently working on my portfolio.
          </p>
        </div>
      </div>
    </div>
  )
}