import React from "react";

export default Component => props => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return <Component mounted={mounted} {...props} />;
};
