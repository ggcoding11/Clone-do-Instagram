import React from "react";

import logo from "/photos/logo.png";
import userIconStory from "/photos/user-icon-story.jpg";
import iconStory from "/photos/icon-story.jpg";
import userIconPost1 from "/photos/user-icon-post-1.jpg";
import post1 from "/photos/post-1.jpg";
import "./App.css";
import Description from "./components/Description";

const App = () => {
  return (
    <div className="main container-fluid">
      <div className="row">
        <div className="col-12 col-md-1 border">
          <footer className="footer-row">
            <nav>
              <i className="d-none d-md-inline bi bi-instagram mb-4"></i>
              <i className="bi bi-house-door"></i>
              <i className="bi bi-search"></i>
              <i className="bi bi-play-btn"></i>
              <i className="bi bi-send"></i>
              <div className="footer-user-circle">
                <img
                  src={userIconStory}
                  className="footer-user-icon"
                  alt="Foto do Usuário"
                />
              </div>
            </nav>
          </footer>
        </div>
        <div className="col-12 col-md-11">
          <header>
            <nav className="navbar">
              <div className="container-fluid">
                <a className="navbar-brand" href="https://www.instagram.com/">
                  <img src={logo} alt="Logo Instagram" />
                  <i className="bi bi-chevron-down"></i>
                </a>
                <div className="navbar-icons">
                  <i className="bi bi-plus-lg"></i>
                  <i className="bi bi-suit-heart"></i>
                </div>
              </div>
            </nav>
          </header>

          <section>
            <div className="story-row">
              <div className="story-container">
                <div className="story-circle">
                  <img
                    className="story-icon"
                    src={userIconStory}
                    alt="Foto do Story"
                  />
                </div>

                <span className="story-username">Seu story</span>

                <div className="story-add-icon">
                  <i className="bi bi-plus-lg"></i>
                </div>
              </div>

              <div className="story-container">
                <div className="story-circle other-user">
                  <div className="story-circle-whitespace">
                    <img
                      className="story-icon"
                      src={iconStory}
                      alt="Foto do Story"
                    />
                  </div>
                </div>

                <span className="story-username other-user">harumi_2</span>
              </div>

              <div className="story-container">
                <div className="story-circle other-user">
                  <div className="story-circle-whitespace">
                    <img
                      className="story-icon"
                      src={iconStory}
                      alt="Foto do Story"
                    />
                  </div>
                </div>

                <span className="story-username other-user">harumi_2</span>
              </div>
              <div className="story-container">
                <div className="story-circle other-user">
                  <div className="story-circle-whitespace">
                    <img
                      className="story-icon"
                      src={iconStory}
                      alt="Foto do Story"
                    />
                  </div>
                </div>

                <span className="story-username other-user">harumi_2</span>
              </div>
              <div className="story-container">
                <div className="story-circle other-user">
                  <div className="story-circle-whitespace">
                    <img
                      className="story-icon"
                      src={iconStory}
                      alt="Foto do Story"
                    />
                  </div>
                </div>

                <span className="story-username other-user">harumi_2</span>
              </div>
              <div className="story-container">
                <div className="story-circle other-user">
                  <div className="story-circle-whitespace">
                    <img
                      className="story-icon"
                      src={iconStory}
                      alt="Foto do Story"
                    />
                  </div>
                </div>

                <span className="story-username other-user">harumi_2</span>
              </div>
              <div className="story-container">
                <div className="story-circle other-user">
                  <div className="story-circle-whitespace">
                    <img
                      className="story-icon"
                      src={iconStory}
                      alt="Foto do Story"
                    />
                  </div>
                </div>

                <span className="story-username other-user">harumi_2</span>
              </div>
              <div className="story-container">
                <div className="story-circle other-user">
                  <div className="story-circle-whitespace">
                    <img
                      className="story-icon"
                      src={iconStory}
                      alt="Foto do Story"
                    />
                  </div>
                </div>

                <span className="story-username other-user">harumi_2</span>
              </div>
              <div className="story-container">
                <div className="story-circle other-user">
                  <div className="story-circle-whitespace">
                    <img
                      className="story-icon"
                      src={iconStory}
                      alt="Foto do Story"
                    />
                  </div>
                </div>

                <span className="story-username other-user">harumi_2</span>
              </div>
              <div className="story-container">
                <div className="story-circle other-user">
                  <div className="story-circle-whitespace">
                    <img
                      className="story-icon"
                      src={iconStory}
                      alt="Foto do Story"
                    />
                  </div>
                </div>

                <span className="story-username other-user">harumi_2</span>
              </div>
              <div className="story-container">
                <div className="story-circle other-user">
                  <div className="story-circle-whitespace">
                    <img
                      className="story-icon"
                      src={iconStory}
                      alt="Foto do Story"
                    />
                  </div>
                </div>

                <span className="story-username other-user">harumi_2</span>
              </div>
              <div className="story-container">
                <div className="story-circle other-user">
                  <div className="story-circle-whitespace">
                    <img
                      className="story-icon"
                      src={iconStory}
                      alt="Foto do Story"
                    />
                  </div>
                </div>

                <span className="story-username other-user">harumi_2</span>
              </div>
              <div className="story-container">
                <div className="story-circle other-user">
                  <div className="story-circle-whitespace">
                    <img
                      className="story-icon"
                      src={iconStory}
                      alt="Foto do Story"
                    />
                  </div>
                </div>

                <span className="story-username other-user">harumi_2</span>
              </div>
              <div className="story-container">
                <div className="story-circle other-user">
                  <div className="story-circle-whitespace">
                    <img
                      className="story-icon"
                      src={iconStory}
                      alt="Foto do Story"
                    />
                  </div>
                </div>

                <span className="story-username other-user">harumi_2</span>
              </div>
              <div className="story-container">
                <div className="story-circle other-user">
                  <div className="story-circle-whitespace">
                    <img
                      className="story-icon"
                      src={iconStory}
                      alt="Foto do Story"
                    />
                  </div>
                </div>

                <span className="story-username other-user">harumi_2</span>
              </div>
              <div className="story-container">
                <div className="story-circle other-user">
                  <div className="story-circle-whitespace">
                    <img
                      className="story-icon"
                      src={iconStory}
                      alt="Foto do Story"
                    />
                  </div>
                </div>

                <span className="story-username other-user">harumi_2</span>
              </div>
              <div className="story-container">
                <div className="story-circle other-user">
                  <div className="story-circle-whitespace">
                    <img
                      className="story-icon"
                      src={iconStory}
                      alt="Foto do Story"
                    />
                  </div>
                </div>

                <span className="story-username other-user">harumi_2</span>
              </div>
              <div className="story-container">
                <div className="story-circle other-user">
                  <div className="story-circle-whitespace">
                    <img
                      className="story-icon"
                      src={iconStory}
                      alt="Foto do Story"
                    />
                  </div>
                </div>

                <span className="story-username other-user">harumi_2</span>
              </div>
              <div className="story-container">
                <div className="story-circle other-user">
                  <div className="story-circle-whitespace">
                    <img
                      className="story-icon"
                      src={iconStory}
                      alt="Foto do Story"
                    />
                  </div>
                </div>

                <span className="story-username other-user">harumi_2</span>
              </div>
              <div className="story-container">
                <div className="story-circle other-user">
                  <div className="story-circle-whitespace">
                    <img
                      className="story-icon"
                      src={iconStory}
                      alt="Foto do Story"
                    />
                  </div>
                </div>

                <span className="story-username other-user">harumi_2</span>
              </div>
              <div className="story-container">
                <div className="story-circle other-user">
                  <div className="story-circle-whitespace">
                    <img
                      className="story-icon"
                      src={iconStory}
                      alt="Foto do Story"
                    />
                  </div>
                </div>

                <span className="story-username other-user">harumi_2</span>
              </div>
              <div className="story-container">
                <div className="story-circle other-user">
                  <div className="story-circle-whitespace">
                    <img
                      className="story-icon"
                      src={iconStory}
                      alt="Foto do Story"
                    />
                  </div>
                </div>

                <span className="story-username other-user">harumi_2</span>
              </div>
            </div>
          </section>

          <section className="post-section">
            <div className="post-container">
              <div className="post-header">
                <div className="row">
                  <div className="col-6">
                    <div className="post-user-info">
                      <div className="post-circle with-story">
                        <div className="post-circle-whitespace">
                          <img
                            className="post-user-icon"
                            src={userIconPost1}
                            alt="Foto do Usuário"
                          />
                        </div>
                      </div>

                      <span className="post-username">amorabernesse</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex justify-content-end align-items-center w-100 h-100 gap-2">
                      <span className="post-user-follow">Follow</span>
                      <i className="bi bi-three-dots"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="post-image">
                <div className="row">
                  <div className="col-12">
                    <img
                      className="img-fluid"
                      src={post1}
                      alt="Imagem do Post"
                    />
                  </div>
                </div>
              </div>
              <div className="post-action-row">
                <div className="row">
                  <div className="col-6">
                    <div className="d-flex gap-2">
                      <i className="bi bi-suit-heart"></i>
                      <i className="bi bi-chat"></i>
                      <i className="bi bi-send"></i>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex justify-content-end">
                      <i className="bi bi-bookmark"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="post-description">
                <div className="row">
                  <div className="col-12">
                    <Description
                      texto={
                        "Alvin, Simon e Teodoro foram indiciados pela polícia pelos crimes de estelionato e lavagem de dinheiro, segundo informações divulgadas na manhã deste domingo (15). De acordo com as investigações, os três irmãos são suspeitos de envolvimento em um esquema financeiro que teria movimentado grandes quantias por meio de transações consideradas fraudulentas. As autoridades afirmam que o inquérito reuniu elementos suficientes para apontar a participação direta do trio nos crimes. O caso agora será encaminhado ao Ministério Público, que deverá analisar as provas e decidir se apresenta denúncia formal à Justiça. Até o momento, a defesa dos envolvidos não se manifestou."
                      }
                    ></Description>

                    <div className="text-secondary">há 15 minutos</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="post-container">
              <div className="post-header">
                <div className="row">
                  <div className="col-6">
                    <div className="post-user-info">
                      <div className="post-circle with-story">
                        <div className="post-circle-whitespace">
                          <img
                            className="post-user-icon"
                            src={userIconPost1}
                            alt="Foto do Usuário"
                          />
                        </div>
                      </div>

                      <span className="post-username">amorabernesse</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex justify-content-end align-items-center w-100 h-100 gap-2">
                      <span className="post-user-follow">Follow</span>
                      <i className="bi bi-three-dots"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="post-image">
                <div className="row">
                  <div className="col-12">
                    <img
                      className="img-fluid"
                      src={post1}
                      alt="Imagem do Post"
                    />
                  </div>
                </div>
              </div>
              <div className="post-action-row">
                <div className="row">
                  <div className="col-6">
                    <div className="d-flex gap-2">
                      <i className="bi bi-suit-heart"></i>
                      <i className="bi bi-chat"></i>
                      <i className="bi bi-send"></i>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex justify-content-end">
                      <i className="bi bi-bookmark"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="post-description">
                <div className="row">
                  <div className="col-12">
                    <Description
                      texto={
                        "Alvin, Simon e Teodoro foram indiciados pela polícia pelos crimes de estelionato e lavagem de dinheiro, segundo informações divulgadas na manhã deste domingo (15). De acordo com as investigações, os três irmãos são suspeitos de envolvimento em um esquema financeiro que teria movimentado grandes quantias por meio de transações consideradas fraudulentas. As autoridades afirmam que o inquérito reuniu elementos suficientes para apontar a participação direta do trio nos crimes. O caso agora será encaminhado ao Ministério Público, que deverá analisar as provas e decidir se apresenta denúncia formal à Justiça. Até o momento, a defesa dos envolvidos não se manifestou."
                      }
                    ></Description>

                    <div className="text-secondary">há 15 minutos</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
