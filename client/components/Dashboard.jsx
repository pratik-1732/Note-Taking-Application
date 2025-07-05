import React from "react";
import Cards from "./Cards";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Popup from "./popup";

const Dashboard = () => {
  const { userId } = useParams();
  const [userInfo, setUserInfo] = useState("");

  const [showPopup, setShowPopup] = useState(false);
  const [noteContent, setNoteContent] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/dashboard/${userId}`
        );

        setUserInfo(res.data);
      } catch (error) {
        console.error("Error fetching dashboard info:", error);
      }
    };
    fetchUserInfo();
  }, [userId]);

  const handleLogout = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/auth/logout`, {
        withCredentials: true,
      });
      navigate("/signup");
    } catch (error) {
      console.error("Logout error:", error);
      alert("Failed to logout");
    }
  };
  return (
    <div>
      <nav className="flex justify-between items-center py-3 px-4 sm:py-5 sm:px-15 ">
        <div className="flex gap-2 sm:gap-5 items-center">
          <img src="/images/logo.png" className="h-10 w-10 sm:h-20 sm:w-20" />
          <h1 className=" text-2xl sm:text-4xl font-semibold">Dashboard</h1>
        </div>
        <div>
          <button
            onClick={handleLogout}
            className="text-blue-600 underline sm:no-underline font-medium text-lg sm:text-white cursor-pointer sm:text-xl sm:font-medium sm:bg-blue-600 sm:px-4 sm:py-2 sm:rounded-md"
          >
            Sign out
          </button>
        </div>
      </nav>

      <div className="flex flex-col sm:items-center justify-center">
        <div className="m-5 py-6 px-4 sm:mx-20 sm:my-15 sm:px-5 sm:py-10 border border-gray-300 shadow-xl rounded-md text-start sm:w-1/2 ">
          <h1 className="text-2xl sm:text-4xl font-bold mb-5">
            Welcome, {userInfo.name} !
          </h1>

          <p className="text-base sm:text-lg font-normal text-gray-600">
            Email: {userInfo.email}
          </p>
        </div>
        <button
          onClick={() => {
            setShowPopup(true);
          }}
          className="px-5 py-2 m-5 text-lg font-medium bg-blue-600 text-white sm:text-xl rounded-lg sm:px-10 sm:py-3 sm:font-semibold cursor-pointer"
        >
          Create Note
        </button>
      </div>
      <div className="p-5 sm:p-20">
        <h1 className="text-lg font-medium mb-6 text-start sm:text-3xl sm:font-semibold sm:mb-10 sm:text-center">
          Notes
        </h1>
        {!userInfo ? (
          <p>Loading...</p>
        ) : userInfo.notes?.length === 0 ? (
          <p>No notes yet.</p>
        ) : (
          <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:gap-5">
            {userInfo.notes.map((data, index) => (
              <Cards key={data._id || index} data={data} />
            ))}
          </div>
        )}
      </div>
      {showPopup && (
        <Popup
          noteContent={noteContent}
          setNoteContent={setNoteContent}
          onClose={() => {
            setShowPopup(false);
            setNoteContent("");
          }}
          onCreate={async () => {
            const trimmed = noteContent.trim();
            if (!trimmed) {
              alert("Note cannot be empty.");
              return;
            }

            try {
              await axios.post(
                `${import.meta.env.VITE_API_BASE_URL}/api/notes/create`,
                {
                  content: trimmed,
                  userId: userId,
                }
              );

              alert("Note created successfully");
              setShowPopup(false);
              setNoteContent("");

              const res = await axios.get(
                `${import.meta.env.VITE_API_BASE_URL}/api/dashboard/${userId}`
              );
              setUserInfo(res.data);
            } catch (err) {
              console.error("Note creation failed:", err);
              alert("Error creating note.");
            }
          }}
        />
      )}
    </div>
  );
};

export default Dashboard;
