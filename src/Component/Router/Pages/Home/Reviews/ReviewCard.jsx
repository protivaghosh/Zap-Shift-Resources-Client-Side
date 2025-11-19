import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({review}) => {
    const {user_photoURL, userName, review:tastimonial} = review;
    return (
          <div className="max-w-sm bg-white shadow-md rounded-xl p-6 border border-gray-100">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-teal-400 text-2xl mb-3" />

      {/* Main Text */}
      <p className="text-gray-600 leading-relaxed">{tastimonial}
        A posture corrector works by providing support and gentle alignment to your encouraging you to maintain proper posture
        throughout the day.
      </p>

      {/* Divider */}
      <div className="border-t border-dashed border-gray-300 my-4"></div>

      {/* Profile */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-teal-700 rounded-full">
            <img className="w-10 h-10 bg-teal-700 rounded-full" src={user_photoURL} alt="" />
        </div>

        <div>
          <h3 className="font-semibold text-teal-900">{userName}</h3>
          <p className="text-gray-500 text-sm">Senior Product Designer</p>
        </div>
      </div>
    </div>
    );
};

export default ReviewCard;