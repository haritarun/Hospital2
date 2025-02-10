
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import UserChatPage from './pages/UserChatPage';
import Navbar from './components/Navbar';
import AdminDashboard from './pages/AdminDashboard';
import AdminChat from './components/AdminChat';
import ChatList from './components/ChatList';
import UserChat from './components/UserChat';
import ChatPage from './pages/ChatPage';
import Profile from './pages/Profile';
import MailOTP from './pages/MailOTP';
import Sidebar from './components/Sidebar';
import UserDashboard from './pages/Userdashboard';
import Myorders from './pages/Myorders';
import AdminChatPage from './pages/AdminChatPage';
import Admin from './pages/Admin';
import AdminCategory from './pages/AdminCategory';
import Homepage from './HomePage/HomePage';
import Shop from './Shop/Shop';
import Order from './Order/Order';
import FinalOrder from './FinalOrder/FinalOrder';
import Product from './Product/Product'
import Payment from './Payment/Payment';


function App() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/chat" element={<UserChatPage />} />
        <Route exact path="/navbar" element={<Navbar />} />
        <Route exact path="/dashboard" element={<AdminDashboard />} />
        <Route exact path="/chatList" element={<ChatList />} />
        <Route exact path="/adminchat" element={<AdminChat />} />
        
        <Route exact path="/chatpage" element={<ChatPage />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/mailotp" element={<MailOTP />} />
        <Route exact path="/sidebar" element={<Sidebar />} />
        <Route exact path="/userdashboard" element={<UserDashboard />} />
        <Route exact path="/myorders" element={<Myorders />} />
        <Route exact path="/adminchatpage" element={<AdminChatPage />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/admincategory" element={<AdminCategory />} />
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/order" element={<Order />} />
        <Route exact path="/finalorder" element={<FinalOrder />} />
        <Route exact path="/product" element={<Product /> } />
        <Route exact path="/payment" element={<Payment />} />
      </Routes>
     </BrowserRouter>
  );
}

export default App;
