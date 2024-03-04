import React from 'react';
import { ConnectContainer } from '../services/connect';
import { Typography } from '@mui/material';
import centerImg from '../assets/images/Group 8235.png';
import { listData_1, listData_2, listData_3 } from '../services/listData';

const RDeeConnect = () => {
    return (
        <ConnectContainer>
            <Typography className="title">R-DEE <span>Connect™</span></Typography>
            <Typography className="sub-title">Transforms An Industry into a Network.</Typography>

            <Typography className="sub-line">
                Healthcare workflow reimagined.
                <br />
                Handle sensitive healthcare communication
                <br />
                and data with peace of mind and ease.
            </Typography>

            <div className="center-section">
                <div className="list-items">
                    {
                        listData_1.map((item) => (
                            <div className="list" key={item.id}>
                                <img src={item.icon} alt="" />
                                <Typography className='desc'>{item.desc}</Typography>
                            </div>
                        ))
                    }
                </div>

                <img className='centerImg' src={centerImg} alt="" />

                <div className="list-items">
                    {
                        listData_2.map((item) => (
                            <div className="list" key={item.id}>
                                <img src={item.icon} alt="" />
                                <Typography className='desc'>{item.desc}</Typography>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="tool-items">
                {
                    listData_3.map((item) => (
                        <div className="list" key={item.id}>
                            <img src={item.icon} alt="" />
                            <Typography className='desc'>{item.desc}</Typography>
                        </div>
                    ))
                }
            </div>
        </ConnectContainer>
    )
}

export default RDeeConnect
