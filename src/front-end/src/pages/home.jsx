import Item from "../components/item";
import HomeSlider from "../components/slider";
import Promotions from "../components/promotions";

const Home = () => {
  // we will fetch items data from server

  const images = [
    {
      id: 1,
      path: "https://images.unsplash.com/photo-1698939316001-a536d4e301fe?auto=format&fit=crop&q=80&w=3431&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      path: "https://images.unsplash.com/photo-1697806583180-426cec370a1e?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const items = [
    {
      id: 1,
      name: "item1",
      price: 1,
      image:
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    },
    {
      id: 2,
      name: "item2",
      price: 2,
      image:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
      id: 3,
      name: "item3",
      price: 3,
      image:
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    },
    // {
    //   id: 4,
    //   name: "item4",
    //   price: 4,
    //   image:
    //     "https://media.istockphoto.com/id/1287201277/vi/anh/c%C3%B4-b%C3%A9-h%E1%BA%A1nh-ph%C3%BAc-ch%C6%A1i-v%E1%BB%9Bi-%C4%91%E1%BB%93-ch%C6%A1i-g%E1%BA%A5u-b%C3%B4ng-c%E1%BB%A7a-m%C3%ACnh-trong-c%C3%B4ng-vi%C3%AAn-m%C3%B9a-thu.jpg?s=612x612&w=0&k=20&c=53CkbEJHKyDyZ5oUMq2spsJ9SCHZoSjyxaLcimu9lqE=",
    // },
    // {
    //   id: 5,
    //   name: "item5",
    //   price: 5,
    //   image:
    //     "https://media.istockphoto.com/id/1289778199/vi/anh/ho%C3%A0ng-h%C3%B4n-tr%C3%AAn-h%E1%BB%93-b%E1%BA%BFn-t%C3%A0u-b%E1%BA%B1ng-g%E1%BB%97-v%C3%A0-thuy%E1%BB%81n-%C4%91%C3%A1nh-c%C3%A1-c%C5%A9.jpg?s=612x612&w=0&k=20&c=RU7FxO9ObxIks6d1MyyQd4tQpUzBcF4pSv1mT5e5wcg=",
    // },
    // {
    //   id: 6,
    //   name: "item6",
    //   price: 6,
    //   image:
    //     "https://media.istockphoto.com/id/1289778834/vi/anh/ho%C3%A0ng-h%C3%B4n-tr%C3%AAn-h%E1%BB%93-b%E1%BA%BFn-t%C3%A0u-b%E1%BA%B1ng-g%E1%BB%97-v%C3%A0-thuy%E1%BB%81n-%C4%91%C3%A1nh-c%C3%A1-c%C5%A9.jpg?s=612x612&w=0&k=20&c=00V4q7H3CDIP8HIU9MzOF8nX6Xwp-s2jTqsKP6o0X7E=",
    // },
  ];
  return (
    <div className="w-screen h-fit mt-[2px] mx-auto">
      <div className="w-[1120px] mx-auto bg-[#F4F2EC]">
        <div className="w-[1120px] h-[300px]">
          <HomeSlider items={items} />
        </div>
        <div className="h-[160px]">
          <div className="w-[930px] h-[220px] flex items-center mx-auto justify-between relative -top-12">
            <Promotions images={images} />
          </div>
        </div>
        <div className="w-full h-[385px] mt-2 bg-yellow-300">
          Top 3 items here
        </div>
        <div className="w-[930px] h-fit mx-auto mt-2 bg-[whitesmoke] grid grid-cols-4 grid-rows-3 gap-6">
          Item
        </div>
        <div className="w-[300px] h-[40px] mx-auto mt-2 bg-lime-400">
          Xem tat ca san pham button
        </div>
      </div>
    </div>
  );
};

export default Home;
