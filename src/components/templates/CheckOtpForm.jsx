import React from "react";
import { toast } from "react-toastify";
import { checkOtp } from "../../services/auth";

function CheckOtpForm({ code, setCode, mobile, setStep }) {
  const submitHandler = async (event) => {
    event.preventDefault();
    if (code.length !== 5) {
      toast.error("کد تایید نامعتبر است");
      return;
    }

    const { response, error } = await checkOtp(mobile, code);
    console.log({response , error})
  };
  return (
    <form onSubmit={submitHandler}>
      <p>تایید کد پیامک شده</p>
      <span>کد پیامک شده به شماره «{mobile}» را وارد کنید</span>
      <label htmlFor="input">کد تایید را وارد کنید</label>
      <input
        type="text"
        id="input"
        placeholder="کد تایید"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        ref={input}
      />
      <button type="submit">ورود</button>
      <button onClick={() => setStep(1)}>تغیر شماره موبایل</button>
    </form>
  );
}

export default CheckOtpForm;
