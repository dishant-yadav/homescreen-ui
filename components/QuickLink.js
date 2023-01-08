import {ArrowUpIcon, Box, Center, HStack, Text, Icon} from 'native-base';
import Card from './QuickLinkCard';

const QuickLink = () => {
  return (
    <Box alignItems={'center'} justifyContent={'center'}>
      <Box
        w={370}
        mx={4}
        my={2}
        px={'2'}
        rounded="xl"
        overflow="hidden"
        shadow={'4'}
        borderColor="coolGray.200"
        borderWidth="1"
        bgColor={'white'}>
        <Text py={6} pl={3} fontWeight={600} fontSize={'md'} color={'black'}>
          Quick Links
        </Text>
        <HStack space="3" alignItems="center" pb="4">
          <Card text={'Holiday Application'} />
          <Card text={'Leave Policy'} />
          <Card text={'Payroll Manual'} />
        </HStack>
      </Box>
    </Box>
  );
};

export default QuickLink;
