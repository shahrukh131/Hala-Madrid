import React, { useState } from "react";

export const Contact = () => {
  const [data, setData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const InputEvent = (e) => {
    const { name, value } = e.target;
    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("ok");
    console.log(data);
    alert(
      `My name is ${data.fullName} . My email address ${data.email} . My phone number is ${data.phoneNumber}.Message:${data.message}`
    );
  };

  return (
    <>
      <div className="my-3">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                  name="fullName"
                  value={data.fullName}
                  onChange={InputEvent}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email Address"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="+880"
                  name="phoneNumber"
                  value={data.phoneNumber}
                  onChange={InputEvent}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="3"
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                ></textarea>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-outline-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
