import { useCallback } from 'react'
import classNames from 'classnames';
import { useAtom, atom } from 'jotai'
import { TiendaPanelExpandedAtom } from './TiendaModal'
import { useUpdateAtom } from 'jotai/utils'
export const overlayTiendaAtom = atom(false)

function OverlayTienda() {
    const [overlay, setOverlay] = useAtom(overlayTiendaAtom);
    const updateTiendaPanelExpanded = useUpdateAtom(TiendaPanelExpandedAtom)

    const onClick = useCallback(() => {
        setOverlay(false);
        updateTiendaPanelExpanded({ active: false, id: null })
    }, [setOverlay, updateTiendaPanelExpanded]);

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
            aria-label="Overlay Tienda"

        />
    );
}

export default OverlayTienda