import React, { useState } from "react";
import LogoIcon from "@assets/svg/logo1.svg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import LoginFormInput from "../../../components/input/LoginFormInput";
import Modal from "../../../components/modal/Modal";
import { useEffect } from "react";

function Login() {
  const [reqError, setReqError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [verifyCode, setVerifyCode] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
  });
  const [showQR, setShowQR] = useState(false);

  // useForm for save values
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const formOnSubmit = async (data) => {
    console.log("data => ", data);
    setShowQR(true);
  };

  useEffect(() => {
    if (
      verifyCode[1].length > 0 &&
      verifyCode[2].length > 0 &&
      verifyCode[3].length > 0 &&
      verifyCode[4].length > 0 &&
      verifyCode[5].length > 0 &&
      verifyCode[6].length > 0
    ) {
      const codeText = `${verifyCode[1]}${verifyCode[2]}${verifyCode[3]}${verifyCode[4]}${verifyCode[5]}${verifyCode[6]}`;
      console.log("Verify Code =>", codeText);
    }
  }, [verifyCode]);

  const handleChange = async (e) => {
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split("-");

    let fieldIntIndex = parseInt(fieldIndex, 10);

    // Check if no of char in field == maxlength
    if (value.length >= maxLength) {
      // It should not be last input field

      if (fieldIntIndex < 6) {
        // Get the next input field using it's name
        const nextfield = document.querySelector(
          `input[name=field-${fieldIntIndex + 1}]`
        );

        // If found, focus the next field
        if (nextfield !== null) {
          setVerifyCode((prev) => ({ ...prev, [fieldIntIndex]: value }));
          nextfield.focus();
        }
      }

      if (fieldIntIndex == 6) {
        setVerifyCode((prev) => ({ ...prev, [fieldIntIndex]: value }));
      }
    }
  };

  return (
    <>
      <div className=" relative flex flex-col items-center max-w-2xl">
        <img className=" w-28 h-28" src={LogoIcon} alt="Logo" />

        <h1 className=" font-bold my-6 text-center text-backColor">ورود</h1>

        {/* login form */}
        <form
          onSubmit={handleSubmit(formOnSubmit)}
          className=" flex flex-col gap-4"
        >
          {/* username */}
          <LoginFormInput
            type={"text"}
            register={register}
            validation={{
              required: "این فیلد الزامیست",
            }}
            error={errors.username}
            name={"username"}
            label={"نام کاربری (کدملی یا شناسه ملی شرکت)"}
            placeholder={"نام کاربری"}
          />
          {/* password */}
          <LoginFormInput
            type={"password"}
            register={register}
            validation={{
              required: "این فیلد الزامیست",
              minLength: 6,
            }}
            error={errors.password}
            name={"password"}
            label={"گذرواژه (حداقل 8 کاراکتر)"}
            placeholder={"******"}
          />
          <div className=" flex justify-between items-center">
            <div className=" flex items-center gap-2 text-g-6">
              <input
                type="checkbox"
                id="remember"
                className="appearance-none w-5 h-5 border-2 border-s-400 rounded bg-[#E8F0F84D] mt-1 checked:bg-s-4 checked:border-none "
              />
              <label htmlFor="remember">به خاطر بسپار !</label>
            </div>
            <Link to={"/auth/forget-password"} className=" text-secondary">
              فراموشی رمز عبور
            </Link>
          </div>
          <button
            disabled={isLoading}
            className={
              isLoading
                ? " text-white py-4 bg-g-6 hover:bg-g-7 rounded-lg w-full"
                : " text-white py-4 bg-secondary hover:bg-secondary rounded-lg w-full"
            }
          >
            {isLoading ? "درحال ارسال..." : "ورود"}
          </button>
        </form>
        <p className=" text-g-6 font-semibold mt-6 flex gap-2">
          حساب کاربری ندارید؟
          <Link to={"/auth/register"} className=" text-secondary">
            ثبت نام کنید.
          </Link>
        </p>
      </div>

      {/* Modal */}

      <Modal isOpen={showQR} close={setShowQR} title={"احرازهویت"}>
        <div className=" flex flex-col items-center">
          <p>کد تایید به شماره تلفن شما ارسال شد</p>
          <form action="" method="post" className=" w-3/4">
            <div
              dir="ltr"
              className=" w-full my-4 flex items-center justify-center gap-4"
            >
              <input
                type="text"
                name="field-1"
                onChange={handleChange}
                placeholder="1"
                maxLength="1"
                min="1"
                minLength="1"
                max="1"
                required
                className="w-14 h-16 border rounded-lg p-4 text-center mx-auto hover:border-blue-200 focus:outline-none focus:ring focus:ring-secondary placeholder:font-medium font-bold text-xl text-secondary"
              />
              <input
                type="text"
                name="field-2"
                onChange={handleChange}
                placeholder="2"
                maxLength="1"
                min="1"
                minLength="1"
                max="1"
                required
                className="w-14 h-16 border rounded-lg p-4 text-center mx-auto hover:border-blue-200 focus:outline-none focus:ring focus:ring-secondary placeholder:font-medium font-bold text-xl text-secondary"
              />
              <input
                type="text"
                name="field-3"
                onChange={handleChange}
                placeholder="3"
                maxLength="1"
                min="1"
                minLength="1"
                max="1"
                required
                className="w-14 h-16 border rounded-lg p-4 text-center mx-auto hover:border-blue-200 focus:outline-none focus:ring focus:ring-secondary placeholder:font-medium font-bold text-xl text-secondary"
              />
              <input
                type="text"
                name="field-4"
                onChange={handleChange}
                placeholder="4"
                maxLength="1"
                min="1"
                minLength="1"
                max="1"
                required
                className="w-14 h-16 border rounded-lg p-4 text-center mx-auto hover:border-blue-200 focus:outline-none focus:ring focus:ring-secondary placeholder:font-medium font-bold text-xl text-secondary"
              />
              <input
                type="text"
                name="field-5"
                onChange={handleChange}
                placeholder="3"
                maxLength="1"
                min="1"
                minLength="1"
                max="1"
                required
                className="w-14 h-16 border rounded-lg p-4 text-center mx-auto hover:border-blue-200 focus:outline-none focus:ring focus:ring-secondary placeholder:font-medium font-bold text-xl text-secondary"
              />
              <input
                type="text"
                name="field-6"
                onChange={handleChange}
                placeholder="4"
                maxLength="1"
                min="1"
                minLength="1"
                max="1"
                required
                className="w-14 h-16 border rounded-lg p-4 text-center mx-auto hover:border-blue-200 focus:outline-none focus:ring focus:ring-secondary placeholder:font-medium font-bold text-xl text-secondary"
              />
            </div>
            {/* <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 justify-between mx-auto w-full mt-6 mb-4">
              <button
                type="submit"
                className="w-full py-2.5 bg-secondary px-4 font-semibold text-gray-50 text-sm rounded-lg"
              >
                Verify
              </button>
            </div> */}
          </form>
        </div>
      </Modal>
    </>
  );
}

export default Login;
