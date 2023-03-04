const Blogs = () => {
  return (
    <div className="w-full mt-24 flex flex-col justify-center items-center">
      <h2 className="text-xl">Blog Reviews</h2>
      <div className="w-[80%] mt-10 flex flex-col justify-center items-center">
        <div className="max-w-3xl">
          <p className="text-xxs sm:text-xs md:text-sm italic">
            Like its predecessor Paralyzed, I am very fond of Jordan Parker's passionate vocal
            delivery which beautifully conveys the emotion of his storytelling. Losing Again is a
            song about finally being in a good place in life, reassuring yourself that the bad times
            are part of the past and that you're going to be ok. This message is wrapped around a
            warm indie-pop production with intricate guitar riffs nicely intertwined with steady
            percussion, creating the perfect background for Jordan's gorgeous vocals and honest
            storytelling to soar.
          </p>
          <div className="text-xxs sm:text-xs md:text-sm flex">
            <p>-</p>
            <a
              className="text-blue-500 underline ml-2"
              href="https://www.caesarlivenloud.com/2021/08/jordan-parker-shares-new-single-paralyzed.html"
            >
              Caesar Live n Loud
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
