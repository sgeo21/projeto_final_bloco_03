import { ShoppingCartIcon, UserIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"


function Navbar() {

	return (
		<>
			<div className="flex justify-center w-full py-4 text-white bg-blue-950">
				<div className="container flex items-center justify-between mx-4 text-lg">
					<Link to="/home">
						<img
							src="https://ik.imagekit.io/kv6tr431r/produtos_farmacia/logo.webp?updatedAt=1764676807588"
							alt="Logo"
							className="w-60"
						/>
					</Link>
                    <div className="relative flex items-center justify-center w-1/4 text-white">
						<form 
							className="flex items-center justify-center w-full"
                            // onSubmit={buscarProdutos}
						>
                            <input type="text" placeholder="Buscar produtos..." className="w-full p-2 border border-gray-300 rounded text-white font-semibold" />
                            <button type="submit" className="p-2 bg-red-800  hover:bg-red-300 py-2 mx-2 text-white rounded">Buscar</button>
                        </form>
                    </div>

					<div className="flex items-center gap-4 py-4">
						<Link
							to=""
							className="hover:opacity-50"
						>
							Produtos
						</Link>
						<Link
							to="/categorias"
							className="hover:opacity-50"
						>
							Categorias
						</Link>
						<Link
							to="/cadastrarcategoria"
							className="hover:opacity-50"
						>
							Cadastrar Categoria
						</Link>
							<UserIcon
								size={32}
								weight="bold"
							/>

							<ShoppingCartIcon
								size={32}
								weight="bold"
							/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar