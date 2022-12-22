import Project from '../components/project';
import { projects } from '../mock/projects';

function MainScreen() {
  return (
    <div >
      <header className="bg-slate-500 h-16">
        <div className="flex justify-between items-center">           
          <h1 className="text-white text-5xl cl font-bold underline w-1/5">KapstroyLite</h1> 
        </div>                   
        <div className="">
          <div>User</div>
        </div>
      </header>

      <div className="wrapper">
        <Project project={projects[0]} />
      </div>
      <footer className="page-footer">
        <div className="page-footer__copyright">© Для частного использования группой капитального строительства</div>
      </footer> 
    </div>    
  );
}

export default MainScreen;