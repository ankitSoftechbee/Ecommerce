import React from "react";

const Confirmation = ({ handleClose, userDetails }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 text-white rounded-lg shadow-lg w-96 p-6 relative">
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 text-gray-400 hover:text-white"
                >
                    &times;
                </button>
                <h2 className="text-center text-lg font-bold mb-4">OTP Verification</h2>
                <p className="text-center mb-6">
                    Congratulations! <span className="text-purple-500">Your registration has been successful.</span>
                </p>
                <div className="bg-gray-700 p-4 rounded-lg mb-4">
                    <p className="text-center mb-2">
                        <strong>User Details:</strong>
                    </p>
                    <p className="text-sm">
                        <span className="font-bold">Username:</span> {userDetails?.newUser || ''}
                    </p>
                    <p className="text-sm">
                        <span className="font-bold">Password:</span> {userDetails?.outputPassword || ''}
                    </p>
                </div>
                <p className="text-center text-sm">
                    Please use the above credentials to log in. Thank you!
                </p>
            </div>
        </div>
    );
};

export default Confirmation;
