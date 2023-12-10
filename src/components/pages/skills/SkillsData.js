import HTML from "../../../assets/images/HTML5.svg";
import CSS from "../../../assets/images/CSS.png";
import JS from "../../../assets/images/JS.png";
import React  from "../../../assets/images/React.svg";
import Git from "../../../assets/images/Git.svg";
import GitHub from "../../../assets/images/GitHub.svg";
import NodeJS from "../../../assets/images/NodeJS.svg";
import JQuery from "../../../assets/images/JQuery.svg";
import Bootstrap from "../../../assets/images/Bootstrap.svg";
import Figma from "../../../assets/images/Figma.png";
import Jest from "../../../assets/images/Jest.svg";
import TypeScript from "../../../assets/images/Typescript.png";
import SASS from "../../../assets/images/SASS.svg";
import ReactNative from "../../../assets/images/ReactNative.svg";
import PHP from "../../../assets/images/PHP.png";
import Vue from "../../../assets/images/Vue.svg";
import MongoDB from "../../../assets/images/MongoDB.svg";
import MySQL from  "../../../assets/images/mySQL.svg";


    class Skill {
        image="";
        title="";
        constructor(image,title) {
        this.image=image;
        this.title=title;
    }
    };
    const SkillsData = [
        new Skill(HTML, "HTML"),
        new Skill (CSS, "CSS"),
        new Skill (JS, "JS"),
        new Skill (React, "React"),
        new Skill (Git, "Git"),
        new Skill (GitHub, "GitHub"),
        new Skill (NodeJS, "NodeJS"),
        new Skill (JQuery, "JQuery"),
        new Skill (Bootstrap, "Bootstrap"),
        new Skill (Figma, "Figma"),
        new Skill (Jest, "Jest"),
        new Skill (TypeScript, "TypeScript"),
        new Skill (SASS, "SASS"),
        new Skill (ReactNative, "React Native"),
        new Skill (PHP, "PHP"),
        new Skill (Vue, "Vue"),
        new Skill (MongoDB, "MongoDB"),
        new Skill (MySQL, "MySQL"),


    ];

export default SkillsData;