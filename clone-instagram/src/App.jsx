import React from "react";

import InstagramLogo from "/photos/instagram-logo.png";
import UserIconStory from "/photos/user-icon-story.jpg";
import MyUserIcon from "/photos/my-user-icon.jpg";
import UserIconPost1 from "/photos/user-icon-post-1.jpg";
import PostImage1 from "/photos/post-image-1.jpg";

import Story from "./components/Story";
import Post from "./components/Post";

import {
  BsInstagram,
  BsChevronDown,
  BsHouseDoor,
  BsSearch,
  BsPlayBtn,
  BsSend,
  BsSuitHeart,
  BsList,
  BsPlusLg,
} from "react-icons/bs";

import "./css/App.css";

const App = () => {
  return (
    <div className="main container-fluid">
      <div className="row">
        <div className="col-12 col-md-1 col-xl-2 border">
          <div className="dashboard">
            <nav>
              <div className="d-none d-md-flex flex-md-column align-items-md-center align-items-xl-start w-100 mb-5">
                <BsInstagram className="d-inline d-xl-none" />
                <img
                  src={InstagramLogo}
                  alt="Logo Instagram"
                  className="d-none d-xl-inline dashboard-logo"
                />
              </div>

              <div className="d-flex flex-md-column justify-content-evenly align-items-center align-items-xl-start gap-4 w-100 p-1">
                <div className="d-flex align-items-center gap-3">
                  <BsHouseDoor />
                  <span className="d-none d-xl-inline fs-5">Home</span>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <BsSearch />
                  <span className="d-none d-xl-inline fs-5">Explore</span>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <BsPlayBtn />
                  <span className="d-none d-xl-inline fs-5">Reels</span>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <BsSend />
                  <span className="d-none d-xl-inline fs-5">Messages</span>
                </div>

                <div className="d-none d-md-flex align-items-xl-center gap-3">
                  <BsSuitHeart />
                  <span className="d-none d-xl-inline fs-5">Notifications</span>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="dashboard-user-circle">
                    <img
                      src={MyUserIcon}
                      className="dashboard-user-icon"
                      alt="Foto do Usuário"
                    />
                  </div>

                  <span className="d-none d-xl-inline fs-5">Profile</span>
                </div>

                <div className="d-none d-md-flex align-items-xl-center gap-3">
                  <BsList />
                  <span className="d-none d-xl-inline fs-5">Menu</span>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="col-12 col-md-11 col-xl-10">
          <header className="navbar-header d-block d-md-none">
            <nav className="navbar">
              <div className="container-fluid">
                <a className="navbar-brand" href="https://www.instagram.com/">
                  <img src={InstagramLogo} alt="Logo Instagram" />
                  <BsChevronDown className="fs-6"/>
                </a>
                <div className="navbar-icons">
                  <BsPlusLg className="fs-2" />
                  <BsSuitHeart className="fs-3" />
                </div>
              </div>
            </nav>
          </header>

          <section className="story-section">
            <div className="story-row">
              <Story photo={MyUserIcon}></Story>
              <Story
                photo={UserIconStory}
                username={"harumi_2"}
                otherUser={true}
              ></Story>
              <Story
                photo={UserIconStory}
                username={"harumi_2"}
                otherUser={true}
              ></Story>
              <Story
                photo={UserIconStory}
                username={"harumi_2"}
                otherUser={true}
              ></Story>
              <Story
                photo={UserIconStory}
                username={"harumi_2"}
                otherUser={true}
              ></Story>
              <Story
                photo={UserIconStory}
                username={"harumi_2"}
                otherUser={true}
              ></Story>
              <Story
                photo={UserIconStory}
                username={"harumi_2"}
                otherUser={true}
              ></Story>
              <Story
                photo={UserIconStory}
                username={"harumi_2"}
                otherUser={true}
              ></Story>
              <Story
                photo={UserIconStory}
                username={"harumi_2"}
                otherUser={true}
              ></Story>
              <Story
                photo={UserIconStory}
                username={"harumi_2"}
                otherUser={true}
              ></Story>
              <Story
                photo={UserIconStory}
                username={"harumi_2"}
                otherUser={true}
              ></Story>
              <Story
                photo={UserIconStory}
                username={"harumi_2"}
                otherUser={true}
              ></Story>
              <Story
                photo={UserIconStory}
                username={"harumi_2"}
                otherUser={true}
              ></Story>
              <Story
                photo={UserIconStory}
                username={"harumi_2"}
                otherUser={true}
              ></Story>
              <Story
                photo={UserIconStory}
                username={"harumi_2"}
                otherUser={true}
              ></Story>
              <Story
                photo={UserIconStory}
                username={"harumi_2"}
                otherUser={true}
              ></Story>
              <Story
                photo={UserIconStory}
                username={"harumi_2"}
                otherUser={true}
              ></Story>
              <Story
                photo={UserIconStory}
                username={"harumi_2"}
                otherUser={true}
              ></Story>
              <Story
                photo={UserIconStory}
                username={"harumi_2"}
                otherUser={true}
              ></Story>
              <Story
                photo={UserIconStory}
                username={"harumi_2"}
                otherUser={true}
              ></Story>
              <Story
                photo={UserIconStory}
                username={"harumi_2"}
                otherUser={true}
              ></Story>
            </div>
          </section>

          <section className="post-section">
            <Post
              userIcon={UserIconPost1}
              username={"amorabernesse"}
              postImage={PostImage1}
              descriptionText={
                "Alvin, Simon e Teodoro foram indiciados pela polícia pelos crimes de estelionato e lavagem de dinheiro, segundo informações divulgadas na manhã deste domingo (15). De acordo com as investigações, os três irmãos são suspeitos de envolvimento em um esquema financeiro que teria movimentado grandes quantias por meio de transações consideradas fraudulentas. As autoridades afirmam que o inquérito reuniu elementos suficientes para apontar a participação direta do trio nos crimes. O caso agora será encaminhado ao Ministério Público, que deverá analisar as provas e decidir se apresenta denúncia formal à Justiça. Até o momento, a defesa dos envolvidos não se manifestou."
              }
            />

            <Post
              userIcon={UserIconPost1}
              username={"amorabernesse"}
              postImage={PostImage1}
              descriptionText={
                "Alvin, Simon e Teodoro foram indiciados pela polícia pelos crimes de estelionato e lavagem de dinheiro, segundo informações divulgadas na manhã deste domingo (15). De acordo com as investigações, os três irmãos são suspeitos de envolvimento em um esquema financeiro que teria movimentado grandes quantias por meio de transações consideradas fraudulentas. As autoridades afirmam que o inquérito reuniu elementos suficientes para apontar a participação direta do trio nos crimes. O caso agora será encaminhado ao Ministério Público, que deverá analisar as provas e decidir se apresenta denúncia formal à Justiça. Até o momento, a defesa dos envolvidos não se manifestou."
              }
              withStory={true}
            />

            <Post
              userIcon={UserIconPost1}
              username={"amorabernesse"}
              postImage={PostImage1}
              descriptionText={
                "Alvin, Simon e Teodoro foram indiciados pela polícia pelos crimes de estelionato e lavagem de dinheiro, segundo informações divulgadas na manhã deste domingo (15). De acordo com as investigações, os três irmãos são suspeitos de envolvimento em um esquema financeiro que teria movimentado grandes quantias por meio de transações consideradas fraudulentas. As autoridades afirmam que o inquérito reuniu elementos suficientes para apontar a participação direta do trio nos crimes. O caso agora será encaminhado ao Ministério Público, que deverá analisar as provas e decidir se apresenta denúncia formal à Justiça. Até o momento, a defesa dos envolvidos não se manifestou."
              }
              withStory={true}
            />

            <Post
              userIcon={UserIconPost1}
              username={"amorabernesse"}
              postImage={PostImage1}
              descriptionText={
                "Alvin, Simon e Teodoro foram indiciados pela polícia pelos crimes de estelionato e lavagem de dinheiro, segundo informações divulgadas na manhã deste domingo (15). De acordo com as investigações, os três irmãos são suspeitos de envolvimento em um esquema financeiro que teria movimentado grandes quantias por meio de transações consideradas fraudulentas. As autoridades afirmam que o inquérito reuniu elementos suficientes para apontar a participação direta do trio nos crimes. O caso agora será encaminhado ao Ministério Público, que deverá analisar as provas e decidir se apresenta denúncia formal à Justiça. Até o momento, a defesa dos envolvidos não se manifestou."
              }
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
