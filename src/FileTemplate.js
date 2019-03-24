import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'

const FileTemplate = ({name , sender , timestamp , extension , image , download ,downloadUrl}) =>
{
    return(
        <div className="card card-file">
            <div className = "row">
                <div>
                    <img className="card-file-img" src={image}></img>
                </div>
                <div> 
                    <div className="card-block">
                        <h4 className="file-card-title">{name}.{extension}</h4>
                        <div className="meta">
                            <p>{sender} &nbsp; {timestamp}</p>
                        </div>
                    </div>
                </div>
                <div className="file-buttons">
                    <span onClick={()=>download(downloadUrl)}>
                        <FontAwesomeIcon 
                                className="file-download-button" 
                                size='lg'
                                icon={faSave} />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default FileTemplate;