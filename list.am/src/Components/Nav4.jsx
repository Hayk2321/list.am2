export default function Nav4(props){
    return(
        <div>
            
            <div className="cursor-pointer ">
                
                <img id="logo3" className="h-[170px] w-[150px] shadow-2xl cursor-pointer   rounded-[10px] " src={props.img} alt="logo" />
                <h1 className="text-[28px]  hover:text-primary3 duration-500">{props.price}</h1>
                <p className="text-[12px]  hover:text-primary3 duration-500">{props.name}</p>

            </div>
        </div>
        
    )
}