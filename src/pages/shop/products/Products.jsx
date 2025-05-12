import React, { useEffect, useState } from "react";

import { Container, Row } from "react-bootstrap";
import CarouselItem from "../../../components/CarouselItem/CarouselItem";

//  Details Filter
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
// accordian
import Accordion from "react-bootstrap/Accordion";

import Dropdown from "react-bootstrap/Dropdown";

import ShowMoreText from "../../../components/ShowMoreText/ShowMoreText";

import { useProducts } from "../../../hooks/useApi";
import LoadingDb from "../../../components/LoadingForDb/LoadingDb";

const sortProcut = [
    {
        id: 1,
        name: "قیمت : ارزان به گران",
        value: "ارزان",
    },
    {
        id: 2,
        name: "قیمت : گران به ارزان",
        value: "گران",
    },
    {
        id: 3,
        name: "جدید به قدیم",
        value: "جدید",
    },
    {
        id: 4,
        name: "قدیم به جدید",
        value: "قدیم",
    },
    {
        id: 5,
        name: "مرتب سازی صعودی آ - ی",
        value: "صعودی",
    },
    {
        id: 6,
        name: "مرتب سازی نزولی ی - آ",
        value: "نزولی",
    },
];

export default function Products() {  
    let { data , loading } = useProducts(null);
    let [productsFiltered, setProductsFiltered] = useState(null);
    // استایت مرتب کردن محصولات بر اساس ویژگی های کلی
    let [sortBy, setSortBy] = useState("گران");
    // استایت مرتب کردن محصولات بر اساس رنگ . سایز
    let [colorFilter, setColorFilter] = useState();
    let [sizeFilter, setSizeFilter] = useState();
    // استایت های دریافت تعداد رنگ ها و سایز ها 
    let [colorsCount, setColorsCount] = useState(null);
    let [sizesCount, setSizesCount] = useState(null);
    
    useEffect(() => {
        if (data) {
            let productsSort = data
                .filter((product) => !sizeFilter || product.size == sizeFilter)
                .filter(
                    (product) => !colorFilter || product.color == colorFilter
                )
                .sort((a, b) => {
                    if (sortBy == "گران" || sortBy == "ارزان") {
                        return sortBy == "گران"
                            ? b.price - a.price
                            : a.price - b.price;
                    } else if (sortBy == "قدیم" || sortBy == "جدید") {
                        return sortBy == "جدید"
                            ? new Date(b.date) - new Date(a.date)
                            : new Date(a.date) - new Date(b.date);
                    } else if (sortBy == "صعودی" || sortBy === "نزولی") {
                        return sortBy == "صعودی"
                            ? a.name.localeCompare(b.name)
                            : b.name.localeCompare(a.name);
                    }
                });
            setProductsFiltered(productsSort);
        }
    }, [sortBy, colorFilter, sizeFilter, data]);

    useEffect(() => {
        if (data) {
            // یافتتن تعداد رنگگ ها به همراه اسم

            let colors = [];

            data.map((product) =>
                !colors.includes(product.color)
                    ? colors.push(product.color)
                    : ""
            );

            let colorsCount = colors.map((color, index) => {
                let count = data.filter((c) => c.color == color).length;
                return { id: index + 1, name: color, count: count };
            });

            setColorsCount(colorsCount);

            // یافتن سایز ها به همراه اسم

            let sizes = [];

            data.map((item) => {
                !sizes.includes(item.size) ? sizes.push(item.size) : "";
            });

            let sizesCount = sizes.map((size, index) => {
                let count = data.filter((s) => s.size == size).length;

                return { id: index + 1, name: size, count: count };
            });

            setSizesCount(sizesCount);
        }
    }, [data]);

    return (
        <Container className="py-30">
            <Row>
                <div className="!max-w-[800px] mx-auto !mb-8">
                    <ShowMoreText text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده" />
                </div>
                <div className="flex items-center justify-between gap-x-5 mt-4">
                    {/* Details Filter */}
                    <Navbar
                        expand=""
                        className="w-1/2 py-0 rounded-none border-[1px] border-[#d2d2d2]"
                    >
                        <Container>
                            <Navbar.Toggle
                                className="w-full py-0 px-0 !rounded-none !border-none leading-0"
                                aria-controls="offcanvasNavbar-expand-"
                            >
                                <div className="flex items-center justify-between w-full">
                                    <div className="w-10/12">
                                        <p>فیلتر</p>
                                    </div>
                                    <div className="w-2/12 h-max border-r-[1px] border-[#d2d2d2] py-2 mt-auto">
                                        <i className="bi bi-funnel"></i>
                                    </div>
                                </div>
                            </Navbar.Toggle>
                            <Navbar.Offcanvas
                                id="offcanvasNavbar-expand-"
                                aria-labelledby="offcanvasNavbarLabel-expand-"
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title
                                        id={`offcanvasNavbarLabel-expand-`}
                                    >
                                        فیلتر
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <Accordion
                                            defaultActiveKey={["0"]}
                                            alwaysOpen
                                        >
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>
                                                    <h1>رنگ ها </h1>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    {colorsCount?.map(
                                                        (item) => (
                                                            <div
                                                                key={item.id}
                                                                className="flex items-center gap-x-2 mt-2"
                                                            >
                                                                <input
                                                                    className="cursor-pointer"
                                                                    onChange={() => {
                                                                        setColorFilter(
                                                                            item.name
                                                                        );
                                                                        setSizeFilter();
                                                                        setSortBy();
                                                                    }}
                                                                    name="colors"
                                                                    type="radio"
                                                                />
                                                                <RadioContent
                                                                    {...item}
                                                                />
                                                            </div>
                                                        )
                                                    )}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>
                                                    <h1>سایز ها</h1>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    {sizesCount?.map((item) => (
                                                        <div
                                                            key={item.id}
                                                            className="flex items-center gap-x-2 mt-2"
                                                        >
                                                            <input
                                                                type="radio"
                                                                name="sizes"
                                                                onChange={() => {
                                                                    setSizeFilter(
                                                                        item.name
                                                                    );
                                                                    setColorFilter();
                                                                    setSortBy();
                                                                }}
                                                            />
                                                            <RadioContent
                                                                {...item}
                                                            />
                                                        </div>
                                                    ))}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                    {/* Details Filter */}

                    {/* Sort Filter */}
                    <Dropdown className="w-1/2 py-0">
                        <Dropdown.Toggle
                            variant="none"
                            className="w-full py-0 px-0 border-[#fff]"
                        >
                            <div className="flex items-center justify-between w-full !border-[1px] border-[#d2d2d2]">
                                <div className="w-10/12">
                                    <p>مرتب سازی</p>
                                </div>
                                <div className="w-2/12 h-max border-r-[1px] border-[#d2d2d2] py-2 mt-auto">
                                    <i className="bi bi-funnel"></i>
                                </div>
                            </div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="w-full py-0">
                            {sortProcut.map((item) => (
                                <p
                                    className="border-[1px] px-3 py-2 border-[#d2d2d2] cursor-pointer"
                                    key={item.id}
                                    onClick={() => {
                                        setSortBy(item.value);
                                        setColorFilter();
                                        setSizeFilter();
                                    }}
                                >
                                    {item.name}
                                </p>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    {/* Sort Filter */}
                </div>

                
                    {loading ? (
                        <LoadingDb />
                    ) : (
                        <div className="grid grid-cols-2 gap-x-8 lg:grid-cols-3 !mt-10 cursor-pointer">
                            {productsFiltered?.map((item) => (
                                <CarouselItem key={item.id} {...item} />
                            ))}
                        </ div>
                    )}
               
            </Row>
        </Container>
    );
}

function RadioContent({ name, count }) {
    return (
        <div className="flex gap-x-2 cursor-pointer items-center">
            <h3 className="mb-0">{name}</h3>
            <span>({count})</span>
        </div>
    );
}
