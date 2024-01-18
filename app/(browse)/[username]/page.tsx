interface UserPageProps {
  params: {
    username: string;
  };
}

const UserPage = ({ params } : UserPageProps) => {
  return <div>UserPage</div>;
};

export default UserPage;
