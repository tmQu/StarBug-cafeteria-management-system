import MemberCard from "../components/memberCard";
import Story from "../components/story";
import HomeSlider from "../components/slider";

import items from "../api/items";

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
  ]
  const stories = [
    {
      image: "./assets/About_files/Latte.jfif",
      title: "Secret behind the perfect",
      subtitle: "Latte",
      paragraph: "The word \"latte\" means \"milk\" in Italian. Milk accentuates the rich flavor of espresso in a light, enjoyable drink. Rich hand-brewed espresso combined with smooth steamed milk, topped with a layer of fine foam.",
    },
    {
      image: "./assets/About_files/BrewCoffee.jfif",
      title: 'How to store your',
      subtitle: 'Coffee',
      paragraph: "Storing your coffee in an airtight glass or ceramic canister is optimal. Properly stored coffee can stay fresh up to two weeks and should not be refrigerated, nor is it necessary to keep it in the freezer. For maximum freshness, we recommend purchasing only as much coffee as you will consume in a 1 1/2 to 2 week period."
    },
    {
      image: "./assets/About_files/HerbalTea.jfif",
      title: "What are the benefits of",
      subtitle: "Herbal",
      paragraph: "In general, herbal tea has many outstanding health benefits including: Against liver, cervical, colon, lymphatic or lung cancer,...; Reduce the risk of diabetes and its complications; Prevent the risk of neurodegenerative diseases such as Alzheimer's; Increases fat metabolism, reduces fat, has the ability to support weight loss; Protect liver, clear heat, detoxify; Reduce fever, relieve cough and sore throat.",
    },
    {
      image: "./assets/About_files/MatchaMilkTea.jfif",
      title: "What if milk tea combine",
      subtitle: "Matcha",
      paragraph: "Matcha Milk Tea, or Matcha Latte, is a popular drink that originated in Asia and has since become a worldwide sensation. You make it by combining matcha powder, a finely ground green tea powder, with milk and sweetener. The result is a creamy, sweet, and earthy drink full of nutrients and other health benefits.",
    },
    {
      image: "./assets/About_files/Pannacotta.png",
      title: "The new dessert",
      subtitle: "Panna-cotta",
      paragraph: "Panna cotta is the kind of dessert recipe that looks complicated but is actually so easy that you can make the base in less than 30 minutes. Unlike its cousin, crème brûlée, this simple, elegant sweet is not even baked in a water bath—all you do is refrigerate the mixture until it sets and takes on a creamy, slightly jiggly texture. It’s the perfect make-ahead dessert for capping off a low-stress dinner party, whether you top it with fresh fruit or a sweet berry sauce.",
    },
    {
      image: "./assets/About_files/MatchaLatte.jfif",
      title: "Why Matcha Latte has the favor for",
      subtitle: "Ladies",
      paragraph: "Women love green tea because it has the benefit of having less caffeine than other tea constituents. The fact that green tea contains an element called catechin, which helps to renew and fight aging, is another reason why ladies pick this particular green tea latte. successfully prevents and treats acne.",
    },
    {
      image: "./assets/About_files/Pannacotta.png",
      title: "\"Pick me up\"",
      subtitle: "Tiramisu",
      paragraph: "Tiramisu has Italian origins. The famous Italian restaurateur Ado Campeol is credited with its invention in the 1970s. In fact, he was widely known as \"the father of tiramisu.\" The word \"tiramisu\" translates to \"pick-me-up.\"",
    },
    {
      image: "./assets/About_files/ColdBrew.jfif",
      title: "Have you ever heard",
      subtitle: "ColdBrew",
      paragraph: "Cold Brew is a type of iced coffee, made when coarse coffee grounds are steeped in cold water for an extended period of time (usually overnight 12-24 hours), then strained. This brewing process results in a less acidic, smooth coffee that is then served cold, over ice. It can be made concentrated and then combined with water to the desired strength.",
    },
  ]
    ;
  return (
    <div className="w-screen h-fit mx-auto">
      <div className="w-[1120px] mx-auto bg-[#F4F2EC]">
        <div className="w-[1120px] h-[300px]">
          <HomeSlider items={items} />
        </div>
        <div className="w-[1120px] h-[101px] my-3 py-4 flex items-center justify-center text-[70px] font-bold font-Source-Sans-3  text-[#0D3745]">
          STORY BEHIND THE DRINK
        </div>
        <div className="w-[1120px] h-fit px-4 mx-auto py-2">
          {stories.map((story, index) => (
            <Story
              key={index}
              reverse={index % 2 === 0 ? false : true}
              image={story.image}
              title={story.title}
              subtitle={story.subtitle}
              paragraph={story.paragraph}
            />
          ))}

        </div>
        <div className="flex justify-center items-center my-3 pt-8">
          <hr className="w-[792px] border-[1px] border-[#0D3745]" />
        </div>
        <div className="w-[1120px] h-[101px] py-4 flex items-center justify-center text-[80px] font-bold font-Source-Sans-3  text-[#0D3745]">
          Loyal Customer
        </div>
        <div className="w-[1120px] h-fit px-4 p-8 mx-auto">
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
    </div>
  );
};
export default About;
