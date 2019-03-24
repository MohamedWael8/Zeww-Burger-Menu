import React, {Component} from 'react'
import FileTemplate from './FileTemplate'
import Axios from 'axios'

class FilesContainer extends Component
{

    fetchData()
    {
        Axios.get(`https://localhost:44346/api/chats/GetFiles/wael`)
        .then(res => {
          console.log(res.data);
          this.props.getfiles(res.data);
        })
    }

    componentDidMount() 
    {
       this.fetchData()
    }

    download(downloadUrl)
    {
        //api call to download
        console.log(downloadUrl);
    }

    render()
    {
        const {files} = this.props

        return(
            <ul className="ul-files">
                {files.map(
                    (file,i) => <FileTemplate 
                                    key={i} 
                                    name={file.name} 
                                    sender={file.sender} 
                                    timestamp={file.timestamp}
                                    extension={file.extension}
                                    image = {file.image}
                                    download = {this.download}
                                    downloadUrl = {file.downloadUrl}/>
                )}
            </ul>
        )
    }
}

export default FilesContainer;