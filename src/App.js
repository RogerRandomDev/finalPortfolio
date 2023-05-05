import logo from './logo.svg';
import './App.css';
import Skill from './modules/Skills';
import ProjectList from './modules/ProjectList';
import TitleCard from "./modules/TitleCard"
import ContactInfo from './modules/Contact';
function App() {
  
  return (
    <div className="App max-w-[100vw] overflow-x-hidden">
      <header className="App-header">
        <TitleCard />
        <ProjectList TITLE={'MY PROJECTS'} showInline={true} projects={[{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"}]} />
        <ProjectList TITLE={'PAST WORK'} projects={[{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"}]} />
        <Skill skillList={[{"level":0.9,"name":"test"},{"level":0.9,"name":"test2"},{"level":0.9,"name":"test32"},{"level":0.9,"name":"testinge"}]}/>
        <ContactInfo />
      </header>
    </div>
  );
}

export default App;
