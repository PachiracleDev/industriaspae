import classNames from "classnames";
import { atom, useAtom } from "jotai";
import { useCallback } from "react";

export const overlayAtom = atom(false);

function Overlay() {
    const [overlay, setOverlay] = useAtom(overlayAtom);

    const onClick = useCallback(() => {
        setOverlay(false);
    }, [setOverlay]);

    const cname = classNames(
        "fixed inset-0 w-full z-50 h-full bg-black bg-opacity-50 opacity-0 transition-opacity pointer-events-none cursor-pointer",
        {
            "opacity100 pointer-events-auto": overlay,
        }
    );


    return (
        <div
            className={cname}
            onClick={onClick}
            role="button"
            aria-label="Overlay"
            tabIndex={0}
        />
    );
}

export default Overlay;
