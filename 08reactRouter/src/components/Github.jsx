import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  //const [data, setData] = useState({});
  // useEffect(() => {
  //   fetch("https://api.github.com/users/codes4vinay")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-gray-100 to-gray-200">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-96 text-center">
        {/* Avatar */}
        <img
          src={data.avatar_url}
          alt="avatar"
          className="w-28 h-28 rounded-full mx-auto border-4 border-gray-200 shadow-md"
        />

        {/* Name */}
        <h2 className="mt-4 text-2xl font-bold text-gray-800">{data.name}</h2>
        <p className="text-gray-500">@{data.login}</p>

        {/* Bio */}
        <p className="mt-3 text-gray-600 text-sm">{data.bio}</p>

        {/* Stats */}
        <div className="flex justify-between mt-6 text-sm">
          <div>
            <p className="font-bold text-lg">{data.followers}</p>
            <p className="text-gray-500">Followers</p>
          </div>
          <div>
            <p className="font-bold text-lg">{data.following}</p>
            <p className="text-gray-500">Following</p>
          </div>
          <div>
            <p className="font-bold text-lg">{data.public_repos}</p>
            <p className="text-gray-500">Repos</p>
          </div>
        </div>

        {/* Profile Button */}
        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition"
        >
          View Profile
        </a>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/codes4vinay");
  return response.json();
};
