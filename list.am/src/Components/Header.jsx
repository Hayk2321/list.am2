import React, { useState } from 'react';
import Modal from './Modal';
import ShoppingCart from './ShopingCart';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  
  function openModal(){
    setIsModalOpen(true);
  };

  function closeModal(){
    setIsModalOpen(false);
    setName('');
    setPrice('');
    setImgUrl('');
    setIsEditing(false);
    setEditIndex(null);
  };

  function handleAddCard(){
    if (isEditing) {
      const updatedCards = [...cards];
      updatedCards[editIndex] = { name, price, imgUrl };
      setCards(updatedCards);
      setIsEditing(false);
    } else {
      setCards([...cards, { name, price, imgUrl }]);
    }
    closeModal();
  };

  function handleEdit(index){
    setIsEditing(true);
    setEditIndex(index);
    setName(cards[index].name);
    setPrice(cards[index].price);
    setImgUrl(cards[index].imgUrl);
    setIsModalOpen(true);
  };

  function handleDelete(index){
    setDeleteIndex(index);
    setShowDeleteModal(true);
  };

  function confirmDelete(confirmation) {
    if (confirmation === 'yes') {
      const updatedCards = cards.filter((i) => i !== deleteIndex);
      setCards(updatedCards);
    }
    setShowDeleteModal(false);
  };

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };
  
  

  return (
    <div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <div className="flex justify-evenly h-[60px] shadow-xl items-center">
            <h1 className="text-xl">List.am</h1>
              <p className="transition duration-[0.2s] hover:text-[#0C72EA] duration-[0.2s] cursor-pointer">Բաժիններ</p>
            <input type="text" placeholder="      Որոնում" className="w-[350px] bg-[#f0f0f0] p-[0 10px 0 36px] h-[36px] rounded-[16px]" />
            <p className=" transition duration-[0.2s] hover:text-[#0C72EA] duration-[0.2s] cursor-pointer">Իմ էջը</p>
            <button className="transition duration-[0.2s] text-white bg-[#0C72EA] p-[8px] px-[20px] rounded-[20px] hover:bg-[#6daaf2] duration-[0.2s]" >Տեղադրել հայտարարություն</button>
            <h1 className="text-3xl"><button onClick={openModal}>+</button></h1>
            <button className="text-[30px]" onClick={addToCart}><i className="fa fa-shopping-basket text-[#0C72EA] "></i></button>
            <ShoppingCart itemCount={cartItems} />
    
   
          </div>

          <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="modal-content   flex justify-evenly">
          <h2>{isEditing ? 'Edit Item' : 'Add New Item'}</h2>
          <input className='p-[8px] rounded-[5px]' type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
          <input type="text" placeholder="Image URL" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
          <button  onClick={handleAddCard}>{isEditing ? 'Update' : 'Add'}</button>
          <button onClick={closeModal}>Close</button>
        </div>
      </Modal>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className="modal-content flex justify-center items-center ">
            <div className="modal-body ">
                <h2 className='text-center text-[33px] text-[#0C72EA]'>{isEditing ? 'Edit Item' : 'Add New Item'}</h2>
        
                    <input className='mr-[10px] rounded-[10px] p-2' type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input className='mr-[10px] rounded-[10px] p-2' type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                    
                    <input className='rounded-[10px] p-2' type="text" placeholder="Image URL" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
       
                <div className=' flex justify-around'>
                <button className='transition duration-[0.2s] p-2 mt-3 w-[80px] bg-[#0C72EA] rounded-[5px] hover:bg-[#6daaf2] duration-[0.2s]' onClick={handleAddCard}>{isEditing ? 'Update' : 'Add'}</button>
                <button className='transition duration-[0.2s] p-2 mt-3 w-[80px] bg-[#0C72EA] rounded-[5px] hover:bg-[#6daaf2] duration-[0.2s]' onClick={closeModal}>Close</button>
                </div>
            </div>
            </div>
        </Modal>

  
        <Modal isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
            <div className="modal-content">
            <div className="modal-body flex justify-around ">
                <h2>Do you want to delete this card?</h2>
                <button className='transition duration-[0.2s] p-2 w-[80px] bg-[#0C72EA] rounded-[5px] hover:bg-[#6daaf2] duration-[0.2s]' onClick={() => confirmDelete('yes')}>Yes</button>
                <button className='transition duration-[0.2s] p-2 w-[80px] bg-[#0C72EA] rounded-[5px] hover:bg-[#6daaf2] duration-[0.2s]' onClick={() => confirmDelete('no')}>No</button>
            </div>
            </div>
        </Modal>

      <div className="card-container flex justify-center items-center">
        {cards.map((card, index) => (
            <div className="card border-2 rounded-xl p-3 bg-[#343541]" key={index}>
                <img className='rounded-[10px] w-[100%]' src={card.imgUrl} alt={card.name} />
                <h1 className='text-center'>{card.name}</h1>
                <p className='text-center'>{card.price}</p>
                <div className='flex justify-around'>

            
                <button className='transition duration-[0.2s] p-2 w-[80px] bg-[#0C72EA] rounded-[5px] hover:bg-[#6daaf2] duration-[0.2s]' onClick={() => handleEdit(index)}>Edit</button>
                <button className='transition duration-[0.2s] p-2 w-[80px] bg-[#0C72EA] rounded-[5px] hover:bg-[#6daaf2] duration-[0.2s]' onClick={() => handleDelete(index)}>Delete</button>
                </div>
          </div>
        ))}
      </div>
    
    </div>
  );
}
