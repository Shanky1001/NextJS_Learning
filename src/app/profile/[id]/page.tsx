import React from "react";

const UserProfilePage = ({params}: any) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-4xl">
        ProfilePage <span className="text-red-500">{params.id}</span>
      </h1>
    </div>
  );
};

export default UserProfilePage;
