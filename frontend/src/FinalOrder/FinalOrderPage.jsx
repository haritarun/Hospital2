import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { useEffect,useState } from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";


const FinalOrderPage = () => {
    const [address,setAddress]=useState([])
    const [isShow,setShow]=useState('')
    const [data,setData]=useState([])


    const [firstName,setFirstName]=useState('')
    const [phoneNo,setPhoneno]=useState('') 
    const [area,setArea]=useState('')
    const [city,setCity]=useState('')
    const [state,setState]=useState('')
    const [zipCode,setZipcode]=useState('')



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
        console.log(email)
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
        const email = localStorage.getItem('email')
        try{
            const response = await axios.post('http://localhost:3000/addressPost',{
                firstName,
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

  return (
    <div className="flex md:flex-row justify-between min-h-screen pl-20 pr-20 pt-20 xs:flex-col">
        
            <div className="bg-gray-100 rounded-lg  p-6 w-[45%] h-fit">
                <h1 className="text-2xl font-bold mb-6">Address</h1>
                {
                    address.map((eachItem, index) => (
                        <div key={index} className="flex flex-col mb-4">
                            <div className="flex justify-between w-full">
                                <h1>Address 1</h1>
                                {
                                    (isShow===eachItem.firstName)   ? 
                                    <RiArrowDropUpLine size={30} onClick={()=>{setShow(null)}} />
                                    :
                                    <RiArrowDropDownLine size={30} onClick={()=>{setShow(eachItem.firstName)}} />
                                }
                            </div>
                            {
                                (eachItem.firstName===isShow) && <div>
                                <p>{eachItem.fullName}</p>
                                <p>{localStorage.getItem('email')}</p>
                                <p>{eachItem.phoneNo}</p>
                                <div className="flex">
                                    <p >{eachItem.area},</p>
                                    <p className="ml-1">{eachItem.city},</p>
                                    <p className="ml-1">{eachItem.state},</p>
                                    <p className="ml-1">{eachItem.zipCode},</p>
                                </div>
                            </div>
                            
                            }
                            
                        </div>
                    ))
                }
                <div>
                                <Popup trigger={
                                    <button className="bg-blue-600 p-3 rounded-lg text-white w-full mt-5 hover:bg-blue-800">
                                    Add Address
                                    </button>}
                                    modal
                                    
                                >
                                {
                                    ()=>(
                                        <div className="flex items-center justify-center p-12">   
                                            <div className="mx-auto w-full max-w-[550px] bg-white">
                                                <htmlForm>
                                                    <div className="mb-5">
                                                        <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                                                            Full Name
                                                        </label>
                                                        <input type="text" className="name" id="name" placeholder="Full Name" value={firstName} 
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
                                                                className="hover:shadow-htmlForm w-[40%] rounded-md bg-green-400 py-3 px-8 text-center text-base font-semibold text-white outline-none hover:bg-green-600" onClick={getSave} >
                                                                Save
                                                            </button>
                                                        </div>
                                                            </htmlForm>
                                                        </div>
                                                    </div>
                                    )
                                }
                                </Popup>
                            </div>

                
            </div>
                
        
        <div className="bg-gray-100 rounded-lg  p-6 h-fit">
            <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
            <div className="flex justify-between mb-4">
                <div className="flex items-center">
                    <img src="https://via.placeholder.com/80" alt="Product Image" className="mr-4" />
                    <div>
                        <h2 className="font-bold">Product Name</h2>
                        <p className="text-gray-700">Product Description</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <button className="text-red-500 hover:text-red-700"><i className="fas fa-trash"></i></button>
                    <div className="mx-4">
                        <input type="number"  className="w-16 text-center" step="1" min="1" />
                    </div>
                    <span className="font-bold">$19.99</span>
                </div>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between items-center">
                <span className="font-bold">Subtotal:</span>
                <span className="font-bold">$19.99</span>
            </div>
            <div className="flex justify-between items-center mt-4">
                <span>Taxes:</span>
                <span>$1.00</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between items-center">
                <span className="font-bold">Total:</span>
                <span className="font-bold">$20.99</span>
            </div>
            <div className="flex justify-end mt-6">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right">Checkout</button>
            </div>
        </div>
    </div>
    
  )
}

export default FinalOrderPage