import React from "react";
import Description from "./Description";
import userIconPost1 from "/photos/user-icon-post-1.jpg";
import post1 from "/photos/post-1.jpg";

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
            <img className="img-fluid" src={post1} alt="Imagem do Post" />
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
  );
};

export default Post;
