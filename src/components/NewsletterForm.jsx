

const NewsletterForm = () => {
  return (
    <form className="flex flex-1 flex-col items-start w-full
    gap-y-6 lg:flex-row lg:gap-x-10" >
      <input
      className="input text-base text-white placeholder:text-white placeholder:text-base"
      type="text" 
       placeholder="Enter your email" />
      <button className="btn bg-white text-darkblue px-8 hover:bg-white/70">
        Subscribe</button>
    </form>
  )
};

export default NewsletterForm;
