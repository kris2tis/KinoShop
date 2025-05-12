import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LogIn({ popUpShow }) {
    const [show, setShow] = useState(popUpShow);
    const [userName, setUserName] = useState();
    const [password , setPassword]= useState()
    const changepopUpState = () => setShow(false);

    const navigate = useNavigate()

    const loginUser = () => {
        document.cookie = `username = ${userName};`;
        document.cookie = `password = ${password};`;

        navigate("/")
        setShow(false);
    }

    return (
        <div className="mt-10">
            <Modal show={show} centered>
                <Modal.Header>
                    <Modal.Title>ورود</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="flex flex-col justify-center items-center gap-y-5 px-10">
                        <input
                            onChange={(e) => {
                                setUserName(e.target.value);
                            }}
                            className="w-full shadow-[0px_0px_0px_0.4px_rgba(0,0,0,0.25)] rounded-sm outline-none py-2 px-3.5"
                            type="text"
                            placeholder="نام کاربری"
                        />

                        <input
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            className="w-full shadow-[0px_0px_0px_0.4px_rgba(0,0,0,0.25)] rounded-sm  outline-none py-2 px-3.5"
                            type="password"
                            placeholder="رمز عبور"
                        />
                        <Button
                            onClick={loginUser}
                            className="bg-transparent text-black !border-none shadow-[0px_0px_0px_0.3px_rgba(0,0,0,0.25)] px-4"
                        >
                            ورود
                        </Button>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        className="mx-auto"
                        variant="danger"
                        onClick={changepopUpState}
                    >
                        بستن
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
