import ModuleList from '../Modules/List';
import Status from './Status';
import './index.css';

function Home() {
  return (
    <div className="d-flex justify-content-between mt-5">
      <ModuleList />
      <Status />
    </div>
  );
}

export default Home;
