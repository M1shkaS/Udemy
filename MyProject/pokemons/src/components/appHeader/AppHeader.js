import logo from '../../resources/logo.svg.png';
import './appHeader.scss';

const AppHeader = () => {
   return (
      <header className="app__header">
         <div>
            <img src={logo} alt="logo" className='app__logo' />
         </div>

      </header>
   )
}

export default AppHeader;