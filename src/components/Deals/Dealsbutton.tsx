import React from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


interface ShowPopupButtonProps {
  onClick: () => void;
}

const ShowPopupButton: React.FC<ShowPopupButtonProps> = ({ onClick }) => {
  return (
    // <button onClick={onClick}>Show Form</button>
    <div className="deals-btn"  onClick={onClick}><span>New-Deals</span><span><AddOutlinedIcon /></span></div>
  );
};

export default ShowPopupButton;
