export default function Divider() {
    return (
      <div className="flex items-center w-full">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="px-3 text-gray-500 text-sm italic">or</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>
    );
  }
  