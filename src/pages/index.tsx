import {
  Box,
  Center,
  Grid,
  GridItem,
  Container,
  Button,
  Input,
  Heading,
  FormLabel,
  Text,
  Image,
} from '@chakra-ui/react';
export default function Home() {
  return (
    <Grid
      height='100vh'
      placeContent={{ md: 'center' }}
      bgColor={{ md: 'blue.600' }}
    >
      <GridItem
        m={2}
        p={5}
        minWidth={{ md: '500px' }}
        bgColor={'white'}
        borderRadius={7}
        boxShadow={2}
      >
        <Grid gap={8}>
          <Box>
            <Center>
              <Heading size='md'>Create an Account</Heading>
            </Center>
            <Center>
              <Image src='./book.jpg' boxSize='100px' objectFit='cover' />
            </Center>
          </Box>
          <Box>
            <Input
              placeholder='Name'
              borderTop={0}
              borderLeft={0}
              borderRight={0}
            />
          </Box>
          <Box>
            <Input
              placeholder='LastName'
              borderTop={0}
              borderLeft={0}
              borderRight={0}
              focusBorderColor='white'
            />
          </Box>
          <Box>
            <Input
              placeholder='Email'
              borderTop={0}
              borderLeft={0}
              borderRight={0}
            />
          </Box>

          <Box>
            <Input
              placeholder='Password'
              borderTop={0}
              borderLeft={0}
              borderRight={0}
            />
          </Box>

          <Box>
            <Button
              borderRadius={10}
              textColor={'white'}
              colorScheme={'blue'}
              width={'100%'}
            >
              Sign Up
            </Button>
            <Center>
              {' '}
              <Text fontSize='xs'>already have an account?</Text>
            </Center>
          </Box>
        </Grid>
      </GridItem>
    </Grid>
  );
}
