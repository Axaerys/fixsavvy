import React from "react";

const Login = () => {
  return (
    <section className="loginSection min-h-screen  font-inter mt-8 -mb-8">
      <div className="loginMain shadow-lg border-orange-100 border-2">
        <input
          className="loginInput hover:scale-95 td focus:scale-100"
          type="checkbox"
          id="chk"
          aria-hidden="true"
        />

        <div className="signup">
          <form>
            <label
              className="loginLabel signupLabel"
              htmlFor="chk"
              aria-hidden="true"
            >
              Sign up
            </label>
            <input
              className="loginInput hover:scale-95 td focus:scale-100"
              type="email"
              name="email"
              placeholder="Email"
              required={true}
            />
            <input
              className="loginInput hover:scale-95 td focus:scale-100"
              type="number"
              name="phone"
              placeholder="Mobile Number"
              required={true}
            />
            <input
              className="loginInput hover:scale-95 td focus:scale-100"
              type="password"
              name="pswd"
              placeholder="Password"
              required={true}
            />
            <input
              className="loginInput hover:scale-95 td focus:scale-100"
              type="password"
              name="cnfpswd"
              placeholder="Confirm Password"
              required={true}
            />
            <div className="  w-60 mx-auto mt-4">
              <label className=" w-full flex-start -mb-3 cursor-pointer hover:scale-95 td checked:scale-100">
                <input
                  type="radio"
                  name="role"
                  className="checkbox mr-4 "
                  value="client"
                />
                I am a Client
              </label>
              <br />
              <label className=" w-full flex-start  cursor-pointer hover:scale-95 td checked:scale-100">
                <input
                  type="radio"
                  name="role"
                  className="checkbox mr-4 "
                  value="fixer"
                />
                I am a Fixer
              </label>
            </div>

            <button className="loginButton hover:scale-95 td">Sign up</button>
          </form>
        </div>

        <div className="login">
          <form>
            <label className="loginLabel" htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input
              className="loginInput hover:scale-95 td focus:scale-100 !border-blue-300 focus:!border-blue-500"
              type="email"
              name="email"
              placeholder="Email"
              required={true}
            />
            <input
              className="loginInput hover:scale-95 td focus:scale-100 !border-blue-300 focus:!border-blue-500"
              type="password"
              name="pswd"
              placeholder="Password"
              required={true}
            />
            <button className="loginButton !bg-primary-orange hover:scale-95 td">
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
