import { getInitials } from "@/utils/helper";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface ProfileInfoProps {
  fullName: string;
}

const ProfileInfo: React.FC<ProfileInfoProps> = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { push } = useRouter();
  const name = "John Doe";

  const showDropdown = () => setIsDropdownVisible(true);
  const hideDropdown = () => setIsDropdownVisible(false);

  const toggleDropdown = () => setIsDropdownVisible((prev) => !prev);

  const handleLogOut = () => {
    push("/");
  };

  return (
    <section
      className="flex items-center gap-4 relative"
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
      onClick={toggleDropdown}
    >
      <h1
        className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 cursor-pointer"
        onClick={toggleDropdown}
      >
        {getInitials(name)}
      </h1>
      {isDropdownVisible && (
        <div className="absolute right-0 top-full bg-white border rounded shadow-lg py-2 w-32">
          <p className="text-sm font-medium px-4 py-2 uppercase text-black">
            {`${name}` || "user"}
          </p>
          <button
            onClick={handleLogOut}
            className="text-sm text-red-700 uppercase font-bold px-4 py-2 w-full text-left"
          >
            Log Out
          </button>
        </div>
      )}
    </section>
  );
};

export default ProfileInfo;
