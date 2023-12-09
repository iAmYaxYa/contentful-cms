import { createClient } from "contentful";
import { useEffect } from "react";
import { useState } from "react";

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await client.getEntries({ content_type: "projects" });
      const projects = response?.items?.map((item) => {
        const { title, image, url } = item.fields;
        const img = image?.fields?.file?.url;
        const id = item.sys.id;
        return { title, img, id, url };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};

export default useFetch;
