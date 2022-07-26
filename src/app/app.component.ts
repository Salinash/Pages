import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
      },
    {
      title:'At the City',
      url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
    },
    { 
      title:'At the Nature',
      url: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    { 
      title:'At the Snow',
      url: 'https://images.unsplash.com/photo-1486944670663-e0a2ea5018eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHNub3d8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
      },
    {
      title:'At the City',
      url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
    },
    { 
      title:'At the Nature',
      url: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    { 
      title:'At the Snow',
      url: 'https://images.unsplash.com/photo-1486944670663-e0a2ea5018eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHNub3d8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
    }
  ];
  
  checkWindowsIndex(index: number){
    console.log("valor index", index);
    //return Math.abs(this.currentPage -index) < 3;
    switch (Math.abs(this.currentPage -index)) {
      case 0: return true;
      case 1: return true;
      default: return false;
    }    
  } 
}
