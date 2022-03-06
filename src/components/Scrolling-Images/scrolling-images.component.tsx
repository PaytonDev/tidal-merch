import './scrolling-images.styles.scss'
import GreenShirt from '../../assets/images/Green-shirt.png'
import AlbumCover from '../../assets/images/Cloud-19-cover.png'
import Crewneck from '../../assets/images/Crewneck.png'
import PinkShirt from '../../assets/images/Pink-T-Shirt.png'
import Hoodie from '../../assets/images/Cloud-19-hoodie.png'

const ScrollingImages = () => (
  <div className="scrolling-container">
    <ul className="image-list">
      <li>
        <img src={AlbumCover} alt="green shirt" />
      </li>
      <li>
        <img className="second-img" src={GreenShirt} alt="green shirt" />
      </li>
      <li>
        <img className="third-img" src={PinkShirt} alt="green shirt" />
      </li>
      <li>
        <img className="fourth-img" src={Hoodie} alt="green shirt" />
      </li>
      <li>
        <img className="fifth-img" src={Crewneck} alt="green shirt" />
      </li>
      <li>
        <img src={AlbumCover} alt="green shirt" />
      </li>
      <li>
        <img className="sixth-img" src={GreenShirt} alt="green shirt" />
      </li>
      <li>
        <img className="seventh-img" src={PinkShirt} alt="green shirt" />
      </li>
      <li>
        <img className="eighth-img" src={Hoodie} alt="green shirt" />
      </li>
      <li>
        <img className="ninth-img" src={Crewneck} alt="green shirt" />
      </li>
    </ul>
  </div>
)

export default ScrollingImages
