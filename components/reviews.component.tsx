import React, {useMemo, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAnglesRight} from "@fortawesome/free-solid-svg-icons";
import ReviewCard from "./reviewCard.component";

const Reviews = ({homeReviewsData}: {homeReviewsData: any}) => {
    const [displayedReviews, setDisplayedReviews] = useState(2);

    const reviewCards = useMemo(() => {
        const elements: JSX.Element[] = [];
        homeReviewsData?.forEach((review, index) => {
            elements.push(<ReviewCard indexNum={index} review={review} displayedReviews={displayedReviews}/>)
        })
        return elements
    }, [homeReviewsData, displayedReviews]);
    const handleLoadMore = () => {
        setDisplayedReviews(prevCount => prevCount + 2);
    };

    return(
        <div>
            <div className="w-11/12 mx-auto relative flex">
                <div className="columns-1 md:columns-3 gap-1">
                    {reviewCards}
                </div>
            </div>
            {homeReviewsData.length && <div className="flex justify-center items-center" onClick={handleLoadMore}>
                <p className="mt-4 mb-4">Load more</p>
                <FontAwesomeIcon
                    icon={faAnglesRight}
                    className="text-lime cen h-3 mr-1 ml-2"
                />
            </div>}
        </div>
    )
}

export default Reviews