import { useEffect, useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import useScrollPosition from "../../hooks/useScrollPosition";

import "../../styles/misc.css";

const HomePageBanner = (): JSX.Element => {
    let [shouldShow, setShouldShow] = useState(true);
    let scrollPos = useScrollPosition();
    const isPhone = useMediaQuery("(max-width: 1080px)");

    useEffect(() => {
        if (!shouldShow && window.scrollY === 0) {
            setShouldShow(true);
        }

        if (shouldShow && window.scrollY !== 0) {
            setShouldShow(false);
        }
    }, [scrollPos]);

    return (
        <section
            className={`home_page_banner home_page_banner--${
                shouldShow ? "show" : "hide"
            }`}
            style={{
                width: "100%",
                height: isPhone ? "12vh" : "6vh",

                fontSize: "2.4rem",
                backgroundColor: "black",
                color: "white",

                position: "absolute",
                top: isPhone ? `${window.innerHeight * 0.87}px` : "94vh",
                zIndex: "4",

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            We are still enrolling for the Fall 2022 semester of After School
            Classes! Register today while we still have spots in all classes.
        </section>
    );
};

export default HomePageBanner;
