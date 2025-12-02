import { LinkedinLogo } from "@phosphor-icons/react/dist/ssr/LinkedinLogo"
import { InstagramLogo } from "@phosphor-icons/react/dist/ssr/InstagramLogo"    
import { FacebookLogo } from "@phosphor-icons/react/dist/ssr/FacebookLogo"


function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center text-white bg-red-900 py-8 mt-4">
                <div className="container flex flex-col items-center py-4">
                    <p className="text-xl font-bold">Farmacia virtual Generation | Copyright: {data}</p>
                    <p className="text-lg">Acesse nossas redes sociais</p>
                    <div className="flex gap-2 ">
                        <a href="" target="_blank" className="hover:opacity-50">
                            <LinkedinLogo size={48} weight="bold"  />
                        </a>
                        <a href="" target="_blank" className="hover:opacity-50">
                            <InstagramLogo size={48} weight="bold" />
                        </a>
                        <a href="" target="_blank" className="hover:opacity-50">
                            <FacebookLogo size={48} weight="bold" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer