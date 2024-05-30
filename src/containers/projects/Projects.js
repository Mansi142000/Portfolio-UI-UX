import React, {useState, useEffect, Suspense, lazy} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {openSource, socialMediaLinks} from "../../portfolio";
import Loading from "../../containers/loading/Loading";

export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    const getRepoData = async () => {
      try {
        const result = await fetch("/profile.json");
        if (result.ok) {
          const response = await result.json();
          setRepo(response.data.user.pinnedItems.edges);
        } else {
          throw new Error('Network response was not ok');
        }
      } catch (error) {
        console.error(
          `Error fetching repo data: ${error.message} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
        );
        setRepo("Error");
      }
    };
    getRepoData();
  }, []);

  if (!(typeof repo === "string" || repo instanceof String) && openSource.display) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Open Source Projects</h1>
          <div className="repo-cards-div-main">
            {repo.map((v, i) => {
              if (!v) {
                console.error(`GitHub Object for repository number ${i} is undefined`);
              }
              return (
                <GithubRepoCard repo={v} key={v.node.id} />
              );
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
