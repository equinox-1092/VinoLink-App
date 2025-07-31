"use client";
import { useTranslation } from "react-i18next";
import { FaGoogle, FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

interface RegisterFormProps {
  onSwitchToLogin?: () => void;
}

export const RegisterForm = ({ onSwitchToLogin }: RegisterFormProps) => {
  const { t } = useTranslation();
  const roleOptions = t("register.roleOptions", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="w-full px-8 py-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        {t("register.title")}
      </h1>

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
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        >
          <option value="">{t("register.rolePlaceholder")}</option>
          {roleOptions.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>

        <div className="flex items-center">
          <input
            id="terms"
            type="checkbox"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
            I agree to the{" "}
            <a href="#" className="text-blue-600 hover:underline">
              terms and conditions
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
        >
          {t("register.submit")}
        </button>
        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              {t("register.account")}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-4">
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
      </form>
    </div>
  );
};
