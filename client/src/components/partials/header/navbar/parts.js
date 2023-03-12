
import { useNavigate } from "react-router-dom";
import icon from "./green-tea.png";


export const Brand = () => {
    const navigate=useNavigate();
    const styles={
        brand:{
            display:"flex",
            alignItems:"center",
            gap:"10px",
            justifyContent:"center",
            cursor:"pointer",

        },
        brandIcon:{
            width:"40px",
        },
        brandName:{
            fontfamily:"Roboto",
            fontWeight:"800",
            fontSize:"30px",
            letterSpacing:"1px",
        }
    }
    return <>
        <div style={styles.brand} onClick={() => { navigate("/") }}>
            <img src={icon} style={styles.brandIcon} alt="" />
            <h2 style={styles.brandName}>Antariksh</h2>
        </div>
    </>
}