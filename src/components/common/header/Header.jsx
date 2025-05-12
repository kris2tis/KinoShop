import { useEffect, useRef, useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import { NavLink, useNavigate } from "react-router-dom";
import LogIn from "../../auth/login/LogIn";

import priavtePage from "../../../utils/PriavtePage";

function Header() {
    let [scrollingUp, setScrollingUp] = useState(false);
    let [pupUpContorl, setPupUpContorl] = useState(false);

    const refConainer = useRef();

    useEffect(() => {
        const headerScrolled = () => {
            window.scrollY > 100 ? setScrollingUp(true) : setScrollingUp(false);
        };

        window.addEventListener("scroll", headerScrolled);
        window.addEventListener("load", headerScrolled);

        return () => {
            window.removeEventListener("scroll", headerScrolled);
            window.removeEventListener("load", headerScrolled);
        };
    });
    const navigate = useNavigate();
    const exitAccount = () => {
        navigate("/");
        document.cookie =
            "username=admin; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        document.cookie =
            "password=123; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    };

    return (
        <header
            ref={refConainer}
            className={`fixed top-0 left-0 right-0 z-50 md:px-10 md:py-2 ${
                scrollingUp ? "bg-white shadow-[0px_0px_10px_#e8e8e8]" : ""
            }`}
        >
            <Container fluid>
                <div className="bg-transparent">
                    <Navbar expand={"md"}>
                        <NavLink to="/">کینوا</NavLink>

                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-sm`}
                        />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-sm`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title
                                    id={`offcanvasNavbarLabel-expand-sm`}
                                >
                                    کینوا
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className="p-0 md:flex justify-end md:items-center">
                                <Nav className="gap-1">
                                    <div className="grid grid-cols-2 border-t-[1px] border-b-[1px] border-[#c9c9c9] w-full divide-x divide-[#c9c9c9] md:hidden ">
                                        <div className="text-center d-flex gap-x-2">
                                            {!document.cookie ? (
                                                <div className="flex h-full items-center justify-between gap-x-2">
                                                    <button
                                                        onClick={() =>
                                                            setPupUpContorl(
                                                                (prev) => !prev
                                                            )
                                                        }
                                                    >
                                                        ورود
                                                    </button>
                                                    <i className="bi bi-person-circle"></i>
                                                </ div>
                                              
                                            ) : (
                                                <a
                                                    className="cursor-pointer"
                                                    onClick={exitAccount}
                                                >
                                                    خروج از حساب
                                                </a>
                                            )}
                                        </div>
                                        <div className="text-center">
                                            <Nav.Link href="#action2">
                                                <p>ایران (£)</p>
                                            </Nav.Link>
                                        </div>
                                    </div>
                                    <div className="mt-10 md:mt-0">
                                        <ul className="d-flex gap-x-8">
                                            <li>
                                                <NavLink to="/">خانه</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/shop">
                                                    فروشگاه
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/cart">
                                                    سبد خرید
                                                </NavLink>
                                            </li>

                                            {priavtePage() && (
                                                <li>
                                                    <NavLink to="/admin">
                                                        پنل ادمین
                                                    </NavLink>
                                                </li>
                                            )}

                                            <li className="hidden md:block">
                                                {!document.cookie ? (
                                                    <a>
                                                        {" "}
                                                        <button
                                                            onClick={() =>
                                                                setPupUpContorl(
                                                                    (prev) =>
                                                                        !prev
                                                                )
                                                            }
                                                        >
                                                            ورود
                                                        </button>
                                                    </a>
                                                ) : (
                                                    <a
                                                        className="cursor-pointer"
                                                        onClick={exitAccount}
                                                    >
                                                        خروج از حساب
                                                    </a>
                                                )}
                                            </li>
                                        </ul>
                                    </div>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Navbar>
                </div>
                {pupUpContorl && <LogIn popUpShow={pupUpContorl} />}
            </Container>
        </header>
    );
}
export default Header;
