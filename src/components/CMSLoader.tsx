import { useEffect } from "react";
import CMS from "decap-cms-app"; // Assuming this is the correct import
import config from "@/cms/config"; // Ensure the path is correct

// Create a CMS Loader component
const CMSLoader: React.FC = () => {
  useEffect(() => {
    // Check if we're in a browser context
    if (typeof window !== "undefined") {
      const loadCMS = async () => {
        try {
          CMS.init({ config }); // Initialize the CMS with config
        } catch (error) {
          console.error("Failed to load CMS:", error);
        }
      };

      // Call the async function to load and initialize the CMS
      loadCMS();
    }
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  return <div id="cms" />;
};

export default CMSLoader;
