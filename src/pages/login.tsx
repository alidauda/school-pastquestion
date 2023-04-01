import {
  Grid,
  GridItem,
  Center,
  Heading,
  Input,
  Button,
  Box,
  Image,
  Text,
} from '@chakra-ui/react';

export default function Login() {
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
              <Heading size='md'>Login</Heading>
            </Center>
            <Center>
              <Image src='./book.jpg' boxSize='100px' objectFit='cover' />
            </Center>
          </Box>
          <Box>
            <Input
              placeholder='email'
              borderTop={0}
              borderLeft={0}
              borderRight={0}
            />
          </Box>
          <Box>
            <Input
              placeholder='pasword'
              borderTop={0}
              borderLeft={0}
              borderRight={0}
              focusBorderColor='white'
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
              <Text fontSize='xs'>{`don't have  an account?`}</Text>
            </Center>
          </Box>
        </Grid>
      </GridItem>
    </Grid>
  );
}
