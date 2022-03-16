import profilePic from '../../images/profile-pic.jpeg'
import facebook from '../../icons/facebook-icon.svg'
import instagram from '../../icons/instagram-icon.svg'
import github from '../../icons/github-icon.svg'
import twitter from '../../icons/twitter-icon.svg'
import mail from '../../icons/mail-icon.svg'
import linkedIn from '../../icons/linkedIn-icon.svg'

import './digitalBusinessCard.css';

const DigitalBusinessCard = () => {
  const name = 'Ankit Kumar';
  const designation = 'Frontend Developer';
  const socialMediaLinks = [
    {
      icon: facebook,
      link: "",
    },
    {
      icon: instagram,
      link: "",
    },
    {
      icon: twitter,
      link: "",
    },
    {
      icon: github,
      link: "https://github.com/AnkitKr625",
    },
  ];
  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/ankit-kumar-4a87691b3/','_blank').focus();
  };

  const openAccount = (item) => {
    window.open(item.link,'_blank').focus();
  }

  return (
    <section>
      <div className="profile-pic">
        <img src={profilePic} alt="pic" height="317"/>
      </div>
      <div className='body'>
        <div className='body-name'>{name}</div>
        <div className='body-designation'>{designation}</div>
        <div className='body-contacts'>
          <span className='body-contacts-mail body-contacts-box'>
            <img src={mail} alt="mail" className='body-contacts-box-items'/>
            <span className='body-contacts-box-items'>Email</span>
          </span>
          <span 
            className='body-contacts-linkedIn body-contacts-box'
            onClick={openLinkedIn}
          >
            <img src={linkedIn} alt="linkedIn" className='body-contacts-box-items'/>
            <span className='body-contacts-box-items'>LinkedIn</span>
          </span>
        </div>
        <div className='body-details'>
          <div className='body-header'><strong>About</strong></div>
          <div className='body-description'>Lorem ipsum dolor sit as iusto provident voluptates sequi at esse quo voluptas ut. Distinctio maiores cumque quam nobis non voluptas aut iusto assumenda ex temporibus officiis ullam, impedit repudiandae id totam ab facilis nulla!</div>
        </div>
        <div className='body-details'>
          <div className='body-header'><strong>Interests</strong></div>
          <div className='body-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis sunt minus quos vitae ex facilis ut in doloribus consequatur, dolor tenetur deleniti fugiat possimus praesentium.</div>
        </div>
      </div>
      <footer className='footer'>
        {
          socialMediaLinks.map((smp, index) => {
            if(smp.link) {
              return(
                <img
                  onClick={() => {
                    openAccount(smp);
                  }}
                  className='footer-item'
                  src={smp.icon} alt="smp"
                  key={index} width="25"
                />
              )
            }
            return <div></div>;
          })
        }
        <div></div>
      </footer>
    </section>
  )
}

export default DigitalBusinessCard;