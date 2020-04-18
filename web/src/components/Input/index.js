import React from 'react';

import { Container, Input, Search } from './styles';

export default function InputComponent() {
  return (
    <Container>
      <Search size={20} />
      <Input placeholder="Search" />
    </Container>
  );
}
