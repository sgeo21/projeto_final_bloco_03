import ListarProdutos from "../../components/produtos/listarprodutos/ListarProdutos"
import ModalProdutos from "../../components/produtos/modalprodutos/ModalProdutos"

function Home() {
    return (
        <>
        <div className=" bg-gray-200 flex  justify-center ">
            <div className=' container  grid grid-cols-1 md:grid-cols-2 text-gray-800 gap-8 md:gap-0px-4'>
                <div className=" flex flex-col gap-4  items-center  justify-center  py-4 text-center ">
                    <h2 className=' text-3xl md:text-5xl font-bold'>
                        Seja bem vindo!
                    </h2>
                    <p className='text-base md:text-xl'>Aqui você encontra seus medicamentos!</p>

                    <div className="flex justify-around gap-4">
                        <div className='rounded text-white border-blue-900 border-solid border-2 py-2 px-4 bg-blue-900 hover:bg-blue-400 font-semibold' >
                            <ModalProdutos />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <img
                        src="https://ik.imagekit.io/kv6tr431r/produtos_farmacia/home.webp?updatedAt=1764676807630"
                        alt="Imagem Página Home"
                        className='w-2/3 max-w-xs md:max-w-md lg:max-w-lg'
                    />
                </div>
            </div>
        </div>
        <div className="py-2 md:py-0">
				<ListarProdutos />
			</div>
        </>
    )
}

export default Home