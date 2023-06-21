import { useEffect, useState } from "react";

export default function useResponsiveFontSizeHook() {
    // console.log({window})

    const getFontSize = () => {
        if (typeof window !== "undefined") {
            return window?.innerWidth < 450 ? "16px" : "18px";
        }else {
            return "18px";
        }

    };
    const [fontSize, setFontSize] = useState(getFontSize);

    useEffect(() => {
        const onResize = () => {
            setFontSize(getFontSize());
        };

        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
        };
    },[]);

    return fontSize;
}
