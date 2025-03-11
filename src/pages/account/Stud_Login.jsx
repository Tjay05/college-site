const StudentLogin = () => {
  return (
    <form action="" className="my-8 lg:grid lg:grid-cols-2 lg:gap-x-16">
      <div className="register_div">
        <label htmlFor="email-address" className="register_label">Email Address</label>
        <input 
          type="email"
          id="email-address" 
          className="register_input" 
          placeholder="E.g johndoe123@yahoo.com"
        />
      </div>
      <div className="register_div">
        <label htmlFor="password" className="register_label">Password</label>
        <input 
          type="password" 
          id='password'
          className="register_input"
          placeholder="Password"
        />
      </div>
      <div className="flex gap-2 items-center col-span-2 mx-auto text-[#41A94E] my-6">
        <input type="checkbox" className="" id="check" />
        <label htmlFor="check" className="text-xs lg:text-base">I have read and understood and agree to the <span className="underline">Terms & Condition</span> and <span className="underline">Privacy Policy</span></label>
      </div>
      <button className="rounded-lg text-white col-span-2 mx-auto bg-[#41A94E] font-semibold w-full p-2 md:w-1/2 lg:text-xl">Sign Up</button>
    </form>
  );
}
 
export default StudentLogin;