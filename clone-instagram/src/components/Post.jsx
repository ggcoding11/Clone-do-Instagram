import React from "react";
import Description from "./Description";
import UserIconPost1 from "/photos/user-icon-post-1.jpg";
import PostImage1 from "/photos/post-image-1.jpg";

import {
  BsThreeDots,
  BsSuitHeart,
  BsChat,
  BsSend,
  BsBookmark,
} from "react-icons/bs";

import "./css/Post.css";

const Post = () => {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="row">
          <div className="col-6">
            <div className="post-user-info">
              <div className="post-circle with-story">
                <div className="post-circle-whitespace">
                  <img
                    className="post-user-icon"
                    src={UserIconPost1}
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
              <BsThreeDots />
            </div>
          </div>
        </div>
      </div>

      <div className="post-image">
        <div className="row">
          <div className="col-12">
            <img className="img-fluid" src={PostImage1} alt="Imagem do Post" />
          </div>
        </div>
      </div>
      <div className="post-action-row">
        <div className="row p-1">
          <div className="col-6">
            <div className="d-flex align-items-center gap-3">
              <BsSuitHeart className="fs-3"/>
              <BsChat className="fs-3"/>
              <BsSend className="fs-3"/>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-end">
              <BsBookmark className="fs-3"/>
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
  );
};

export default Post;
