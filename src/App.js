import logo from './logo.svg';
import './App.css';
import Skill from './modules/Skills';
import ProjectList from './modules/ProjectList';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProjectList projects={[{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"},{'name':"test","projectType":"Web","imageLink":"","projectLink":"https://google.com/"}]} />
        <Skill skillList={[{"level":0.9,"name":"test"},{"level":0.9,"name":"test2"},{"level":0.9,"name":"test32"},{"level":0.9,"name":"testinge"}]}/>
      </header>
    </div>
  );
}

export default App;
