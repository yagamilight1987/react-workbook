import { Container } from '@chakra-ui/react';

export default function ({ children }: { children: Readonly<React.ReactNode> }) {
  return <Container>{children}</Container>;
}
