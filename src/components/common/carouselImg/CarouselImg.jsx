export default function CarouselImage({ img, alt}) {
    return (
        <img
            src={img}
            alt={alt}
            className="w-full h-[500px] object-cover object-center md:h-[850px]"
        />
    );
}
