import { blogReviews } from '../constants/blogData'

const Blogs = () => {
  return (
    <div className="w-full mt-24 flex flex-col justify-center items-center">
      <h2 className="text-xl">Blog Reviews</h2>
      <div className="w-[80%] max-w-[500px] mt-6 flex flex-col justify-center items-center">
        {blogReviews.map((review) => (
          <div className="max-w-3xl mt-6 first:mt-0" key={review.link}>
            <p className="text-xxs sm:text-xs md:text-sm italic">{review.review}</p>
            <div className="text-xxs sm:text-xs md:text-sm flex">
              <p>-</p>
              <a className="text-blue-500 underline ml-2" href={review.link}>
                {review.source}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blogs
