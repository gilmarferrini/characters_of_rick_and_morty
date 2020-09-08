import React from 'react';
import { FiChevronRight } from 'react-icons/fi'; // feather icons

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explorer repositórios no Github</Title>
      <Form action="">
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="/">
          <img
            src="https://avatars0.githubusercontent.com/u/51804511?s=460&u=9cc1b4f147cbf4cdf51e3487948cbc6663a30123&v=4"
            alt="Gilmar Ferrini"
          />
          <div>
            <strong>Facebook/react</strong>
            <p>
              React is an open source JavaScript used for designing user
              interfaces
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="/">
          <img
            src="https://avatars0.githubusercontent.com/u/51804511?s=460&u=9cc1b4f147cbf4cdf51e3487948cbc6663a30123&v=4"
            alt="Gilmar Ferrini"
          />
          <div>
            <strong>Facebook/react</strong>
            <p>
              React is an open source JavaScript used for designing user
              interfaces
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="/">
          <img
            src="https://avatars0.githubusercontent.com/u/51804511?s=460&u=9cc1b4f147cbf4cdf51e3487948cbc6663a30123&v=4"
            alt="Gilmar Ferrini"
          />
          <div>
            <strong>Facebook/react</strong>
            <p>
              React is an open source JavaScript used for designing user
              interfaces
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
