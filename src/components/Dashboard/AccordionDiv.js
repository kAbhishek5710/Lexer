import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './accordion.css'

function AccordionDiv() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const accordionStyle = {
    borderRadius: "2rem",
    backgroundColor: isHovered ? "rgba(18, 29, 65, 0.8)" : "rgba(13, 21, 48, .8)",
    transition: "background-color 0.2s ease-in-out"
  };

  return (
    <div className='acc_box1'>
      <Accordion
        className='acc_box'
        style={accordionStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className='left_portion'>
            <img src='https://app.lexer.markets/assets/lex-40b73a15.svg' alt='' />
            <Typography className='left_text' style={{ fontSize: "x-large", color: "white" }}>LEX</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ color: "white" }}>
           <div className='acc_textbox'>
            <div className='app_card_row'>
                <div className='lebel'>APR</div>
                <div className='card_value'>71.63%</div>
            </div>
            <div className='app_card_row'>
                <div className='lebel'>Total Staked </div>
                <div className='card_value'>11,017,537.47 LEX($45,744.81)</div>
            </div>
           </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionDiv;
