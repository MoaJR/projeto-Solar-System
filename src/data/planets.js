import MercurioImg from '../images/Mercurio.png';
import VenusImg from '../images/Venus.png';
import TerraImg from '../images/Terra.png';
import MarteImg from '../images/Marte.png';
import JupiterImg from '../images/Jupiter.png';
import SaturnoImg from '../images/Saturno.png';
import Uranoimg from '../images/Urano.png';
import Netunoimg from '../images/Netuno.png';
import { Mercury } from '../assets/Mercury';
import { Venus } from '../assets/Venus';
import { Earth } from '../assets/Earth';
import { Mars } from '../assets/Mars';
import { Jupiter } from '../assets/Jupiter';
import { Saturn } from '../assets/Saturn';
import { Uranus } from '../assets/Uranus';
import { Neptune } from '../assets/Neptune';

const Planets = [
  { name: 'Mercúrio', image: MercurioImg, component: Mercury },
  { name: 'Vênus', image: VenusImg, component: Venus },
  { name: 'Terra', image: TerraImg, component: Earth },
  { name: 'Marte', image: MarteImg, component: Mars },
  { name: 'Júpiter', image: JupiterImg, component: Jupiter },
  { name: 'Saturno', image: SaturnoImg, component: Saturn },
  { name: 'Urano', image: Uranoimg, component: Uranus },
  { name: 'Netuno', image: Netunoimg, component: Neptune },
];

export default Planets;
