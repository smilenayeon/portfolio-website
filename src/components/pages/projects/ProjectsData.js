import DesignWeb from "../../../assets/images/design-web.jpg";
import Game from "../../../assets/images/game.jpg";
import Todo from  "../../../assets/images/todo.jpg";
import Weather from  "../../../assets/images/weather.jpg";
//import ComingSoon from "../../../assets/images/coming-soon.jpg";
import MovieSearch from "../../../assets/images/movie-search.png";
import AdventCalendar from "../../../assets/images/AdventCalendat.png";

class Project  {
  image="";
  title="";
  link="";
  github="";
  constructor(image,title,link,github){
    this.image=image;
    this.title=title;

    this.link=link;
    this.github=github;
  }
}
const ProjectData = [
    new Project(DesignWeb, "Web-Design Company Website","https://dianago-web-design-website.netlify.app", "https://github.com/smilenayeon/Web-Design-Company-Website.git"),
    new Project(AdventCalendar, "Advent Calendar", "https://smilenayeon.github.io/Advent-Calendar/","https://github.com/smilenayeon/Advent-Calendar" ),
    new Project(Game, "ESL Card Game", "https://dianago-esl-game.netlify.app", "https://github.com/smilenayeon/game.git"),
    new Project(Todo, "To-Do List", "https://dianago-todolist.netlify.app/", "https://github.com/smilenayeon/todo-list.git"),
    new Project(Weather, "Simply Weather", "", "https://github.com/smilenayeon/Simply-Weather.git"),
    new Project(MovieSearch, "Movie Search", "https://dianago-movie-search.netlify.app/","https://github.com/smilenayeon/movie-website.git" ),
  ];

export default ProjectData;