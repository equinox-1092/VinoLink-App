"use client";
import { useTranslation } from "react-i18next";
import { FaGoogle, FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export const RegisterForm = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      {/* Main Container */}
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex flex-row-reverse">
          {/* Right Side - Form */}
          <div className="w-1/2 p-8">
            <div className="w-full max-w-md mx-auto">
              <h1 className="text-2xl font-bold text-gray-800 mb-6">{t("register.title")}</h1>
              
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder={t("register.namePlaceholder")}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder={t("register.userPlaceholder")}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <input
                  type="email"
                  placeholder={t("register.emailPlaceholder")}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                <input
                  type="password"
                  placeholder={t("register.passwordPlaceholder")}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                <input
                  type="password"
                  placeholder={t("register.confirmPasswordPlaceholder")}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                <select
                  name="role"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500"
                >
                  <option value="">{t("register.rolePlaceholder")}</option>
                  <option value="user">{t("register.roleOptions[0]")}</option>
                  <option value="producer">{t("register.roleOptions[1]")}</option>
                  <option value="provider">{t("register.roleOptions[2]")}</option>
                </select>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  {t("register.submit")}
                </button>
                
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      {t("register.account")}
                    </span>
                  </div>
                </div>
                
                <div className="flex justify-center gap-4 mb-6">
                  <button
                    type="button"
                    className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    aria-label="Google"
                  >
                    <FaGoogle className="text-gray-600" />
                  </button>
                  <button
                    type="button"
                    className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="text-gray-600" />
                  </button>
                  <button
                    type="button"
                    className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-gray-600" />
                  </button>
                  <button
                    type="button"
                    className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-gray-600" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Left Side - Welcome */}
          <div className="w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 flex flex-col items-center justify-center p-12 text-white text-center rounded-r-[180px]">
            <div className="max-w-md">
              <h2 className="text-4xl font-bold mb-4">{t("register.titleRegister")}</h2>
              <p className="mb-8 text-blue-100">
                {t("register.options")}
              </p>
              <Link
                href="/auth/login"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-2 rounded-md hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                {t("register.buttonLogin")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
