import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Leftdrawer from './Leftdrawer';
import Wallet from './Wallet';
import { Button } from '@mui/material';
import './dashboard.css';

function HeaderBav() {

    const [dropen, setDropen] = useState(false);
    const handleropen = () => {
        setDropen(true);
    }
    const handlerclose = () => {
        setDropen(false);
    }

    return (
        <header>
            <div className='header_container'>
                <div className='left_part'>
                    <IconButton className='hamburgur' onClick={handleropen}>
                        <MenuIcon style={{ color: "whitesmoke" }}>
                        </MenuIcon></IconButton>
                    <Drawer open={dropen} onClose={handlerclose} className='drawer' style={{ backgroundColor: "#0d0f15" }}>
                        <Leftdrawer logclose={handlerclose} />
                    </Drawer>
                    <div className='logo'>
                        <img src='https://app.lexer.markets/assets/logo_LEXER-80aa9bef.svg' alt=''></img>
                    </div>
                </div>
                <div className='right_part'>
                    <Wallet />
                </div>
            </div>
        </header>
    )
}

export default HeaderBav;