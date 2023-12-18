import MemberCard from "../components/cards/memberCard";
import Story from "../components/story";
import HomeSlider from "../components/slider";
import stories from "../staticData/stories.json";
import members from "../staticData/members.json";

import { motion } from "framer-motion";

const About = () => {
  const members = [
    {
      name: "Le Hoang Sang",
      role: "Front-end Developer",
      image:
        "https://img.freepik.com/premium-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg",
    },
    {
      name: "Tran Minh Quang",
      role: "Back-end Developer",
      image:
        "https://img.freepik.com/premium-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg",
    },
    {
      name: "Nguyen Quoc Huy",
      role: "Front-end Developer",
      image:
        "https://img.freepik.com/premium-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg",
    },
    {
      name: "Vu Dinh Chuong",
      role: "Front-end Developer",
      image:
        "https://img.freepik.com/premium-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg",
    },
    {
      name: "Phu Thanh Nhan",
      role: "Back-end Developer",
      image:
        "https://img.freepik.com/premium-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg",
    },
  ];
  return (
    <div className="w-screen h-fit px-[10vw] bg-orange-300">about la o day</div>
  );
};
export default About;
