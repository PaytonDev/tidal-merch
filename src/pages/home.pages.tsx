import './home.styles.scss'
import Logo from '../components/Logo/Logo.component'
import Button from '../components/Button/Button.component'
import ScrollingImages from '../components/Scrolling-Images/scrolling-images.component'
import SignInSignUpForm from '../components/Sign-In-Sign-Up-Form/sign-in-sign-up-form.component'

const Home = () => (
  <div className="home">
    <div className="container">
      <div className="home-left">
        <div className="logo-container">
          <Logo />
        </div>
        <br />
        <div className="banner-text">
          <div>SUPPORT YOUR FAV</div>
          <div>SHOW SOME LOVE</div>
          <div>DON THE GEAR</div>
        </div>
        <div>
          <Button className="sign-in-btn" bgColor="light" textColor="dark">
            SIGN IN
          </Button>
          <Button
            className="google-sign-in-btn"
            bgColor="dark"
            textColor="accent"
          >
            GOOGLE SIGN IN
          </Button>
        </div>
      </div>
      <div className="home-right">
        <ScrollingImages />
      </div>
      <SignInSignUpForm />
    </div>
  </div>
)

export default Home
