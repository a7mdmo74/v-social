import React from 'react';

const ProfilePage = async ({ params }: { params: { userId: string } }) => {
  console.log(params.userId);

  return <div>ProfilePage</div>;
};

export default ProfilePage;
