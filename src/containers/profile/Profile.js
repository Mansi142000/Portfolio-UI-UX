import React, {useState, useEffect, lazy, Suspense} from "react";
import {openSource} from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);

export default function Profile() {
  const [prof, setProfile] = useState(null);  // Set to null for initial state to clearly distinguish unloaded state

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      const getProfileData = async () => {
        try {
          const result = await fetch("/profile.json");
          const contentType = result.headers.get("content-type");

          if (!result.ok) {
            throw new Error('Network response was not ok.');
          }
          
          if (!contentType || !contentType.includes("application/json")) {
            throw new Error('Received non-JSON response from the server.');
          }

          const response = await result.json();
          setProfile(response.data.user);
        } catch (error) {
          console.error(
            `${error.message} (because of this error GitHub contact section could not be displayed. Contact section has reverted to default)`
          );
          setProfile("Error");  // Use a more specific error state or message
          openSource.showGithubProfile = "false";
        }
      };
      getProfileData();
    }
  }, []);

  if (
    openSource.display &&
    openSource.showGithubProfile === "true" &&
    prof && !(typeof prof === "string")  // Check if prof is not a string
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
}
