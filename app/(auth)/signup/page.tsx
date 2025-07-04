"use client";

import signUpAction, { ActionResponse } from "@/actions/signUp";
import { useActionState } from "react";

const signUp = () => {


  const initialState: ActionResponse = {
    success: false,
    message: "",
    errors: undefined,
  };

const [state, formAction, isPending] = useActionState(async (prevState: ActionResponse, formData: FormData) => {
    try {
      const result = await signUpAction(formData);

      if (result.success) {
        console.log(prevState);
        // toast.success('Signed in successfully')
        // router.push('/dashboard')
        // router.refresh()
      }

      return result
    } catch (err) {
      return {
        success: false,
        message: (err as Error).message || 'An error occurred',
        errors: undefined,
      }
    }
  }, initialState)

  return (
    <div>
      <form
        action={formAction}
        className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-8 max-w-md w-full space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Sign Up
        </h2>

        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          required
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          required
        />

        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          required
        />

        <input
          id="confirmPassword"
          name="confirmPassword"
          type="confirmPassword"
          placeholder="Password"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          required
        />    
        
        <input
          type="text"
          id="tag"
          name="tag"
          placeholder="Inbox Tag Name"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default signUp;
