import ReactPaginate from 'react-paginate';
import { Box, Text, Icon } from '@chakra-ui/react';
import { GrNext, GrPrevious } from 'react-icons/gr';

const NumberPagination = ({ pageCount, onPageChange }: { pageCount: number; onPageChange: (selectedItem: { selected: number }) => void }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt={8}>
      <ReactPaginate
        previousLabel={<Icon as={GrPrevious} w="5" h="5" />}
        nextLabel={<Icon as={GrNext} w="5" h="5" />}
        breakLabel={<Text mx={2}>...</Text>}
        pageCount={pageCount}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        onPageChange={onPageChange}
        containerClassName="pagination"
        activeClassName="active"
      />
    </Box>
  );
};

export default NumberPagination;
