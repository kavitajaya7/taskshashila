import background_img from "../../assets/images/tac-top-shapes.svg";
import background_img_smol from "../../assets/images/tac-top-shapes-mobile.svg";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import "../../styles/anchor_style.css";

const Header = (props: any): JSX.Element => {
    const isPhone = useMediaQuery(
        "(max-width: 1080px) and (orientation: portrait)"
    );
    const isTab = useMediaQuery("(max-width: 1360px)");

    return (
        <header
            style={{
                position: "relative",
                height: "100vh",

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f1eee8",
                zIndex: "3",
            }}
            ref={props.m_ref}
        >
            <img
                alt="Header Background"
                src={isPhone ? background_img_smol : background_img}
                style={{
                    position: "absolute",
                    width: isPhone ? "auto" : "100%",
                    height: isPhone ? "100%" : "auto",
                    objectFit: isPhone ? "contain" : "cover",
                    scale: isPhone ? 1.5 : 1,

                    left: "auto",
                    right: "auto",
                    top: isPhone ? 0 : isTab ? 0 : "-20rem",
                    bottom: 0,
                    zIndex: -1,
                }}
            ></img>
            <p
                style={{
                    fontFamily: "Samarkan",
                    fontSize: "11.2rem",
                    wordSpacing: "-8px",
                }}
            >
                vidya dadati vinayam
            </p>
            <button
                className="app-link app-link--filled medium-link"
                onClick={props.onClickActivities}
            >
                Activities
            </button>
            <div style={{ height: "10%" }}></div>
        </header>
    );
};

export default Header;
