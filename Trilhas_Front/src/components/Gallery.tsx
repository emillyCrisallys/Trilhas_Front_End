import "./Gallery.css";
import bobImage from "../img/bob.jpg"; 
import janisImage from "../img/janis.jpg"; 
import gordonImage from "../img/gordon.jpg"; 
import ninaImage from "../img/nina.jpg"; 

export default function Gallery() {
  return (
    <div className="gallery">
      <img src={bobImage} alt="Bob Dylan" />
      <img src={janisImage} alt="Janis Joplin" />
      <img src={gordonImage} alt="Gordon Lightfoot" />
      <img src={ninaImage} alt="Nina Simone" />
    </div>
  );
}
