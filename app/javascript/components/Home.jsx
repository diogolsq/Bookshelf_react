import React from "react";
import { Link } from "react-router-dom";
import LoginHelper from '../helpers/LoginHelper';
import Navbar from '../components/Navbar';

export default () => (
  <div>
    <Navbar />
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="containery secondary-color">
          <h1 className="display-4">Gerenciador de Leitura</h1>
          
          <p className="lead">
            Ferramenta usando preceitos de metodologia ágil, agora servindo você para gerenciar seus livros
          </p>
          <hr className="my-4" />
          <Link
            to="/login"
            className="btn btn-lg custom-button"
            role="button"
          >
            Comece a mapear sua leitura agora
          </Link>
        </div>
      </div>
    </div>
  </div>
);