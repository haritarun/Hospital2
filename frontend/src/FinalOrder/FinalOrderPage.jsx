import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { useEffect,useState } from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";



const FinalOrderPage = () => {
    const [address,setAddress]=useState([])
    const [isShow,setShow]=useState([])
    const [data,setData]=useState([])
    const [fullName,setFirstName]=useState('')
    const [phoneNo,setPhoneno]=useState('') 
    const [area,setArea]=useState('')
    const [city,setCity]=useState('')
    const [state,setState]=useState('')
    const [zipCode,setZipcode]=useState('')
    const navigate = useNavigate()
    const [saved, setSaved] = useState(false);
   


    useEffect(()=>{
        fetchedList();
        fetchedData();
        
    })



    const fetchedData=async()=>{
        const email=localStorage.getItem("email")
        try{
            const response=await axios.get(`http://localhost:3000/getDetailes?email=${email}`)
            setData(response.data) 
                   
        }catch(e){
            console.log('something went wrong',e)
        }
    }

    const fetchedList=async()=>{
        const email = localStorage.getItem("email")
       
        try{
            const response = await axios.get(`http://localhost:3000/getAddress?email=${email}`)
            if (response.status===200){
                setAddress(response.data)
                
            }
        }
        catch(e){
            console.log("something went wrong ",e)
        }
    }

    const getSave=async()=>{
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
        const email = localStorage.getItem('email')
        try{
            const response = await axios.post('http://localhost:3000/addressPost',{
                fullName,
                phoneNo,
                email,
                area,
                city,
                state,
                zipCode,
            })
            if(response.status==200){
                console.log('added successfully')
                fetchedList();
                window.location.reload()
            }
        }catch(e){
            console.log("something went Wrong",e)
        }
    }

    const getRemoved = async (title) => {
        const email= localStorage.getItem('email')
        alert("enter into finalorder")
        try{
            const response= await axios.post("http://localhost:3000/deleteItem",{
                email,
                title
            })
            if(response.status==200){
                console.log('successfully removed')
                fetchedData()
            }
        }catch(e){
            console.log("something went wrong",e)
        }
    }


    const getChangeName=(event)=>{
        setFirstName(event.target.value)
    }

    const getChangeNo=(event)=>{
        setPhoneno(event.target.value)
    }

    const getChangearea=(event)=>{
        setArea(event.target.value)
    }

    const getChangeCity=(event)=>{
        setCity(event.target.value)
    }

    const getChangeState=(event)=>{
        setState(event.target.vaue)
    }

    const getChangezopcode=(event)=>{
        setZipcode(event.target.value)
    }

    const getShowChange=(id)=>{
        setShow([...isShow,id])
        
        

    }

    const getShowDelete=(name)=>{
        const filterData = isShow.filter(eachItem=>eachItem!==name)
        setShow(filterData)
    }

    const total = data.reduce((sum,item)=>sum+item.price*item.quantity,0)

    

  return (
    
    <div className="flex md:flex-row justify-between min-h-screen pl-20 pr-20 pt-20 xs:flex-col">
         {saved && (
            <motion.div
                className="fixed top-20 right-5 bg-green-500 text-white text-center py-2 px-4 rounded-md shadow-lg flex items-center justify-center gap-2"
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -10 }} 
                transition={{ duration: 0.5, ease: "easeOut" }} 
            >
                Address Saved Successfully 🎉
                <motion.div
                    className="h-2 bg-green-200 absolute bottom-0 left-0 w-full"
                    initial={{ width: "100%" }}
                    animate={{ width: "0%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
            </motion.div>
                )}
        
            <div className="bg-gray-100 rounded-lg  p-6 w-[45%] h-fit">
                <h1 className="text-2xl font-bold mb-6">Address</h1>
                  

                {
                    address.map((eachItem, index) => (
                    <div key={eachItem.id} className="flex flex-col mb-4">
                        
                        <div className="flex justify-between w-full">
                            <h1>Address {index + 1}</h1>
                            {
                            isShow.find(item=>item===eachItem.fullName) ? 
                                <RiArrowDropUpLine size={30} onClick={() => getShowDelete(eachItem.fullName)} /> :
                                <RiArrowDropDownLine size={30} onClick={() => getShowChange(eachItem.fullName)} />
                            }
                        </div>
                        {isShow.find(item=>item===eachItem.fullName) && (
                            <div>
                               
                                <p>{eachItem.fullName}</p>
                                <p>{eachItem.phoneNo}</p>
                                <div className="flex">
                                    <p>{eachItem.area},</p>
                                    <p className="ml-1">{eachItem.city},</p>
                                    <p className="ml-1">{eachItem.state},</p>
                                    <p className="ml-1">{eachItem.zipCode}</p>
                                </div>
                                
                            </div>
                            
                        )}
                    </div>
                ))}
             
                <div>
                                <Popup trigger={
                                    <button className="bg-blue-600 p-3 rounded-lg text-white w-full mt-5 hover:bg-blue-800">
                                    Add Address
                                    </button>}
                                    modal
                                    
                                >
                                {
                                    (close)=>(
                                        <div className="flex items-center justify-center p-12">   
                                            <div className="mx-auto w-full max-w-[550px] bg-white">
                                               
                                                    <div className="mb-5">
                                                        <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                                                            Full Name
                                                        </label>
                                                        <input type="text" className="name" id="name" placeholder="Full Name" value={fullName} 
                                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={getChangeName}/>
                                                    </div>
                                                    <div className="mb-5">
                                                        <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                                                            Phone Number
                                                        </label>
                                                        <input type="text" className="phone" id="phone" placeholder="Enter your phone number" value={phoneNo}
                                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={getChangeNo}/>
                                                    </div>
                                                    
                                                   
                                                    <div className="mb-5 pt-3">
                                                        <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                                                            Address Details
                                                        </label>
                                                        <div className="-mx-3 flex flex-wrap">
                                                            <div className="w-full px-3 sm:w-1/2">
                                                                <div className="mb-5"> 
                                                                    <input type="text" className="area" id="area" placeholder="Enter area" value={area}
                                                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={getChangearea}/>
                                                                </div>
                                                            </div>
                                                            <div className="w-full px-3 sm:w-1/2">
                                                                <div className="mb-5"> 
                                                                    <input type="text" className="city" id="city" placeholder="Enter city" value={city}
                                                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={getChangeCity}/>
                                                                </div>
                                                            </div>
                                                            <div className="w-full px-3 sm:w-1/2">
                                                                <div className="mb-5">
                                                                    <input type="text" name="state" id="state" placeholder="Enter state" value={state}
                                                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={getChangeState}/>
                                                                </div>
                                                            </div>
                                                            <div className="w-full px-3 sm:w-1/2">
                                                                <div className="mb-5">
                                                                    <input type="text" className="post-code" id="post-code" placeholder="Post Code" value={zipCode} 
                                                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={getChangezopcode}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-between">
                                                            <button
                                                                className="hover:shadow-htmlForm w-[40%] rounded-md bg-gray-400 py-3 px-8 text-center text-base font-semibold text-white outline-none hover:bg-gray-500" onClick={close}>
                                                                Close
                                                            </button>
                                                            <button
                                                                className="hover:shadow-htmlForm w-[40%] rounded-md bg-green-400 py-3 px-8 text-center text-base font-semibold text-white outline-none hover:bg-green-600" onClick={()=>
                                                                    {
                                                                    getSave()
                                                                    close()
                                                                    }
                                                                } >
                                                                Save
                                                            </button>
                                                        </div>
                                                            
                                                        </div>
                                                    </div>
                                    )
                                }
                                </Popup>
                </div>
               


 
            </div>
                
           
                
            <div className=" w-[40%] mx-auto ">
                
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-3 bg-gray-200">
                        <h1 className="text-lg font-bold">Shopping Cart</h1>
                        <span className="text-gray-600">{data.length} items</span>
                    </div>
                    {
                        data.map(eachItem=>(
                            <div className="p-4">
                                <div className="flex items-center mb-4">
                                    <img className="h-16 w-16 object-contain rounded-lg mr-4" src="https://picsum.photos/200/200"
                                        alt="Product" />
                                    <div className="flex-1">
                                        <h2 className="text-lg font-bold">{eachItem.title}</h2>
                                        <span className="text-gray-600">{eachItem.price}</span>
                                    </div>
                                    <button className="text-gray-600 hover:text-red-500">
                                            <button className="relative w-full p-4 text-blue-500 font-bold rounded-lg overflow-hidden group hover:text-white">
                                                <span className="absolute inset-0 bg-blue-500  text-white scale-0 group-hover:scale-100 transition-transform duration-00 ease-in-out rounded-lg "></span>
                                                <span className="relative" onClick={()=>{getRemoved(eachItem.title)}}>Remove</span>
                                            </button>
                                    </button>
                                </div>
                                
                            </div>
                        ))
                    }
                    <div className="px-4 py-3 bg-gray-200">
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-lg">Total:</span>
                            <span className="font-bold text-lg">{total}</span>
                        </div>
                        <div className="flex justify-between mt-4"> 
                            <button className="relative w-1/2 text-white font-bold rounded-lg overflow-hidden group" onClick={()=>{navigate('/order')}}>
                                <span className="absolute inset-0 bg-slate-500 scale-0 group-hover:scale-100 transition-transform duration-00 ease-in-out rounded-lg"></span>
                                <span className="relative ">Check out</span>
                            </button>
                            <button className="block w-[40%]  bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    
  )
}

export default FinalOrderPage