import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";

export const useUserGroups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userGroups, setUserGroups] = useState([]);
  const auth = getAuth();

  useEffect(() => {
    const loadGroups = async () => {
      const user = auth.currentUser;
      if (!user) {
        setUserGroups([]);
        setIsLoading(false);
        return;
      }

      const response = await fetch(
        `http://localhost:8080/users/${user.uid}/groups`,
        {
          headers: {
            AuthToken: await user.getIdToken(),
          },
        }
      );
      const groups = await response.json();
      setUserGroups(groups);
      setIsLoading(false);
    };

    loadGroups();
  }, []);

  return { isLoading, userGroups };
};
