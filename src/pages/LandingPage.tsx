
function NavBar(){
    return (
        <div className="flex shadow-md bg-white w-full justify-between items-center p-2 px-10 text-xl rounded-bl-2xl rounded-br-2xl">
                <div>
                    <p><b>NShades</b></p>
                </div>
                <div className="flex text-lg hidden sm:flex">
                    <div className="w-full ml-5">
                        <input placeholder="Enter location" className="p-2  outline w-full outline-gray-200 rounded-l-lg"></input>
                    </div>
                    
                    <div className="w-full mr-5">
                        <input placeholder="Search Product" className="p-2 outline w-full outline-gray-200 rounded-r-lg"></input>
                    </div>
                </div>
                <div className="flex text-sm">
                    <button className="bg-black rounded-2xl text-white p-2 mx-10">Sign Up</button>
                    <button className="rounded-2xl border p-2">Sign In</button>
                </div>
        </div>
    );
}

export default function LandingPage(){

    const card_details = [
    {name : "card2"},
    {name : "card2"},
    {name : "card2"},
    {name : "card2"},
    {name : "card2"},
    {name : "card2"},
    {name : "card2"},
];

    return (
        <div className="h-screen">
            <NavBar/>
            
            <div className="flex mt-5  sm:hidden">
                    <div className="w-full ml-5">
                        <input placeholder="Enter location" className="p-2  outline w-full outline-gray-200 rounded-l-lg"></input>
                    </div>
                    
                    <div className="w-full mr-5">
                        <input placeholder="Search Product" className="p-2 outline w-full outline-gray-200 rounded-r-lg"></input>
                    </div>
                </div>
            <div className="">
                <div className="w-full overflow-x-scroll scroll whitespace-nowrap mt-10 p-4">
                    {card_details.map((details , index) => (
                        <CardTop key={index} name={details.name}/>
                    ))}
                </div>
            </div>
            
            <div className="">
                <div className="h-full w-full overflow-x-scroll scroll whitespace-nowrap mt-10 p-4">
                    {card_details.map((details , index) => (
                        <CardBottom key={index} name={details.name}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

function CardTop({name}){

    return (
        <div className="w-[40%] sm:w-[20%] inline-block mx-2 sm:mx-5 h-[250px] p-3 rounded-xl outline outline-gray-300">
            <div className="flex flex-col items-center justify-between h-full">        
                <p>{name}</p>
                <div className="text-white">
                    <button className="bg-yellow-500 p-2 rounded-2xl">Buy Now</button>
                </div>
            </div>
        </div>
    );
}

function CardBottom({name}){

    return (
        <div className="w-[40%] sm:w-[30%] inline-block mx-2 sm:mx-5 h-[250px] p-3 rounded-xl outline outline-gray-300">
            <div className="flex flex-col items-center justify-between h-full">        
                <p>{name}</p>
                <div className="text-white">
                    <button className="bg-yellow-500 p-2 rounded-2xl">Buy Now</button>
                </div>
            </div>
        </div>
    );
}