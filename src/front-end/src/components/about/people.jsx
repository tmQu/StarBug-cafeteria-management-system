import MemberCard from "../cards/memberCard";

const People = () => {
  const members = [
    {
      name: "Le Hoang Sang",
      role: '"Perfect website"',
      image: "./assets/Member_files/LHS.jpg",
    },
    {
      name: "Tran Minh Quang",
      role: '"I found my favor here"',
      image: "./assets/Member_files/TMQ.jpg",
    },
    {
      name: "Nguyen Quoc Huy",
      role: '"I like this cake"',
      image: "./assets/Member_files/NQH.jpg",
    },
    {
      name: "Vu Dinh Chuong",
      role: '"Coffee is my style"',
      image: "./assets/Member_files/VDC.jpg",
    },
    {
      name: "Phu Thanh Nhan",
      role: '"Love the tea here"',
      image: "./assets/Member_files/PTN.png",
    },
  ];
  return (
    <div>
      <div className="w-fit mx-auto flex flex-row justify-center gap-4 sm:flex-col">
        {members.slice(0, 2).map((member) => (
          <div>
            <MemberCard
              id={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          </div>
        ))}
      </div>
      <div className="w-fit mx-auto flex flex-row justify-center mt-6 sm:mt-4 gap-4 sm:flex-col">
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

export default People;
