import Nav4 from "./Nav4"
import cards from "./Database"
import {cards2} from "./Database"
import {cards3} from "./Database"
import {cards4} from "./Database"
import {cards5} from "./Database"
export default function Map(){
    return (
        <div className="mt-[40px] grid grid-cols-6 gap-10  ml-[30px] p-[30px]">
            <h1 className="text-[46px] absolute top-[678px] transition duration-[0.2s] hover:text-[#0C72EA] duration-[0.5s] cursor-pointer">Ավտոպահեստամասեր&gt;</h1>
            <h1 className="text-[46px] absolute top-[988px] transition duration-[0.2s] hover:text-[#0C72EA] duration-[0.5s] cursor-pointer">Բջջային հեռախոսներ&gt;</h1>
            <h1 className="text-[46px] absolute top-[1268px] transition duration-[0.2s] hover:text-[#0C72EA] duration-[0.5s] cursor-pointer">Բնակարանների վաճառք&gt;</h1>
            <h1 className="text-[46px] absolute top-[1588px] transition duration-[0.2s] hover:text-[#0C72EA] duration-[0.5s] cursor-pointer">Սկուտերներ և մոպեդներ&gt;</h1>
            <h1 className="text-[46px] absolute top-[1915px] transition duration-[0.2s] hover:text-[#0C72EA] duration-[0.5s] cursor-pointer">Հողատարածքների վաճառք&gt;</h1>
            {
                cards.map((el) => {
                    return (
                        <Nav4 name={el.name} img={el.img} price={el.price} key={el.id} />
                    )
                })
            }
            {
                cards2.map((el)=>{
                    return(
                        <Nav4 name={el.name} img={el.img} price={el.price} key={el.id} />
                    )
                })
            }
            {
                cards3.map((el)=>{
                    return(
                        <Nav4 name={el.name} img={el.img} price={el.price} key={el.id} />
                    )
                })
            }
            {
                cards4.map((el)=>{
                    return(
                        <Nav4 name={el.name} img={el.img} price={el.price} key={el.id} />
                    )
                })
            }
            {
                cards5.map((el)=>{
                    return(
                        <Nav4 name={el.name} img={el.img} price={el.price} key={el.id} />
                    )
                })
            }
            
        </div>
    )
}