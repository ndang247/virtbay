import React, { useState } from 'react';
import {
    Paper, Stepper, Step, StepLabel,
    Typography, CircularProgress, Divider, Button
} from '@material-ui/core';
import useStyles from './checkoutFormStyles';
import { AddressForm, PaymentForm } from 'src/components';

const steps = ['Shipping address', 'Payment details'];

const CheckoutForm = () => {
    const [activeStep, setActiveStep] = useState(0);
    const classes = useStyles();

    const Confirmation = () => (
        <div>
            Confirmation
        </div>
    );

    const Form = () => activeStep === 0 ? <AddressForm /> : <PaymentForm />

    return (
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography variant='h4' align='center'>Checkout</Typography>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation /> : <Form />}
            </Paper>
        </main>
    );
}

export default CheckoutForm;