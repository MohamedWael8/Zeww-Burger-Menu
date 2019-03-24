import React , {Component} from 'react';
import { Container ,Row } from 'react-bootstrap';
import './css/BurgerMenu.css'


class BurgerMenu extends Component {
    constructor(props) {
      super(props);

      this.state = {
      }
    }

    render() {
      return (
       <>
        <div className='Ziad'>
            <h1>Ziad</h1>
        </div>
        <div className="burger-menu-div-ul">
            <ul className="burger-menu-ul">
                <li className="burger-menu-li">
                Files
                </li>
                <li className="burger-menu-li">
                    Channel Details
                </li>
            </ul>
        </div>
        
       </>
      );
    }
  }

  export default BurgerMenu;