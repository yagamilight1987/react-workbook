import { Code, Divider, Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react';

export default function () {
  return (
    <>
      <Heading size="lg" marginBottom={4}>
        Headings
        <Divider marginBlock={4} />
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem>
          <Stack gap={4}>
            <Heading as="h1" size="3xl" noOfLines={1}>
              (3xl) Heading 1
            </Heading>
            <Heading as="h2" size="2xl" noOfLines={1}>
              (2xl) Heading 2
            </Heading>
            <Heading as="h3" size="xl">
              (xl) Heading 3
            </Heading>
            <Heading as="h4" size="lg">
              (lg) Heading 4
            </Heading>
            <Heading as="h5" size="md">
              (md) Heading 5
            </Heading>
            <Heading as="h6" size="sm">
              (sm) Heading 6
            </Heading>
            <p>This is paragraph</p>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack gap={4}>
            <Code>
              <Heading as="h1" size="3xl">
                Font size: 60px
              </Heading>
            </Code>
            <Code>
              <Heading as="h2" size="2xl" noOfLines={1}>
                Font size: 48px
              </Heading>
            </Code>
            <Code>
              <Heading as="h3" size="xl">
                Font size: 36px
              </Heading>
            </Code>
            <Code>
              <Heading as="h4" size="lg">
                Font size: 30px
              </Heading>
            </Code>
            <Code>
              <Heading as="h5" size="md">
                Font size: 20px
              </Heading>
            </Code>
            <Code>
              <Heading as="h6" size="sm">
                Font size: 16px
              </Heading>
            </Code>
            <Code>
              <Text>Font size: 16px</Text>
            </Code>
          </Stack>
        </GridItem>
      </Grid>
    </>
  );
}
