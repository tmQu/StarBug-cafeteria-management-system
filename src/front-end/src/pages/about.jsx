import MemberCard from "../components/memberCard";

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
  );
};
export default About;
