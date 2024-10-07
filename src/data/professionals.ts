import __professionals from "./jsons/__professionals.json";
import { ProfessionalType } from "./types";
import avatar1 from "images/avatar-professionals/Image-1.png";
import avatar2 from "images/avatar-professionals/Image-2.png";
import avatar3 from "images/avatar-professionals/Image-3.png";
import avatar4 from "images/avatar-professionals/Image-4.png";
import avatar5 from "images/avatar-professionals/Image-5.png";
import avatar6 from "images/avatar-professionals/Image-6.png";
// import avatar7 from "images/avatar-professionals/Image-7.png";
// import avatar8 from "images/avatar-professionals/Image-8.png";
// import avatar9 from "images/avatar-professionals/Image-9.png";
// import avatar10 from "images/avatar-professionals/Image-10.png";
// import avatar11 from "images/avatar-professionals/Image-11.png";
// import avatar12 from "images/avatar-professionals/Image-12.png";
// import avatar13 from "images/avatar-professionals/Image-13.png";
// import avatar14 from "images/avatar-professionals/Image-14.png";
// import avatar15 from "images/avatar-professionals/Image-15.png";
// import avatar16 from "images/avatar-professionals/Image-16.png";
// import avatar17 from "images/avatar-professionals/Image-17.png";
// import avatar18 from "images/avatar-professionals/Image-18.png";
// import avatar19 from "images/avatar-professionals/Image-19.png";
// import avatar20 from "images/avatar-professionals/Image-20.png";

import thumbnail1 from "images/thumbnail-professionals/Image-1.png";
import thumbnail2 from "images/thumbnail-professionals/Image-2.png";
import thumbnail3 from "images/thumbnail-professionals/Image-3.jpg";
// import thumbnail4 from "images/thumbnail-professionals/Image-4.png";
import thumbnail5 from "images/thumbnail-professionals/Image-5.jpg";
// import thumbnail6 from "images/thumbnail-professionals/Image-6.png";
// import thumbnail7 from "images/thumbnail-professionals/Image-7.png";
// import thumbnail8 from "images/thumbnail-professionals/Image-8.png";
// import thumbnail9 from "images/thumbnail-professionals/Image-9.png";
// import thumbnail10 from "images/thumbnail-professionals/Image-10.png";
// import thumbnail11 from "images/thumbnail-professionals/Image-11.png";
// import thumbnail12 from "images/thumbnail-professionals/Image-12.png";
// import thumbnail13 from "images/thumbnail-professionals/Image-13.png";
// import thumbnail14 from "images/thumbnail-professionals/Image-14.png";
// import thumbnail15 from "images/thumbnail-professionals/Image-15.png";
// import thumbnail16 from "images/thumbnail-professionals/Image-16.png";
// import thumbnail17 from "images/thumbnail-professionals/Image-17.png";
// import thumbnail18 from "images/thumbnail-professionals/Image-18.png";
// import thumbnail19 from "images/thumbnail-professionals/Image-19.png";
// import thumbnail20 from "images/thumbnail-professionals/Image-20.png";

const imgs = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  //   avatar7,
  //   avatar8,
  //   avatar9,
  //   avatar10,
  //   avatar11,
  //   avatar12,
  //   avatar13,
  //   avatar14,
  //   avatar15,
  //   avatar16,
  //   avatar17,
  //   avatar18,
  //   avatar19,
  //   avatar20,
];

const thumbs = [
  thumbnail1,
  thumbnail2,
  thumbnail3,
  thumbnail3,
  thumbnail5,
  thumbnail3,
];

const DEMO_PROFESSIONALS: ProfessionalType[] = __professionals.map(
  (item, index) => ({
    ...item,
    avatar: imgs[index] || item.avatar,
    thumbnail: thumbs[index] || item.thumbnail,
  })
);

export { DEMO_PROFESSIONALS };
