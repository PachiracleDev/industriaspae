import { useCallback } from 'react'
import classNames from 'classnames';
import { useAtom, atom } from 'jotai'

export const overlayFilterAtom = atom(false)

function OverlayFilter() {
    const [overlay, setOverlay] = useAtom(overlayFilterAtom);

    const onClick = useCallback(() => {
        setOverlay(false);
    }, [setOverlay]);

    const cn = classNames(
        "fixed inset-0 w-full z-50 h-full bg-black bg-opacity-50 opacity-0 transition-opacity pointer-events-none cursor-pointer",
        {
            "opacity100 pointer-events-auto": overlay,
        }
    );

    return (
        <div
            className={cn}
            onClick={onClick}
            role="button"
            aria-label="Overlay"
            tabIndex={0}
        />
    );
}

export default OverlayFilter