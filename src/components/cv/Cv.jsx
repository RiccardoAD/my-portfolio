import React from 'react';
import '../cv/cv.css'; // Assicurati che questo file contenga gli stili corretti
import img from '../../assets/img/IMG.jpg'; // Importa l'immagine corretta

function CV() {
  return (
    <main className="l-main bd-container">
      <div className="resume" id="area-cv">
        <div className="resume__left">
          {/* HOME */}
          <section className="home" id="home">
            <div className="home_containter section bd-grid">
              <div className="home_data bd-grid">
                <img src={img} alt="Riccardo Adorni" className="home_img center" />
                <h1 className="home_title">Riccardo <b>Adorni</b></h1>
                <h3 className="home_profession">Web Developer</h3>
              </div>
              <div className="home_address bd-grid">
                <span className="home_information"><i className="bx bx-map"></i> Parma</span>
                <span className="home_information"><i className="bx bx-envelope"></i> Rick_95@libero.it</span>
                <span className="home_information"><i className="bx bx-phone"></i> +3451124313</span>
              </div>
            </div>
          </section>

          {/* SOCIAL */}
          <section className="social section">
            <h2 className="section-title">SOCIAL</h2>
            <div className="social_container bd-grid">
              <a href="https://www.linkedin.com/in/riccardo-adorni-developer/" target="_blank" rel="noreferrer" className="social_link">
                <i className="bx bxl-linkedin-square social_icon"></i> @Riccardo-adorni-developer
              </a>
              <a href="https://github.com/RiccardoAD" target="_blank" rel="noreferrer" className="social_link">
                <i className="bx bxl-github social_icon"></i> @RiccardoAD
              </a>
            </div>
          </section>

          {/* PROFILE */}
          <section className="profile section" id="profile">
            <h2 className="section-title">Profile</h2>
            <p className="profile_description">
              Ho frequentato un corso di full-stack developer arricchendo le mie competenze con un totale di 960 ore di studio e messa in pratica delle competenze acquisite. Ho trasformato un mio interesse per il web design e development, nato durante la pandemia, in una carriera professionale.
            </p>
          </section>

          {/* EDUCATION */}
          <section className="education section" id="education">
            <h2 className="section-title">Education</h2>
            <div className="education_container bd-grid">
              <div className="education_content">
                <div className="education_time">
                  <span className="education_rounder"></span>
                  <span className="education_line"></span>
                </div>
                <div className="education_data bd-grid">
                  <h3 className="education_title">Full Stack Developer</h3>
                  <span className="education_studies">DigiChamps – Full Stack Developer</span>
                  <span className="education_year">1/2024 - 7/2024</span>
                </div>
              </div>
              <div className="education_content">
                <div className="education_time">
                  <span className="education_rounder"></span>
                  <span className="education_line"></span>
                </div>
                <div className="education_data bd-grid">
                  <h3 className="education_title">FORMART</h3>
                  <span className="education_studies">Consulente d'immagine</span>
                  <span className="education_year">2014 - 2015</span>
                </div>
              </div>
              <div className="education_content">
                <div className="education_time">
                  <span className="education_rounder"></span>
                </div>
                <div className="education_data bd-grid">
                  <h3 className="education_title">Diploma in Elettronica e Informatica</h3>
                  <span className="education_studies">ITIS Leonardo da Vinci</span>
                  <span className="education_year">2008 - 2014</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="resume__right">
          {/* CERTIFICATES */}
          <section className="certificate section" id="certificate">
            <h2 className="section-title">Certificates</h2>
            <div className="certificate_container bd-grid">
              <div className="certificate_content">
                <h3 className="certificate_title">IFOA Full-stack Development - 2024</h3>
                <p className="certificate_description">
                  Competenze Acquisite:<br />
                  - Conoscere le basi dei protocolli Internet, le basi della programmazione e delle architetture software.<br />
                  - Creare la parte visiva di un sito web desktop e mobile.<br />
                  - Creare pagine Web statiche e dinamiche.<br />
                  - Utilizzare framework front-end comuni.<br />
                  - Collegarsi a un Database e utilizzare PHP come linguaggio di back-end.
                </p>
              </div>
              <div className="certificate_content">
                <h3 className="certificate_title">WordPress Development - 2024</h3>
                <p className="certificate_description">
                  - Plug-in<br />
                  - Elementor<br />
                </p>
              </div>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section className="experience section" id="experience">
            <h2 className="section-title">Esperienze</h2>
            <div className="experience_container bd-grid">
              <div className="experience_content">
                <div className="experience_time">
                  <span className="experience_rounder"></span>
                  <span className="experience_line"></span>
                </div>
                <div className="experience_data bd-grid">
                  <h3 className="experience_title">WEB DEVELOPER</h3>
                  <span className="experience_company">Gen 2024 - Presente</span>
                  <p className="experience_description">
                    Durante il corso, ho lavorato su progetti di sviluppo front-end.
                  </p>
                </div>
              </div>
              <div className="experience_content">
                <div className="experience_time">
                  <span className="experience_rounder"></span>
                </div>
                <div className="experience_data bd-grid">
                  <h3 className="experience_title">Hair Stylist</h3>
                  <span className="experience_company">Agosto 2015 - Ott 2023</span>
                  <p className="experience_description">
                    Lavorato come consulente d'immagine, accumulando esperienza nel lavoro di gruppo e con il pubblico.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section className="skills section" id="skills">
            <h2 className="section-title">Skills</h2>
            <div className="skills_content bd-grid">
              <ul className="skills_data">
                <li className="skills_name"><span className="skills_circle"></span> HTML</li>
                <li className="skills_name"><span className="skills_circle"></span> CSS</li>
                <li className="skills_name"><span className="skills_circle"></span> Bootstrap</li>
                <li className="skills_name"><span className="skills_circle"></span> JavaScript</li>
                <li className="skills_name"><span className="skills_circle"></span> TypeScript</li>
                <li className="skills_name"><span className="skills_circle"></span> React</li>
              </ul>
              <ul className="skills_data">
                <li className="skills_name"><span className="skills_circle"></span> PHP</li>
                <li className="skills_name"><span className="skills_circle"></span> MySQL</li>
                <li className="skills_name"><span className="skills_circle"></span> Laravel</li>
                <li className="skills_name"><span className="skills_circle"></span> Git</li>
                <li className="skills_name"><span className="skills_circle"></span> WordPress</li>
              </ul>
            </div>
          </section>

          {/* LANGUAGES */}
          <section className="languages section">
            <h2 className="section-title">Languages</h2>
            <div className="languages_container">
              <ul className="languages_content bd-grid">
                <li className="languages_name"><span className="languages_circle"></span> Italiano</li>
                <li className="languages_name"><span className="languages_circle"></span> English</li>
              </ul>
            </div>
          </section>

          {/* INTERESTS */}
          <section className="interests section">
            <h2 className="section-title">Interests</h2>
            <div className="interests_container bd-grid">
              <div className="interests_content">
                <i className="bx bx-code-alt interests_icon"></i>
                <span className="interests_name">Coding</span>
              </div>
              <div className="interests_content">
                <i className="bx bxs-game interests_icon"></i>
                <span className="interests_name">Gaming</span>
              </div>
              <div className="interests_content">
                <i className="bx bxs-plane-alt interests_icon"></i>
                <span className="interests_name">Traveling</span>
              </div>
              <div className="interests_content">
                <i className="bx bxs-book interests_icon"></i>
                <span className="interests_name">Reading</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default CV;