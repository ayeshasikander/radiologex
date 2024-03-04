import React from 'react';
import { PlanContainer,ProPlanContainer } from '../services/pricePlan';
import { Card, Typography } from '@mui/material';
import { pricePlanData, proPricePlan } from '../services/pricePlanData';
const PricePlan = () => {
  return (
    <PlanContainer>
      <div className="main">
        <div className="heading">
          <Typography className="plan_title">R-DEE Pricing Plans for Healthcare
            <span> Professionals</span></Typography>
          <Typography className="plan_subtitle">Choose the plan that works for you or your organizational type</Typography>
        </div>

        <div className="price_cards">
          {
            pricePlanData.map((plan) => (
              <Card className="price_card" key={plan.id}>
                <Typography className={`mini_title-${plan.id}`}>
                  {plan.priceTag}
                </Typography>
                <Typography className='main_title'>
                  {plan.title}
                </Typography>
                <Typography className='sub_title'>
                  {plan.desc}
                </Typography>
                <div className="price_feature">
                  <ul className={`feature-list-${plan.id}`}>
                    {plan.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))
          }

        </div>
      </div>

      <ProPlanContainer className="pro">
        <div className="heading">
          <Typography className="plan_title">R-DEE Pricing Plans for
            <span> Patients</span></Typography>
          <Typography className="plan_subtitle">Choose the plan that works for you or your organizational type</Typography>
        </div>

        <div className="price_cards">
          {
            proPricePlan.map((plan) => (
              <Card className="price_card" key={plan.id}>
                <Typography className={`mini_title-${plan.id}`}>
                  {plan.priceTag}
                </Typography>
                <Typography className='main_title'>
                  {plan.title}
                </Typography>
                <Typography className='sub_title'>
                  {plan.desc}
                </Typography>
                <div className="price_feature">
                  <ul className={`feature-list-${plan.id}`}>
                    {plan.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))
          }

        </div>
      </ProPlanContainer>
    </PlanContainer>
  )
}

export default PricePlan
