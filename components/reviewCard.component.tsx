import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faStar, faStarHalf} from "@fortawesome/free-solid-svg-icons";
interface reviewCardProps  {
    reviewName: string
    reviewRating: number
    reviewScore: number
    reviewComment: string
    reviewDate: string
    reviewVerified: string
}
const ReviewCard = ({ indexNum, review, displayedReviews }: { indexNum: any,review: reviewCardProps, displayedReviews: any }) => {
    const renderRatingStars = () => {
        const stars = [];
        const fullStars = Math.floor(review.reviewRating);
        const hasHalfStar = review.reviewRating % 1 !== 0;
        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className="text-lime h-4 mr-1 hover:md:h-5 lg:h-5"
                />
            );
        }
        if (hasHalfStar) {
            stars.push(
                <FontAwesomeIcon
                    key="half"
                    icon={faStarHalf}
                    className="text-lime h-4 mr-1 hover:md:h-5 lg:h-5"
                />
            );
        }
        return stars;
    };

    return (
        <div className={`break-inside-avoid h-fit w-full rounded-[10px] ${indexNum > displayedReviews ? 'hidden' : 'block'}`}>
        <div className="w-full border border-gray-300 rounded bg-white p-3 ml-1">
            <div className="flex flex-row space-x-4">
                <p className="text-sm font-semibold font-montserrat">{review.reviewName}</p>
                <div className="flex flex-row">
                    {renderRatingStars()}
                </div>
                <p className="text-[#697E9A]">{review.reviewScore}</p>
            </div>
            <p className="text-sm mt-4 mb-4 font-montserrat text-[#212529]">{review.reviewComment}</p>
            <div className="flex flex-row space-x-3 text-sm text-[#697E9A] font-montserrat">
                <p>{review.reviewDate}</p>
                <div className="flex flex-row items-center">
                    {
                        review.reviewVerified === 'Verified' &&
                        <FontAwesomeIcon
                            icon={faCheck}
                            className="text-lime h-3 mr-1"
                        />
                    }
                    <p>{review.reviewVerified}</p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default ReviewCard