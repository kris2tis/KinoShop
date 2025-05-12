import { useRoutes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import routes from "./routes";

import Loading from "./components/loading/Lodaing";

function App() {
    let element = useRoutes(routes);
    let location = useLocation();
    let [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        let interval = setInterval(() => setLoading(false), 2000);

        return () => clearInterval(interval);
    }, [location.pathname]);

    if (loading) {
        return <Loading />;
    }

    return element;
}

export default App;
