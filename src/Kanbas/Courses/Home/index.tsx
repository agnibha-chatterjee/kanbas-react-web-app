import ModuleList from '../Modules/List';
import Status from './Status';
import './index.css';

function Home() {
  return (
    <>
      <div className="d-flex justify-content-between mt-5">
        <div className="w-100 me-4">
          <ModuleList />
        </div>
        <Status />
      </div>
    </>
  );
}

export default Home;
