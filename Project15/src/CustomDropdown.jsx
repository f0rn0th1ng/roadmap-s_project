import { useState } from 'react';
import './CustomDropdown.css';

function CustomDropdown({ options, onSelect }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Select");  
    
    const dropdownopen = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };

    const handleoptionclick=(option)=>{
        setSelectedOption(option);
        setIsOpen(false);

    }
    
    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    // 当鼠标离开时关闭下拉菜单
    const handleMouseLeave = () => {
        setIsOpen(false);
    };


    return(
        <>
        <div className="option_container"
         onMouseEnter={handleMouseEnter} 
         onMouseLeave={handleMouseLeave}>
            <a className="option_content"
            onClick={dropdownopen}>{selectedOption}
            </a>
            {isOpen&&
                (<nav>
                    {options.map((option,index)=>(
                        <a key={index} className='option_list' onMouseEnter={()=>handleoptionclick(option)}>
                        {option}
                        </a>
                    ))}
                </nav>
            )}
        </div>
        </>
    );
  }

  export default CustomDropdown;