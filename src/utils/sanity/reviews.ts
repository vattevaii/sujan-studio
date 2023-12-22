import { ReviewItem } from "@/components/PageSections/UserReviews/ReviewSlider";
import { client } from "../../../sanity/lib/client";

export const getAllReviews: () => Promise<ReviewItem[]> = async function () {
  return await client.fetch(`*[_type=="reviewItem"]{
        "bg":bg.asset.src,author,"authorSrc":authorSrc.asset.src,company,reviewText
    }`);
};
