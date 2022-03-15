import logo from '../../icons/logo.svg';
import halfLogo from '../../icons/half-logo.svg';
import './firstPage.css'

const FirstPage = () => {
  const facts =[
    'Was first release in 2013',
    'Was originally created by Jordan Walke',
    'Has well over 100k stars on GitHub',
    'Is maintained by Facebook',
    'Powers thousands of enterprise app, including mobile apps'
  ];
  return (
    <div className="firstPage">
      <div className='header'>
        <div className='header-item logo'>
          <img src={logo} alt="logo" height="28" width="158" />
        </div>
        <h3 className='header-item sub-title'>React Course - Project 1</h3>
      </div>
      <div className='body'>
        <h1 className='body-title'>Fun facts about React JS</h1>
        <div className='body-content'>
          <ul>
            {facts.map((fact,index) => {
              return (
                <li key={index} className='body-fact'>
                  <span className='bullet'></span>
                  <h4>{fact}</h4>
                </li>
              )
            })}
          </ul>
          <div className='body-content-img'>
            <img src={halfLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstPage;