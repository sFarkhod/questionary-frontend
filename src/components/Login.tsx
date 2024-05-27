import React, { useState } from 'react'
import { Controller, Resolver, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useLoginUserMutation, useRegisterUserMutation } from '../redux/services/registerApi';
import { RegisterFormValues } from './Register';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { setAccess, setRefresh } from '../redux/services/userSlice';
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

// types
export type LoginFormValues = {
  username: string;
  password: string;

  access: string;
  refresh: string;
};

// resolver for validating inputs
const resolver: Resolver<LoginFormValues> = async (values) => {
  return {
    values,
    errors: {
      ...(values.username === ""
        ? {
          username: {
            type: "required",
            message: "Please write your email. This field cannot be empty.",
          },
        }
        : {}),
      ...(values.password === ""
        ? {
          password: {
            type: "required",
            message:
              "Please write your password. This field cannot be empty.",
          },
        }
        : {}),
    },
  };
};

function Login() {
  const navigate = useNavigate();

  // for showing and hiding passwords
  const [showPassword, setShowPassword] = useState(false);
  const handleKeyVisibility = () => {
    setShowPassword((prevShowKey) => !prevShowKey);
  };

  const [LoginResult, { isLoading }] = useLoginUserMutation();

  const {
    handleSubmit,
    control,

    formState: { errors },
  } = useForm<LoginFormValues>({ resolver });

  const dispatch = useDispatch();

  const onSubmit = async (data: LoginFormValues) => {
    const LoginData = {
      username: data.username,
      password: data.password,
    };

    console.log(LoginData);

    try {
      const response: any = await LoginResult(LoginData);
      if ("error" in response) {
        const errorMessages: string[] = [];
        Object.keys(response.error.data).forEach((key) => {
          const errorField = response.error.data[key][0];
          if (errorField) {
            errorMessages.push(`${key}: ${errorField}`);
          }
        });

        if (errorMessages.length > 0) {
          toast.error(errorMessages.join("\n"));
        }
      } else {
        console.log(response)
        dispatch(setAccess(response.data.token.access));
        dispatch(setRefresh(response.data.token.refresh));
        toast.success("You are successfully logged up");

        navigate("/");
      }
    } catch (err) {
      toast.error("There is some small issues please try again later");
    }
  }

  return (
    <>
      <div>
        <h2>Login</h2>
        <div>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  {...field}
                  type="text"
                  className={`block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.username ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {errors.username && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.username.message}
                  </p>
                )}
              </div>
            )}
          />
          <div>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      className={`block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.password ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.password && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.password.message}
                      </p>
                    )}
                    <div className="absolute right-0 pr-3 flex items-center top-2">
                      <button
                        type="button"
                        onClick={handleKeyVisibility}
                        className="focus:outline-none"
                      >
                        {showPassword ? (
                          <EyeIcon className="h-5 w-5 text-gray-500" />
                        ) : (
                          <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit(onSubmit)}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            {isLoading ? "Logging in..." : "Submit"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Login