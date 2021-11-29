import './App.css';
import Intro from './componets/Intro/Intro'
function App() {
 const g1 = ['Web Designer', 'UI/UX Design', 'Photographer', 'Writer', 'Content Creator', 'Software Engineer', 'Freelancer', 'Visionary', 'Believer', 'Athlete',
 'Full Stack Developer', 'Truth Teller', 'Artist', 'Programmer', 'Wizard', 'Muscian']
 return (
   <div className="App">
       <Intro body="I design and develop services for customers of all sizes,
           specializing in creating stylish, modern websites, web services and
           online stores." titles={g1}/>
   </div>
 );
}
 
export default App;