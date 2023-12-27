import React, { useState } from 'react';
import './dashboard.css';
import HeaderBav from './HeaderBav';
import Rechart from './Rechart';
import AccordionDiv from './AccordionDiv';

function Dashboard() {

    return (
        <div className='dashboard_page'>
            <div className='content_page'>
                <HeaderBav/>
                <div className='stats_content'>
                    <div className='stats_card'>
                        <div className='dashboard_label'>
                            <p>Total Trading Volume</p>
                        </div>
                        <div className='dashboard_value'>
                            <p>$ 272,852.21</p>
                        </div>
                    </div>

                    <div className='stats_card'>
                        <div className='dashboard_label'>
                            <p>Total Trading Volume</p>
                        </div>
                        <div className='dashboard_value'>
                            <p>$ 272,852.21</p>
                        </div>
                    </div>

                    <div className='stats_card'>
                        <div className='dashboard_label'>
                            <p>Total Trading Volume</p>
                        </div>
                        <div className='dashboard_value'>
                            <p>$ 272,852.21</p>
                        </div>
                    </div>
                </div>

                <div className='pool-content-group'>
                    <div className='pool-card'>
                        <div className='pool-info'>
                            <div className='pool-title'>
                                <img src='https://app.lexer.markets/assets/corecrypto-16dfbe5b.svg' alt=''></img>
                                <span>mXLP</span>
                            </div>
                            <div className='App-card-row'>
                                <div className='price'>Price</div>
                                <div className='price_value'>$ 1.022</div>
                            </div>
                            <div className='App-card-row'>
                                <div className='price'>Price</div>
                                <div className='price_value'>$ 1.022</div>
                            </div>
                            <div className='App-card-row'>
                                <div className='price'>Price</div>
                                <div className='price_value'>$ 1.022</div>
                            </div>
                            <div className='App-card-row'>
                                <div className='price'>Price</div>
                                <div className='price_value'>$ 1.022</div>
                            </div>
                        </div>
                        <div className='stats-pichart'>
                            <Rechart />
                        </div>
                    </div>

                    <div className='pool-card'>
                        <div className='pool-info'>
                            <div className='pool-title'>
                                <img src='https://app.lexer.markets/assets/corecrypto-16dfbe5b.svg' alt=''></img>
                                <span>mXLP</span>
                            </div>

                            <div className='App-card-row'>
                                <div className='price'>Price</div>
                                <div className='price_value'>$ 1.022</div>
                            </div>
                            <div className='App-card-row'>
                                <div className='price'>Price</div>
                                <div className='price_value'>$ 1.022</div>
                            </div>
                            <div className='App-card-row'>
                                <div className='price'>Price</div>
                                <div className='price_value'>$ 1.022</div>
                            </div>
                            <div className='App-card-row'>
                                <div className='price'>Price</div>
                                <div className='price_value'>$ 1.022</div>
                            </div>
                        </div>
                        <div className='stats-pichart'>
                            <Rechart />
                        </div>
                    </div>
                </div>

                <div className='dashboard_disclosure'>
                    <AccordionDiv/>
                </div>
            </div>
   
        </div>
    )
}

export default Dashboard