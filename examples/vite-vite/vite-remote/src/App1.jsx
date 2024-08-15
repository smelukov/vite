import React from 'react';

import styled from 'styled-components';

export default styled(function ({ className }) {
  return <div className={className}>Vite react App1 as default export via remote</div>;
})`
  background: yellow;
  padding: 30px;
`;
