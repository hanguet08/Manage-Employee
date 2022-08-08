import { Link } from "react-router-dom";
import '../styles/layout/menu.css'
function Menu() {
  return (
    <div className ="m-navbar">
    <Link to="/" className="m-menu-item m-menu-selected">
           <div className="m-menu-icon"><i className="fa-solid fa-chart-pie"></i></div>
           <div className="m-menu-text">Tổng quan</div>
       </Link>
      <Link to="/addcontact" className="m-menu-item">
           <div className="m-menu-icon"><i className="fa-solid fa-chart-column"></i></div>
           <div className="m-menu-text">Danh mục nhân viên</div>
       </Link>
       <Link to ="/customer" className="m-menu-item">
           <div className="m-menu-icon"><i className="fa-solid fa-chart-pie"></i></div>
           <div className="m-menu-text">Mua hàng</div>
       </Link>
       
        <Link to ="/setting" className="m-menu-item">
           <div className="m-menu-icon"><i className="fa-solid fa-chart-pie"></i></div>
           <div className="m-menu-text">Thiết lập hệ thống</div>
       </Link>
    
   </div>
  );
}

export default Menu;