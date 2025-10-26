import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  darkTheme:boolean = true;
  
  toogleTheme(){
    this.darkTheme = !this.darkTheme;
  }

  // 
  size = '15px';
  styles(){
    // color which key does not have ( - ) we can write directly, but which
    // key carry ( - ) write in single cote ( '' )
    return {color : 'black', margin : '0px 20px', 'background-color' : 'hotpink', padding : '10px', 'font-size' : this.size}
  }

  changeSize(fontsize:string){
    this.size = fontsize;
  }

  // 
  status: boolean = true;
  loggedIn:boolean = false;
  colors:string[] = ['red', 'yellow', 'green', 'purple'];


  toggleLoggedIn(){
    this.loggedIn = ! this.loggedIn;
  }

  // 
  todos= [
    {
      "id": 1,
      "todo": "Do something nice for someone you care about",
      "completed": false,
      "userId": 152
    },
    {
      "id": 2,
      "todo": "Memorize a poem",
      "completed": true,
      "userId": 13
    },
    {
      "id": 3,
      "todo": "Watch a classic movie",
      "completed": true,
      "userId": 68
    },
    {
      "id": 4,
      "todo": "Watch a documentary",
      "completed": false,
      "userId": 84
    }]

    notes = [
    {
      "id": 1,
      "title": "Shopping List",
      "content": "Buy milk, bread, and eggs",
      "pinned": false,
      "username": "suresh polai"
    },
    {
      "id": 2,
      "title": "Meeting Notes",
      "content": "Discuss project updates with the team",
      "pinned": true,
      "username": "rahul sharma"
    },
    {
      "id": 3,
      "title": "Travel Plan",
      "content": "Book tickets for Goa trip",
      "pinned": false,
      "username": "priya mehta"
    },
    {
      "id": 4,
      "title": "Learning Goals",
      "content": "Complete Django authentication module",
      "pinned": true,
      "username": "amit singh"
    },
    {
      "id": 5,
      "title": "Personal Reminder",
      "content": "Call the electrician for repair",
      "pinned": false,
      "username": "neha verma"
    }
  ]


  comments = [
    {
      "id": 1,
      "body": "This is some awesome thinking!",
      "postId": 242,
      "likes": 3,
      "user": {
        "id": 105,
        "username": "emmac",
        "fullName": "Emma Wilson"
      }
    },
    {
      "id": 2,
      "body": "What terrific math skills you're showing!",
      "postId": 46,
      "likes": 4,
      "user": {
        "id": 183,
        "username": "cameronp",
        "fullName": "Cameron Perez"
      }
    },
    {
      "id": 3,
      "body": "You are an amazing writer!",
      "postId": 235,
      "likes": 2,
      "user": {
        "id": 1,
        "username": "emilys",
        "fullName": "Emily Johnson"
      }
    },
    {
      "id": 4,
      "body": "Wow! You have improved so much!",
      "postId": 31,
      "likes": 1,
      "user": {
        "id": 89,
        "username": "braydenf",
        "fullName": "Brayden Fleming"
      }
    },
    {
      "id": 5,
      "body": "Nice idea!",
      "postId": 212,
      "likes": 1,
      "user": {
        "id": 149,
        "username": "wyattp",
        "fullName": "Wyatt Perry"
      }
    }]

}
