
import Image from 'next/image'

function WhatsApp() {
    return (
        <div className="fixed bottom-28 right-5 hover: ">
            <a href="https://api.whatsapp.com/send?phone=51972215929&text=Hola%20quisiera%20saber%20mas%20sobre%20el%20producto%20que%20quiero%20comprar" target="_blank" rel="noopener noreferrer">
                <Image src="https://res.cloudinary.com/gongian/image/upload/v1660796243/imagenes/whatsapp_v2jc4b.png" width="50" height="50" alt="whatsapp" className="absolute z-[1]" />
            </a>
        </div>
    )
}

export default WhatsApp