import React from "react";

const Contact = () => {
  return (
    <div className="bg-base-200 bg">
      <div className="py-20">
        <div className="hero-content lg:w-10/12 w-11/12 mx-auto flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              Your <span className="text-orange-600">Feedback!</span>
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda{" "}
              <br /> excepturi exercitationem quasi. In deleniti eaque aut
              repudiandae et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="Email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  name="Message"
                  id=""
                  cols="30"
                  rows="100"
                  className="input input-bordered"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn text-white border-none bg-orange-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
