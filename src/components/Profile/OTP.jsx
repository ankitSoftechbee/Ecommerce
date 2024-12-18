// OTP.js
import React from "react";

const OTP = ({ onClose }) => {
    const [otp, setOtp] = React.useState(Array(6).fill(""));

    const handleChange = (value, index) => {
        if (/^[0-9]?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value && index < otp.length - 1) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 text-white rounded-lg shadow-lg w-96 p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-400 hover:text-white"
                >
                    &times;
                </button>
                <h2 className="text-center text-lg font-bold mb-4">OTP Verification</h2>
                <p className="text-center mb-6">
                    Enter the OTP you received on <span className="text-purple-500">info@codexnexus.com</span>
                </p>

                <div className="flex justify-center space-x-2 mb-6">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            id={`otp-input-${index}`}
                            type="text"
                            value={digit}
                            onChange={(e) => handleChange(e.target.value, index)}
                            maxLength="1"
                            className="w-12 h-12 text-center text-white bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    ))}
                </div>

                <div className="text-center text-sm text-gray-400 mb-4">
                    Time remaining: <span className="text-purple-500">1:26 mm:ss</span>
                </div>
                <button
                    className="bg-purple-500 w-full py-2 rounded text-white font-bold hover:bg-purple-600"
                >
                    Verify
                </button>

                <div className="text-center text-sm text-gray-400 mt-4">
                    Didn’t receive the code?{" "}
                    <button className="text-purple-500 hover:underline">Resend Code</button>
                </div>
            </div>
        </div>
    );
};

export default OTP;
