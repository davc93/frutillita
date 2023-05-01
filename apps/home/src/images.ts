import { cld } from "./config";
import { fill } from "@cloudinary/url-gen/actions/resize";

const heroBackground = cld.image(
  "davc93/Screenshot_20230429_200132_Chrome.jpg.jpg"
);
heroBackground.resize(fill().width(1920).height(1080));
const heroBackgroundUrl = heroBackground.toURL();
const deliveryImage = cld.image(
  "davc93/Screenshot_20230429_200132_Chrome.jpg.jpg"
);
deliveryImage.resize(fill().width(1920).height(1080));
const deliveryImageUrl = deliveryImage.toURL();

export { deliveryImageUrl, heroBackgroundUrl };
