import tesla from "../assests/images/tesla.png";
import exclusivepainterswordpress from "../assests/images/exclusivepainterswordpress.png";
import nepalbazaar from "../assests/images/nepalbazaar.png";
import exclusivepaintersreact from "../assests/images/exclusivepaintersreact.jpg";
export const experienceData = [
  {
    id: "_1",
    title: "Front End - Tesla Clone",
    // img: "./assests/images/tesla.png",
    img: ` ${tesla}`,
    address: "https://tesla-clone.d2ml6p9nau3pde.amplifyapp.com/",
    description:
      "It is based on React.Js, Javascript, HTML, CSS. Designed to improve my coding skills.",
  },
  {
    id: "_2",
    title: "August 2021 - Ongoing",
    img: `${exclusivepainterswordpress}`,
    // img: "./assests/images/exclusivepainterswordpress.png",
    address: "http://www.exclusivepainters.co.nz/",
    description:
      "It is WordPress based website. Hosted on GoDaddy.com. Javascript, HTML, CSS, and Php are used. Also, it is running on a contract based.",
  },
  {
    id: "_3",
    title: "July 2020 - Ongoing",
    img: `${nepalbazaar}`,
    address: "http://www.nepalbazaar.co.nz/",
    description:
      "It is WordPress based Ecommerce website. Based on Javascript, HTML, CSS, and PHP. It is running on contract",
  },
  {
    id: "_4",
    title: " September 2022 - ongoing",
    img: `${exclusivepaintersreact}`,
    address: "https://pankajpuri.github.io/homes",
    description:
      "Still working on it:- It is based on React.Js, Javascript, HTML, CSS, bootstrap, lodash. Designed to improve WordPress based site and to provide more features to controls different job's activities.",
  },
];

export default function getExperinceData() {
  console.log("result: ", experienceData);
  return experienceData;
}
