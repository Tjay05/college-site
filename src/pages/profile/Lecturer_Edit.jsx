const Lecturer_Edit = () => {
  return (
    <form action="" className="my-8">
      <div className="register_div">
        <label htmlFor="name" className="register_label">Full Name</label>
        <input 
          type="text"
          id="name" 
          className="register_input" 
          placeholder="Full Name"
        />
      </div>
      <div className="register_div">
        <label htmlFor="phone-number" className="register_label">Phone Number</label>
        <input 
          type="number"
          id="phone-number" 
          className="register_input" 
          placeholder="Phone Number"
        />
      </div>
      <div className="register_div">
        <label htmlFor="email-address" className="register_label">Email Address</label>
        <input 
          type="email"
          id="email-address" 
          className="register_input" 
          placeholder="E.g johndoe123@yahoo.com"
        />
      </div>
      <button className="rounded-lg text-white bg-[#41A94E] font-semibold w-full p-2 my-8 lg:text-xl">Save Changes</button>
    </form>
  );
}
 
export default Lecturer_Edit;