import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import useScrollPosition from "../../hooks/useScrollPosition";

import "../../styles/misc.css";

const HomePageBanner = (): JSX.Element => {
    let [shouldShow, setShouldShow] = useState(true);
    let selfRef = useRef<HTMLElement>(null);
    let [selfHeight, setSelfHeight] = useState(0);
    let scrollPos = useScrollPosition();
    const isPhone = useMediaQuery(
        "(max-width: 1080px) and (orientation: portrait)"
    );

    useEffect(() => {
        if (!shouldShow && window.scrollY === 0) {
            setShouldShow(true);
        }

        if (shouldShow && window.scrollY !== 0) {
            setShouldShow(false);
        }
    }, [scrollPos]);

    useEffect(() => {
        if (selfRef.current) {
            setSelfHeight(window.innerHeight - selfRef.current?.clientHeight);
        } else {
            setSelfHeight(window.innerHeight * 0.87);
        }
    }, []);

    return (
        <section
            ref={selfRef}
            className={`home_page_banner home_page_banner--${
                shouldShow ? "show" : "hide"
            }`}
            style={{
                width: "100%",
                // height: isPhone ? "12vh" : "6vh",
                height: "auto",

                fontSize: "2.4rem",
                backgroundColor: "black",
                color: "white",

                position: "absolute",
                // top: isPhone ? `${selfHeight}px` : "94vh",
                top: `${selfHeight}px`,
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
