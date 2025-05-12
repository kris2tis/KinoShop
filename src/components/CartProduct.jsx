export default function CartProduct({ name, price, image, color, size }) {
    return (
        <div className="flex justify-center items-center h-[140px]">
            <div className="w-1/4 h-full flex flex-col justify-between items-start px-2">
                <img
                    className="w-[112px] h-[112px] object-cover rounded-sm"
                    src={image}
                    alt=""
                />
                <button className="w-full shadow-[0px_0px_0px_0.5px_#9d9d9d] outline-none text-[#009262] py-1">
                    سهم
                </button>
            </div>
            <div className="w-3/4 h-full flex flex-col gap-y-2">
                <div className="flex flex-col h-[118px] justify-between">
                    <div>
                        <h1>{name}</h1>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        {color ||
                            (size && (
                                <div className="grid grid-cols-[90px_auto]">
                                    <span>رنگ :{color}</span>

                                    <span>سایز : {size}</span>
                                </div>
                            ))}

                        <div className="grid grid-cols-[90px_auto]">
                            <span>قیمت : {price} تومان</span>
                            <span>قیمت کل : 34 تومان</span>
                        </div>
                    </div>
                </div>
                <div className="">
                    <button className="w-full shadow-[0px_0px_0px_0.5px_#9d9d9d] outline-none text-[#009262] py-1">
                        شمارنده
                    </button>
                </div>
            </div>
        </div>
    );
}
