import DesignWeb from "../../../assets/images/design-web.jpg";
import Game from "../../../assets/images/game.jpg";
import Todo from  "../../../assets/images/todo.jpg";
import Weather from  "../../../assets/images/weather.jpg";
import ComingSoon from "../../../assets/images/coming-soon.jpg";

class Project  {
  image="";
  title="";
  description="";
  link="";
  github="";
  constructor(image,title,description,link,github){
    this.image=image;
    this.title=title;
    this.description=description;
    this.link=link;
    this.github=github;
  }
}
const ProjectData = [
    new Project(DesignWeb, "Web-Design Company Website", "Rebuilt the website with additional improvements", "https://dianago-web-design-website.netlify.app", "https://github.com/smilenayeon/Web-Design-Company-Website.git"),
    new Project(Game, "ESL Card Game", "An interactive and engaging way for users to learn and review new English words. Through a fun matching game format, players are challenged to pair words, enhancing their language skill. After each game session, users can view their results.", "https://dianago-esl-game.netlify.app", "https://github.com/smilenayeon/game.git"),
    new Project(Todo, "To-Do List", "A user-friendly CRUD application, enabling users to seamlessly create, view, update, and delete tasks. It enhances task management with a visual progress tracker, displayed as a circular bar with percentage completion, helping users stay motivated and organized.", "https://dianago-todolist.netlify.app/", "https://github.com/smilenayeon/todo-list.git"),
    new Project(Weather, "Simply Weather", "The application provides real-time weather updates for a variety of cities, sourcing its data from a Weather API.", "https://dianago-simply-weather.netlify.app/", "https://github.com/smilenayeon/Simply-Weather.git"),
    new Project(ComingSoon, "Sign Up, Log In & Survey", "Users have the ability to sign up, log in, and submit their surveys. Firebase is utilized as the backend server for these operations.", "","" ),
    new Project(ComingSoon, "Movie Search", "Users can instantly search for movies from a database, with the search results updating in real-time and debouncing implemented to optimize performance by reducing the frequency of search queries.", "","" ),
  ];

export default ProjectData;