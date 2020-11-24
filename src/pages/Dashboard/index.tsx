import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/53957541?s=460&u=ef6399a73af271da633fcca5c67cde3d570a1cda&v=4"
            alt="Vinícius Mendite"
          />

          <div>
            <strong>viniciusmendite/devfit</strong>
            <p>Mantenha sua saúde e seu corpo em forma</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/53957541?s=460&u=ef6399a73af271da633fcca5c67cde3d570a1cda&v=4"
            alt="Vinícius Mendite"
          />

          <div>
            <strong>viniciusmendite/devfit</strong>
            <p>Mantenha sua saúde e seu corpo em forma</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/53957541?s=460&u=ef6399a73af271da633fcca5c67cde3d570a1cda&v=4"
            alt="Vinícius Mendite"
          />

          <div>
            <strong>viniciusmendite/devfit</strong>
            <p>Mantenha sua saúde e seu corpo em forma</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/53957541?s=460&u=ef6399a73af271da633fcca5c67cde3d570a1cda&v=4"
            alt="Vinícius Mendite"
          />

          <div>
            <strong>viniciusmendite/devfit</strong>
            <p>Mantenha sua saúde e seu corpo em forma</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/53957541?s=460&u=ef6399a73af271da633fcca5c67cde3d570a1cda&v=4"
            alt="Vinícius Mendite"
          />

          <div>
            <strong>viniciusmendite/devfit</strong>
            <p>Mantenha sua saúde e seu corpo em forma</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
