import DesignWeb from "../../../assets/images/design-web.jpg";
import Game from "../../../assets/images/game.jpg";
import Todo from  "../../../assets/images/todo.jpg";
//import Weather from  "../../../assets/images/weather.jpg";
//import ComingSoon from "../../../assets/images/coming-soon.jpg";
import MovieSearch from "../../../assets/images/movie-search.png";
import AdventCalendar from "../../../assets/images/AdventCalendat.png";
import NewsLetterSignUp from "../../../assets/images/newsletter-signup.jpg";
import TaskTracker from "../../../assets/images/tasktracker.png";
import CreditCard from "../../../assets/images/creditcard.jpg";
import ReactBlog from "../../../assets/images/react-blog.png";
import ReactTwitter from "../../../assets/images/react-twitter.png";

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
    new Project(ReactTwitter, "React Blog", " https://react-twitter-wine.vercel.app/", "https://github.com/smilenayeon/react-twitter.git"),
    new Project(ReactBlog, "React Blog", " https://react-blog-694db.web.app", "https://github.com/smilenayeon/blog-app.git"),
    new Project(DesignWeb, "Web-Design Company Website","https://dianago-web-design-website.netlify.app", "https://github.com/smilenayeon/Web-Design-Company-Website.git"),
    new Project(AdventCalendar, "Advent Calendar", "https://smilenayeon.github.io/Advent-Calendar/","https://github.com/smilenayeon/Advent-Calendar" ),
    new Project(CreditCard, "Interative Credit Card", "https://smilenayeon.github.io/interactive_creditcard/", "https://github.com/smilenayeon/interactive_creditcard.git"),
    //new Project(Weather, "Simply Weather", "", "https://github.com/smilenayeon/Simply-Weather.git"),
    new Project(TaskTracker, "React-Redux Task Tracker", "https://dianago-task-tracker.netlify.app/", "https://github.com/smilenayeon/task-tracker.git"),
    new Project(NewsLetterSignUp, "Newsletter sign-up form", "https://smilenayeon.github.io/newsletter-signup/","https://github.com/smilenayeon/newsletter-signup.git" ),
    new Project(Todo, "To-Do List", "https://dianago-todolist.netlify.app/", "https://github.com/smilenayeon/todo-list.git"),
    new Project(MovieSearch, "Movie Search", "https://dianago-movie-search.netlify.app/","https://github.com/smilenayeon/movie-website.git" ),
    new Project(Game, "ESL Card Game", "https://dianago-esl-game.netlify.app", "https://github.com/smilenayeon/game.git"),
  
    
];

export default ProjectData;