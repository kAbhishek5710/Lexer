import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import './wallet.css'
import { Divider } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png'
import { CSSTransition } from 'react-transition-group';

const Wallet = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleClickOpen}>
                <div className='right_img'>
                    <img src='https://app.lexer.markets/assets/ic_wallet_24-0b87a489.svg' alt=''></img>
                </div>
                <p>Connect</p>
            </Button>
            <Dialog open={open} onClose={handleClose} className='wallet_section'>
                <div className='Wallet_page'>
                    {/* <DialogTitle>Popup Title</DialogTitle> */}
                    <div className='wallet_leftpage'>
                        <DialogTitle className='left_title'>Connect a Wallet</DialogTitle>
                        <div className='recommended'>
                            <div className='recommended_text'>Recommended</div>
                            <div className='recommended_name'>
                                <img src='https://tse3.mm.bing.net/th?id=OIP.mBN8wgGEa6SxJ__zyQLeAQHaHa&pid=Api&P=0&h=180' alt=''></img>
                                <p>Rabby</p>
                            </div>
                            <div className='recommended_name'>
                                <img src='https://thumbs.dreamstime.com/z/cute-fox-avatar-flat-colors-illustration-54011275.jpg?w=768' alt=''></img>
                                <p>MetaMask</p>
                            </div>
                            <div className='recommended_name'>
                                <img src='https://tse3.mm.bing.net/th?id=OIP.qH_Tueu1vt8j-rMpOjgKRAHaF7&pid=Api&P=0&h=180' alt=''></img>
                                <p>WalletConnect</p>
                            </div>
                        </div>
                        <div className='recommended'>
                            <div className='recommended_text'>Others</div>
                            <div className='recommended_name'>
                                <img src='https://tse4.mm.bing.net/th?id=OIP.jgGdwW0wtvaGT5NBbgtKjQHaHa&pid=Api&P=0&h=180' alt=''></img>
                                <p>Rainbow</p>
                            </div>
                        </div>
                    </div>
                    <Divider orientation="vertical" flexItem style={{ color: "white" }} />
                    <div className='wallet_rightpage'>
                        {/* <div className='right_title'>What is a Wallet?</div> */}
                        <CancelIcon style={{ color: "white", marginLeft:"18rem", marginTop:"5px",cursor:" pointer"}} onClick={handleClose} />
                        <DialogTitle className='right_title'>What is a Wallet?</DialogTitle>
                        <div className='right_box'>
                            <img src={img1} alt=''></img>
                            <div className='right_box_text'>
                                <div className='bold_text'>
                                    A Home for your Digital Assets
                                </div>
                                <div className='bold_text2'>
                                    Wallet are used to send, recieve, store, and display digital assests like Ethereum and NFTs.
                                </div>
                            </div>
                        </div>
                        <div className='right_box'>
                            <img src={img2} alt=''></img>
                            <div className='right_box_text'>
                                <div className='bold_text'>
                                    A New Way to log in
                                </div>
                                <div className='bold_text2'>
                                    Instead of creating new accounts and passwords on every website, just connect your wallet.
                                </div>
                            </div>
                        </div>
                        <div className='buttons'>
                            <button>Get a Wallet</button>
                            <a href='' >Learn More</a>
                        </div>
                    </div>
                    {/* <DialogContent>
          <DialogContentText>
            This is the content of the popup. You can add any content here.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button> */}
                    {/* Add additional buttons or actions as needed */}
                    {/* </DialogActions> */}
                </div>
            </Dialog>        
        </div>
    );
};

export default Wallet;
