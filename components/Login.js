import Image from "next/image";
import { useMoralis } from 'react-moralis';

function Login() {
	const { authenticate } = useMoralis();

	return (
		<div className="bg-red-200 relative">
			<div className="flex flex-col absolute z-50 h-5/6 
			items-center justify-center w-full space-y-10">
				<Image 
				className="object-cover rounded-full"
				src="https://avatars.dicebear.com/api/pixel-art/glass.svg" height={125} width={125} alt=""
				/>

				<button 
				onClick={authenticate}
				className="bg-white text-blacke text-lg rounded-lg py-3 px-6 font-bold hover:bg-yellow-500 hover:text-white">Login with metamask</button>
			</div>

			<div className="w-full h-screen">
				<Image
					src={"https://images.unsplash.com/photo-1585002640812-f164768c4435?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"}
					alt=""
					layout="fill"
					objectFit="cover"
				/>
			</div>
		</div>
	);
}

export default Login;
