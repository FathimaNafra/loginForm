
// RoleBasedContent.tsx
import React from 'react';

const RoleBasedContent: React.FC = () => {
  return (
    <div>
      <h2>Protected Content</h2>
      <p>This content is only accessible to logged-in users.</p>
    </div>
  );
};

export default RoleBasedContent;
