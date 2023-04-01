import { blogReviews } from '../constants/blogData'

const Blogs = () => {
  const caesarImg = (
    <img
      className="w-[100px] ml-2 bg-white rounded-sm"
      src="https://blogger.googleusercontent.com/img/a/AVvXsEjKyjLD_LuuFRGnw7PGgcTsrIkBZwdJq08tlP-MTFkRVJkFjRpst_UPJIovUuCfKfLaPLnhqj5bGVRB2qd9BqRvN985tVefGZcJEFLeN944sph2hS9PHQS7h2hbXk3--FG_Hpn3HkYnrpXUwRFMRfW5RgXpEBxoSPSKPwCo59W7DUgGtEIBSyGCCQbtZA=s997"
      alt="Caesar Live N Loud"
      title="Caesar Live N Loud"
    />
  )

  const globalImg = (
    <img
      className="w-[200px] max-h-[90px] ml-2 bg-white rounded-sm"
      src="https://globalmoneyworld.com/wp-content/uploads/2019/08/EFB4E4AF-6765-421A-8378-ED4B965FF367-300x169.jpeg"
      alt="global money music logo"
      decoding="async"
      loading="lazy"
    ></img>
  )

  const popmusikImg = (
    <img
      src="https://popmuzik.se/wp-content/uploads/2021/03/Popmuzik-New-Logo-Black.png"
      className="w-[150px] ml-2 bg-white rounded-sm"
      alt="Popmuzik"
    ></img>
  )

  const musicForMisfitsImg = (
    <img
      className="w-[150px] ml-2 bg-white rounded-sm"
      src="https://pbs.twimg.com/profile_images/1552962038397288449/QJwmOiT1_400x400.jpg"
      alt="Music for Misfits logo"
    ></img>
  )

  return (
    <div className="w-full mt-24 flex flex-col justify-center items-center">
      <h2 className="text-xl">Blog Reviews</h2>
      <div className="w-[80%] max-w-[500px] mt-6 flex flex-col justify-center items-center">
        {blogReviews.map((review) => (
          <div className="max-w-3xl mt-8 first:mt-0" key={review.link}>
            <p className="text-xxs sm:text-xs md:text-sm italic">{review.review}</p>
            <div className="mt-2 text-xxs sm:text-xs md:text-sm flex justify-start items-start">
              <p className="mr-1">-</p>
              <a
                className="w-full text-blue-500 underline ml-2 flex justify-between items-start"
                href={review.link}
              >
                {review.source}
                {review.source === 'Caesar Live n Loud' && caesarImg}
                {review.source === 'Global Money World' && globalImg}
                {review.source === 'POPMUSIK' && popmusikImg}
                {review.source === 'Music For The Misfits' && musicForMisfitsImg}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blogs
