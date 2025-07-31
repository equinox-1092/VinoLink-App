"use client";
import { useTranslation } from "react-i18next";
import { FaGoogle, FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

interface LoginFormProps {
  onSwitchToRegister?: () => void;
}

export const LoginForm = ({ onSwitchToRegister }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        {t("login.title")}
      </h1>

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
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-700"
            >
              {t("login.remember")}
            </label>
          </div>

          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              {t("login.forgotPassword")}
            </a>
          </div>
        </div>

        {/* Sign In Button */}
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            {t("login.submit")}
          </button>
        </div>
      </form>

      {/* Social Login */}
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              {t("login.account")}
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-4 gap-4">
          <button
            type="button"
            className="flex items-center justify-center p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 hover:scale-110 duration-200 transition-all ease-in-out cursor-pointer"
          >
            <FaGoogle className="h-5 w-5 text-red-500" />
          </button>
          <button
            type="button"
            className="flex items-center justify-center p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 hover:scale-110 duration-200 transition-all ease-in-out cursor-pointer"
          >
            <FaFacebookF className="h-5 w-5 text-blue-600" />
          </button>
          <button
            type="button"
            className="flex items-center justify-center p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 hover:scale-110 duration-200 transition-all ease-in-out cursor-pointer"
          >
            <FaGithub className="h-5 w-5 text-gray-800" />
          </button>
          <button
            type="button"
            className="flex items-center justify-center p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 hover:scale-110 duration-200 transition-all ease-in-out cursor-pointer"
          >
            <FaLinkedin className="h-5 w-5 text-blue-700" />
          </button>
        </div>
      </div>
    </div>
  );
};
