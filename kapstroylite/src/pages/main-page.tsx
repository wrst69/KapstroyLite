import Project from '../components/project';
import { projects } from '../mock/projects';

function MainScreen() {
    return (
        <div>
            <header><h1>KapstroyLite</h1></header>
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