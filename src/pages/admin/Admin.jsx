import axios from "axios";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import priavtePage from "../../utils/PriavtePage";

import { useProducts , useProductsSoftFabrics } from "../../hooks/useApi"
 
const MySwal = withReactContent(Swal);

export default function Admin() {

    const { postData, deleteData, getDataFromID } = useProducts();
    const { getDataFromID_ps } = useProductsSoftFabrics()
    
    const [data, setData] = useState({
        name: "",
        price: "",
        image: "",
        description: "",
        date: "",
        color: "",
        isNew: null,
        size: "",
    });
    const [id, setId] = useState();

    const addProduct = async () => {
        try {
            await postData(data);
            MySwal.fire({
                icon: "success",
                title: <p>محصول با موفقیت ساخته شد</p>,
            });
        } catch (error) {
            MySwal.fire({
                icon: "error",
                title: <p>محصول ساخته نشد</p>,
            });
        }
    }

    const deleteProduct = async () => {
        try {
            await deleteData(id)

            MySwal.fire({
                icon: "success",
                title: <p>محصول با موفقیت حذف شد</p>,
            });
        } catch (error) {
            MySwal.fire({
                icon: "error",
                title: <p>محصول حذف نشد</p>,
            });
        }
    }

    const patchReauest = async (updateData) => {
        let endpoint = "";
        try {
            let response = await getDataFromID(id);
            endpoint = "products";
            
            if (response.status != 200 || !response.data) {
                response = await getDataFromID_ps(id);
                endpoint = "products_soft_fabrics";
            }

            axios
                .patch(`http://localhost:3000/${endpoint}/${id}`, updateData)
                .then(() => {
                    MySwal.fire({
                        icon: "success",
                        title: <p>محصول آپدیت شد</p>,
                    });
                })
                .catch(() => {
                    MySwal.fire({
                        icon: "error",
                        title: <p>محصول آپدیت نشد</p>,
                    });
                });
        } catch (error) {
            console.error(error.message)    
        }
        
    }

    const changedValue = () => {
        const updateData = {}
        for (const key in data) {
            data[key] ? updateData[key] = data[key] : null;
        }

        patchReauest(updateData)
    };

    return (
        <Container>
            {priavtePage() ? (
                <Form className="mt-30">
                    <Form.Group className="mb-3">
                        <Form.Label>آیدی</Form.Label>
                        <Form.Control
                            onChange={(e) => setId(e.target.value)}
                            placeholder="آیدی اینجا بویس"
                        />
                        <Form.Text className="text-muted !text-red-400">
                            جهت بروزرسانی محصول آیدی محصول رو وارد کنید
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>نام محصول</Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    name: e.target.value,
                                });
                            }}
                            placeholder="نام محصول رو اینجا وارد کنید"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>قیمت</Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    price: e.target.value,
                                });
                            }}
                            placeholder="قیمت رو اینجا وارد کن"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>تصویر</Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    image: e.target.value,
                                });
                            }}
                            placeholder="تصویر رو اینجا وارد کن"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>توضیحات</Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    description: e.target.value,
                                });
                            }}
                            placeholder="توضیحات رو اینجا وارد کن"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>تاریخ</Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    date: e.target.value,
                                });
                            }}
                            placeholder="تاریخ رو اینجا وارد کن"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>رنگ</Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    color: e.target.value,
                                });
                            }}
                            placeholder="رنگ رو اینجا وارد کن"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>محصول جدید ؟</Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    isNew: e.target.value,
                                });
                            }}
                            placeholder="محصول جدید رو اینجا وارد کن"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>سایز</Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    size: e.target.value,
                                });
                            }}
                            placeholder=" سایز رو اینجا وارد کن"
                        />
                    </Form.Group>
                    <div className="flex justify-center gap-x-5 mt-8">
                        <Button
                            onClick={changedValue}
                            variant="primary"
                            type="button"
                        >
                            بروزرسانی محصول
                        </Button>
                        <Button
                            onClick={addProduct}
                            variant="secondary"
                            type="button"
                        >
                            افزودن محصول
                        </Button>
                        <Button
                            onClick={deleteProduct}
                            variant="danger"
                            type="button"
                        >
                             حذف محصول
                        </Button>
                    </div>
                </Form>
            ) : (
                <div className="flex justify-center mt-30">
                    <h1>شما به این صفحه دسترسی ندارید !</h1>
                </div>
            )}
        </Container>
    );
}
