import React from 'react';

export const useCollapse = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  function toggleSidebar() {
    setCollapsed(prevState => !prevState)
  }

  return {
    collapsed,
    toggleSidebar
  }
}