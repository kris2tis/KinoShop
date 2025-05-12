import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
    return (
        <footer>
            <div className="footer pt-12 pb-2 mt-20">
                <Container className="flex flex-col items-center gap-y-12 2xl:flex-row py-10">
                    <Row className="w-full flex justify-center flex-col xl:flex-row gap-y-8 xl:gap-x-10">
                        <Col
                            sm={12}
                            xxl={3}
                            className="flex w-max flex-col gap-y-5 px-0"
                        >
                            <span className="text-[18px] font-bold">
                                MUJI Membership
                            </span>
                            <p>
                                Become a MUJI Member and receive £10 off your first
                                online purchase over £50
                            </p>
                            <div className="flex justify-center gap-x-1">
                                <input
                                    className="bg-white w-full py-1.5 px-1 rounded-[2px]"
                                    type="text"
                                    placeholder="ایمیلتو بنویس"
                                />
                                <div className="px-2 bg-[#7f0019] flex items-center rounded-[2px]">
                                    <i className="bi bi-arrow-left-short"></i>
                                </div>
                            </div>
                        </Col>

                        <Col
                            sm={12}
                            xxl={8}
                            className="grid sm:grid-cols-2  mt-5 2xl:!grid-cols-4 2xl:!mt-0 md:justify-end-safe "
                        >
                            <div className="flex w-max flex-col">
                                <span className="text-[18px] font-bold">
                                    خرید با کینو
                                </span>
                                <span>محل فروشگاه</span>
                                <span>محل فروشگاه</span>
                                <span>محل فروشگاه</span>
                                <span>محل فروشگاه</span>
                                <span>محل فروشگاه</span>
                            </div>

                            <div className="flex flex-col w-max mt-5 sm:!mt-0">
                                <span className="text-[18px] font-bold">
                                    خدمات مشتری
                                </span>
                                <span>تحویل</span>
                                <span>تحویل</span>
                                <span>تحویل</span>
                                <span>تحویل</span>
                            </div>

                            <div className="flex w-max mt-5 flex-col 2xl:!mt-0">
                                <span className="text-[18px] font-bold">
                                    خرید با کینو
                                </span>
                                <span>محل فروشگاه</span>
                                <span>محل فروشگاه</span>
                                <span>محل فروشگاه</span>
                                <span>محل فروشگاه</span>
                                <span>محل فروشگاه</span>
                            </div>

                            <div className="flex flex-col w-max mt-5 2xl:!mt-0">
                                <span className="text-[18px] font-bold">
                                    خدمات مشتری
                                </span>
                                <span>تحویل</span>
                                <span>تحویل</span>
                                <span>تحویل</span>
                                <span>تحویل</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="flex items-center gap-4 my-6">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span>
                        کینوا
                    </span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>
            </div>
        </footer>
    );
}
