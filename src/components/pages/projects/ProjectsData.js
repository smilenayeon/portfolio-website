import DesignWeb from "../../../assets/images/design-web.jpg";
import Game from "../../../assets/images/game.jpg";
import Todo from  "../../../assets/images/todo.jpg";
import Weather from  "../../../assets/images/weather.jpg";


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
    new Project(DesignWeb, "Web-Design Company Website", "Rebuilt the website with additional improvements", "https://www.naver.com", "https://github.com/smilenayeon/Web-Design-Company-Website.git"),
    new Project(Game, "ESL Card Game", "Users can learn new words, and review by playing matching game. Users can see the result after the completion of the game.", "https://www.google.com", "https://github.com/smilenayeon/game.git"),
    new Project(Todo, "ToDoList", "It is a simple CRUD application. It also shows the progress using a circular bar with percentage.", "https://www.nate.com", "https://github.com/smilenayeon/todo-list.git"),
    new Project(Weather, "Simply Weather", "It shows the weather of different cities using Weather API.", "https://www.naver.com", "https://github.com/smilenayeon/Simply-Weather.git")
  ];

export default ProjectData;