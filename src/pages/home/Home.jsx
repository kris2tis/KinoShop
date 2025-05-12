import {
    CarouselImg,
    FreeDelivery,
    Blog,
    Achieved,
    Arrivals,
    BestSellers,
    ProductSoftFabrics
} from "./index"

export default function Home() {

  return (
      <div>
          <CarouselImg />
          <FreeDelivery />
          <Blog />
          <Achieved />
          <Arrivals />
          <BestSellers />
          <ProductSoftFabrics />
      </div>
  );
}
