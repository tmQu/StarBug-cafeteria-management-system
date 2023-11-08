import MemberCard from "../components/memberCard";
import Story from "../components/story";



const About = () => {
  const members = [
    {
      name: "Le Hoang Sang",
      role: "\"Perfect website\"",
      image:
        "./assets/Member_files/LHS.jpg",
    },
    {
      name: "Tran Minh Quang",
      role: "\"I found my favor here\"",
      image:
        "./assets/Member_files/TMQ.jpg",
    },
    {
      name: "Nguyen Quoc Huy",
      role: "\"I like this cake\"",
      image:
        "./assets/Member_files/NQH.jpg",
    },
    {
      name: "Vu Dinh Chuong",
      role: "\"Coffee is my style\"",
      image:
        "./assets/Member_files/VDC.jpg",
    },
    {
      name: "Phu Thanh Nhan",
      role: "\"Love the tea here\"",
      image:
        "./assets/Member_files/PTN.png",
    },
  ];
  return (
    <div className=" bg-[#F4F2EC]">
      <div className="w-screen h-fit px-[10vw]">
        <Story image={`https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg`} title='The Perfect Brew' subtitle='Coffee' paragraph={`Are you ready to embark on a journey of taste and aroma like no other? We are thrilled to introduce our latest coffee creation, a true masterpiece for coffee enthusiasts. At the heart of this exceptional brew lies the perfect blend of premium beans from the world's most renowned `} />
      </div>
      <div className="w-screen h-fit px-[10vw] p-8">
        <div className="flex flex-row justify-center gap-4">
          {members.slice(0, 2).map((member) => (
            <MemberCard
              id={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
        <div className="flex flex-row justify-center mt-6 gap-4">
          {members.slice(2, 5).map((member) => (
            <MemberCard
              id={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default About;
