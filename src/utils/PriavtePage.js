export default function priavtePage() {
    const userLogged = () => {
        let cookies = getCookies();
        return cookies.username == "admin" && cookies.password == "123"
            ? true
            : false;
    };

    const getCookies = () => {
        const cookies = document.cookie.split("; ");
        const cookieObj = {};
        cookies.forEach((cookie) => {
            const [name, value] = cookie.split("=");
            cookieObj[name] = value;
        });

        return cookieObj;
    };

    return userLogged();
}
