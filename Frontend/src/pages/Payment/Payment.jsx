
const Payment = () => {
    return (
        <div className="text-center mt-20 pb-96">
            <h1 className=" font-mono tracking-widest text-5xl 
              bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-bold">Payment </h1>
            <p className="mt-10 font-semibold font-mono tracking-widest text-2xl 
              bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Please select a payment method:</p>
            <div className="flex justify-center mt-6">
                <button className="btn btn-primary mr-4">Credit Card</button>
                <button className="btn btn-secondary">SSL-COMMERZ</button>
            </div>
        </div>

    );
};

export default Payment;