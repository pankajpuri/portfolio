import tesla from "../assests/images/tesla.png";
import exclusivepainterswordpress from "../assests/images/exclusivepainterswordpress.png";
import nepalbazaar from "../assests/images/nepalbazaar.png";
import exclusivepaintersreact from "../assests/images/exclusivepaintersreact.jpg";
export const experienceData = [
  {
    id: "_1",
    title: "Front End - Tesla Clone",
    img: ` ${tesla}`,
    address: "https://tesla-clone.d2ml6p9nau3pde.amplifyapp.com/",
    description:
      "It is based on React.Js, Javascript, HTML, CSS. Designed to improve my coding skills.",
  },
  {
    id: "_2",
    title: "November 2021 - Ongoing",
    img: `${exclusivepainterswordpress}`,
    address: "http://www.exclusivepainters.co.nz/",
    description:
      "It is WordPress based website. Hosted on GoDaddy.com. Javascript, HTML, CSS, and Php are used. Also, it is running on a contract based.",
  },
  {
    id: "_3",
    title: "December 2022 - Ongoing",
    img: `${nepalbazaar}`,
    address: "http://www.nepalbazaar.co.nz/",
    description:
      "It is WordPress based Ecommerce website. Based on Javascript, HTML, CSS, and PHP. It is running on contract",
  },
  {
    id: "_4",
    title: "Ongoing",
    img: `${exclusivepaintersreact}`,
    address: "https://pankajpuri.github.io/exclusivepaintersltd/",
    description:
      "Still working on it:- It is based on React.Js, Javascript, HTML, CSS, bootstrap, lodash. Designed to improve WordPress based site and to provide more features to controls different job's activities.",
  },
];

export default function getExperinceData() {
  return experienceData;
}
