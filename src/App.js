import logo from './logo.svg';
import './App.css';
import Skill from './modules/Skills';
import ProjectList from './modules/ProjectList';
import TitleCard from "./modules/TitleCard"
import ContactInfo from './modules/Contact';
import Resume from './modules/Resume'
import ProjectListData from './ProjectList.json';
import ProfessionalListData from './professionalProjectList.json';
function App() {
  
  return (
    <div className="App max-w-[100vw] overflow-x-hidden">
      <header className="App-header">
        <TitleCard />
        <div className="min-w-[100vw] border-solid border-gray-100 border-b-4 mb-40 shadow-2xl min-h-[4rem] -mt-[4rem] filter blur-xl"></div>
        <ProjectList TITLE={'PERSONAL PROJECTS'} showInline={true} projects={ProjectListData.projects} />
        <ProjectList TITLE={'PROFESSIONAL PROJECTS'} projects={ProfessionalListData.projects} />
        <Skill/>
        <Resume />
        <ContactInfo />
      </header>
    </div>
  );
}

export default App;
