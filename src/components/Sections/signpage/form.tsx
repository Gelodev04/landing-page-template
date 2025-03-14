import { Arrow } from "../home/home_section/icons";


export default function LoginForm() {
  return (
    <form className="w-full mx-auto space-y-4 font-inter">
  
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
       
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 text-sm"
        />
      </div>

      {/* Password Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
         
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 text-sm"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white rounded py-2 text-sm flex item justify-center gap-1 hover:bg-blue-700 transition"
      >
        <span>Sign In</span>
        <Arrow width={15}/>
      </button>

      <button className="text-blue-600 text-center text-sm w-full">Forgot your password?</button>
    </form>
  )
}
