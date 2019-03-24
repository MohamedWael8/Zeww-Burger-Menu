import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './css/file.css'
import Orchestra from './fileImagesTest/Orchestra.jpg'
import FilesContainer from './FilesContainer'
import FileSender from './FileSender'
import BurgerMenu from './BurgerMenu'

class App extends Component 
{
  state =
  {
    files : 
    [
      {
        "name" : "Project Framework" , 
        "sender" : "Ziad Ali" , 
        "timestamp" : "Feb 22nd at 10:03 AM" , 
        "extension" : "src" , 
        "image" : Orchestra , 
        "downloadUrl" : "someurl"

      },
      {
          "name" : "Zeww UI" , 
          "sender" : "Maha Elleci" , 
          "timestamp" : "Feb 22nd at 10:03 AM" , 
          "extension" : "xd" , 
          "image" : "someurl" , 
          "downloadUrl" : "someotherurl"
      },
      {
          "name" : "Weird Files" , 
          "sender" : "Mohamed Wa'el" , 
          "timestamp" : "Feb 22nd at 10:03 AM" , 
          "extension" : "" , 
          "image" : "someurl" , 
          "downloadUrl" : "justaurl"
      }
    ]
  }

  setFiles = (returnedFiles)=>
  {
    this.setState({
      files : returnedFiles
    });
    console.log(this.state.files)
  }

  // <FileSender />
  // <FilesContainer files={this.state.files} getfiles={this.setFiles}/>

  render() 
  {
    return (
      <div>
          <BurgerMenu  />
      
      </div>
    );
  }
}

export default App;
