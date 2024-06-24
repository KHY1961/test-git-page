import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "보트",
    location: "USA",
    description: "유유자적하게 보트 여행을 떠나봐요.",
    price: 6700,
    type: "가격",
  },
  {
    img: Img2,
    title: "타지마할",
    location: "인도",
    description:
      "타지마할(Taj Mahal)은 인도 도시 아그라의 야무나 강 남쪽 기슭에 있는 상아색 대리석 영묘입니다.",
    price: 6700,
    type: "가격",
  },
  {
    img: Img3,
    title: "하와이",
    location: "US",
    description:
      "하와이 제도(Hawaiian Islands)를 구성하는 총 19개의 섬과 환초를 포함하는 열도 중에 가장 큰 섬의 이름이 하와이이므로, 대부분의 사람들이 전체 섬들을 흔히 하와이로 통칭한다.",
    price: 6200,
    type: "가격",
  },
  {
    img: Img4,
    title: "시드니",
    location: "호주",
    description: "호주의 도시. 호주의 최초이자, 상징적인 도시로 오세아니아의 대표도시 중 하나이다. ",
    price: 6700,
    type: "가격",
  },
  {
    img: Img5,
    title: "로스 앤젤레스",
    location: "미국 캘리포니아 주",
    description:
      "로스앤젤레스는 캘리포니아 주, 나아가 미국 서부에서 제일 크고 인구가 많은 도시이자 미국 전체에서는 뉴욕시에 이어 두 번째로 큰 도시다.",
    price: 6700,
    type: "가격",
  },
  {
    img: Img6,
    title: "라스베가스",
    location: "미국 네바다주",
    description:
      "미국 서부 네바다 주의 사막 한가운데 위치한 도시. 카지노와 호텔이 즐비한 번화한 도시로 이름 높다..",
    price: 6200,
    type: "가격",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            꼭 들러야할 멋진 곳
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
