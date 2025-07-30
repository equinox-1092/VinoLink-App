"use client";
import { useTranslation } from "react-i18next";
import { FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export const LoginForm = () => {
const { t } = useTranslation();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-50">
      {/* Main Container */}
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex flex-row-reverse">
          {/* Right Side - Welcome */}
          <div className="w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 flex flex-col items-center justify-center p-12 text-white text-center rounded-l-[180px] min-h-[85vh]">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-white transform skew-x-12 origin-left"></div>
            <div className="max-w-md relative z-10">
              <h1 className="text-4xl font-bold mb-4">{t("login.titleRegister")}</h1>
              <p className="mb-8 text-blue-100">
                {t("login.subtitleRegister")}
              </p>
              <Link
                href="/auth/register"
                className="inline-block border-2 border-white text-white px-8 py-2 rounded-md hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                {t("login.buttonRegister")}
              </Link>
            </div>
          </div>
          
          {/* Left Side - Form */}
          <div className="w-1/2 p-8 flex items-center">
            <div className="w-full max-w-md mx-auto">
              <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">{t("login.title")}</h1>
              
              <form className="space-y-6">
                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    placeholder={t("login.email")}
                    className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
                
                {/* Password Input */}
                <div>
                  <input
                    type="password"
                    placeholder={t("login.password")}
                    className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
                
                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    {t("login.remember")}
                  </label>
                  <a href="#" className="text-blue-600 hover:underline">{t("login.forgotPassword")}</a>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  {t("login.submit")}
                </button>
                
                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      {t("login.account")}
                    </span>
                  </div>
                </div>
                
                {/* Social Buttons */}
                <div className="flex justify-center gap-4">
                  <button
                    type="button"
                    className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    aria-label="Google"
                  >
                    <FaGoogle className="text-gray-600" />
                  </button>
                  <button
                    type="button"
                    className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="text-gray-600" />
                  </button>
                  <button
                    type="button"
                    className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="text-gray-600" />
                  </button>
                </div>
                
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
