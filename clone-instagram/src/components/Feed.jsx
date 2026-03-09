import React from "react";

import InstagramLogo from "/photos/instagram-logo.png";
import MyUserIcon from "/photos/my-user-icon.jpg";
import PostImage1 from "/photos/post-image-1.jpg";
import PostImage2 from "/photos/post-image-2.jpg";
import PostImage3 from "/photos/post-image-3.jpg";
import UserIcon1 from "/photos/user-icon-1.jpg";
import UserIcon2 from "/photos/user-icon-2.jpg";
import UserIcon3 from "/photos/user-icon-3.jpg";
import UserIcon4 from "/photos/user-icon-4.jpg";
import UserIcon5 from "/photos/user-icon-5.jpg";
import UserIcon6 from "/photos/user-icon-6.jpg";
import UserIcon7 from "/photos/user-icon-7.jpg";
import UserIcon8 from "/photos/user-icon-8.jpg";
import UserIcon9 from "/photos/user-icon-9.jpg";
import UserIcon10 from "/photos/user-icon-10.jpg";
import UserIcon11 from "/photos/user-icon-11.jpg";
import UserIcon12 from "/photos/user-icon-12.jpg";

import Story from "./Story";
import Post from "./Post";

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

const Feed = () => {
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
                  <span className="d-none d-xl-inline fs-6">Página Inicial</span>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <BsSearch />
                  <span className="d-none d-xl-inline fs-6">Explorar</span>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <BsPlayBtn />
                  <span className="fw-normal d-none d-xl-inline fs-6">Reels</span>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <BsSend />
                  <span className="d-none d-xl-inline fs-6">Mensagens</span>
                </div>

                <div className="d-none d-md-flex align-items-xl-center gap-3">
                  <BsSuitHeart />
                  <span className="d-none d-xl-inline fs-6">Notificações</span>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="dashboard-user-circle">
                    <img
                      src={MyUserIcon}
                      className="dashboard-user-icon"
                      alt="Foto do Usuário"
                    />
                  </div>

                  <span className="d-none d-xl-inline fs-6">Perfil</span>
                </div>

                <div className="d-none d-md-flex align-items-xl-center gap-3">
                  <BsList />
                  <span className="d-none d-xl-inline fs-6">Menu</span>
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
                  <BsChevronDown className="fs-6" />
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
                photo={UserIcon1}
                username={"harumi_2"}
                otherUser={true}
              ></Story>
              <Story
                photo={UserIcon2}
                username={"harumi_2"}
                otherUser={true}
              ></Story>
              <Story
                photo={UserIcon3}
                username={"harumi_2"}
                otherUser={true}
              ></Story>
              <Story
                photo={UserIcon4}
                username={"harumi_2"}
                otherUser={true}
              ></Story>
              <Story
                photo={UserIcon5}
                username={"harumi_2"}
                otherUser={true}
              ></Story>
              <Story
                photo={UserIcon6}
                username={"harumi_2"}
                otherUser={true}
              ></Story>
              <Story
                photo={UserIcon7}
                username={"harumi_2"}
                otherUser={true}
              ></Story>
              <Story
                photo={UserIcon8}
                username={"harumi_2"}
                otherUser={true}
              ></Story>
              <Story
                photo={UserIcon9}
                username={"harumi_2"}
                otherUser={true}
              ></Story>
              <Story
                photo={UserIcon10}
                username={"harumi_2"}
                otherUser={true}
              ></Story>
              <Story
                photo={UserIcon11}
                username={"harumi_2"}
                otherUser={true}
              ></Story>
              <Story
                photo={UserIcon12}
                username={"harumi_2"}
                otherUser={true}
              ></Story>
            </div>
          </section>

          <section className="post-section">
            <Post
              userIcon={UserIcon2}
              username={"amorabernesse"}
              postImage={PostImage1}
              descriptionText={
                "Alvin, Simon e Teodoro foram indiciados pela polícia pelos crimes de estelionato e lavagem de dinheiro, segundo informações divulgadas na manhã deste domingo (15). De acordo com as investigações, os três irmãos são suspeitos de envolvimento em um esquema financeiro que teria movimentado grandes quantias por meio de transações consideradas fraudulentas. As autoridades afirmam que o inquérito reuniu elementos suficientes para apontar a participação direta do trio nos crimes. O caso agora será encaminhado ao Ministério Público, que deverá analisar as provas e decidir se apresenta denúncia formal à Justiça. Até o momento, a defesa dos envolvidos não se manifestou."
              }
            />

            <Post
              userIcon={UserIcon5}
              username={"amorabernesse"}
              postImage={PostImage2}
              descriptionText={
                "Alvin, Simon e Teodoro foram indiciados pela polícia pelos crimes de estelionato e lavagem de dinheiro, segundo informações divulgadas na manhã deste domingo (15). De acordo com as investigações, os três irmãos são suspeitos de envolvimento em um esquema financeiro que teria movimentado grandes quantias por meio de transações consideradas fraudulentas. As autoridades afirmam que o inquérito reuniu elementos suficientes para apontar a participação direta do trio nos crimes. O caso agora será encaminhado ao Ministério Público, que deverá analisar as provas e decidir se apresenta denúncia formal à Justiça. Até o momento, a defesa dos envolvidos não se manifestou."
              }
              withStory={true}
            />

            <Post
              userIcon={UserIcon8}
              username={"amorabernesse"}
              postImage={PostImage3}
              descriptionText={
                "Alvin, Simon e Teodoro foram indiciados pela polícia pelos crimes de estelionato e lavagem de dinheiro, segundo informações divulgadas na manhã deste domingo (15). De acordo com as investigações, os três irmãos são suspeitos de envolvimento em um esquema financeiro que teria movimentado grandes quantias por meio de transações consideradas fraudulentas. As autoridades afirmam que o inquérito reuniu elementos suficientes para apontar a participação direta do trio nos crimes. O caso agora será encaminhado ao Ministério Público, que deverá analisar as provas e decidir se apresenta denúncia formal à Justiça. Até o momento, a defesa dos envolvidos não se manifestou."
              }
              withStory={true}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Feed;