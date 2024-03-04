import React from 'react';
import { StandardContainer } from '../services/standard';
import { Typography, Card } from '@mui/material';
import { support_logo } from '../services/listData';

const Standard = () => {
    return (
        <StandardContainer>
            <div className="head-text">
                <Typography className='standard_title'>A New Standard.
                    <br />
                    And Established Ones, Too.
                </Typography>
                <div >
                    <Typography className="standard-para">R-DEE's technology has been tested and certified by the ONC of the US Department of Human and Health
                        <br />
                        Services (HHS), and has attained ISO 9001 and 27001 Certifications for Quality Management
                        <br />
                        Systems and Information Security Management. R-DEE integrates easily and seamlessly,
                        <br />
                        exceeds HIPAA compliance and adheres to CDCA, HL7 FHIR, and
                        <br />
                        SOC2 standardizations.
                    </Typography>
                </div>
            </div>
            <div className="supporter">
                {
                    support_logo.map((item) => (
                        <Card className='support_card' key={item.id}>
                            <img src={item.logo} alt="standards" style={item.style}/>
                        </Card>

                    ))
                }
            </div>

        </StandardContainer>
    )
}

export default Standard
