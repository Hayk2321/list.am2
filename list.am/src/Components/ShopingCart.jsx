export default function ShoppingCartIcon({ itemCount }){
    return (
      <div className=" ">
        
        {itemCount > 0 && <span className="item-count absolute right-[120px] top-[30px] rounded-[25px] h-[25px] w-[25px] bg-[red] text-[#fff] text-center">{itemCount}</span>}
      </div>
    );
};