import React from 'react';
import HeaderBav from '../Dashboard/HeaderBav';
import './liquidity.css'

function Liquidity() {
    return (
        <div className='liquidity_page'>
            <div className='liq_content_page'>
                <HeaderBav />
                <div className='section_block_cont'>
                    <div className='section_block'>
                        <div className='xlp_title'>Purchase
                            <a href='https://docs.lexer.markets/lexer/about-lexer-markets' className='link_underline'>mXLP</a>
                            to earn ETH fees from swaps and leverages trading.
                        </div>
                    </div>
                </div>
                <div className='xlpswap'>
                    <div className='tab_block'>
                        <div className='tab_option_xlp'>mXLP
                            <img src='https://app.lexer.markets/assets/corecrypto_pool_icon-12fc6dc5.svg'></img>
                        </div>
                    </div>
                    <div className='tab_block'>
                        <div className='tab_option_xlp'>mXLP
                            <img src='https://app.lexer.markets/assets/corecrypto_pool_icon-12fc6dc5.svg'></img>
                        </div>
                    </div>


                </div>
                {/*  */}
                <div className='xlpSwap_state'>
                    <div className='xlpSwap_left_container'>
                        <div className='xlp_swap_box'>
                            <div className='xlp_swap_innerbox'>
                                <div className='xwi_text'>APR</div>
                                <div className='xwi_value'><span>29.31%</span></div>
                            </div>
                        </div>
                        <div className='xlp_swap_box'>
                            <div className='xlp_swap_innerbox'>
                                <div className='xwi_text'>APR</div>
                                <div className='xwi_value'><span>29.31%</span></div>
                            </div>
                        </div>
                        <div className='xlp_swap_box'>
                            <div className='xlp_swap_innerbox'>
                                <div className='xwi_text'>APR</div>
                                <div className='xwi_value'><span>29.31%</span></div>
                            </div>
                        </div>
                        <div className='xlp_swap_box'>
                            <div className='xlp_swap_innerbox'>
                                <div className='xwi_text'>APR</div>
                                <div className='xwi_value'><span>29.31%</span></div>
                            </div>
                        </div>

                    </div>
                    {/*  */}
                    <div className='xlp_right-container'>
                        <div className='xlpswap'>
                            <div className='tab_block'>
                                <div className='tab_option_xlp'>Buy mXLP
                                </div>
                            </div>
                            <div className='tab_block'>
                                <div className='tab_option_xlp'>mXLP
                                </div>
                            </div>
                        </div>
                        <div className='right_bottom_box'>
                            <div className='right_pay'>
                                <div className='pay_text'>Pay:$0.00</div>
                                <div className='balance_text'>Balence:0.0000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Liquidity